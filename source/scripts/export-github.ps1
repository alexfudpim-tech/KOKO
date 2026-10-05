$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression
$taskRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$taskOutput = Join-Path $taskRoot 'koko-github-ready.zip'
if (Test-Path -LiteralPath $taskOutput) { throw 'Export already exists; choose a new filename before creating another export.' }
$taskArchive = [IO.Compression.ZipFile]::Open($taskOutput, [IO.Compression.ZipArchiveMode]::Create)
try {
  $taskPaths = @('src','public','.github','scripts','package.json','package-lock.json','vite.config.js','index.html','README.md','PRODUCT.md','DESIGN.md','.gitignore')
  foreach ($taskPath in $taskPaths) {
    $taskItem = Get-Item -LiteralPath (Join-Path $taskRoot $taskPath)
    $taskFiles = if ($taskItem.PSIsContainer) { Get-ChildItem -LiteralPath $taskItem.FullName -File -Recurse -Force } else { @($taskItem) }
    foreach ($taskFile in $taskFiles) {
      $taskRelative = $taskFile.FullName.Substring($taskRoot.Length + 1).Replace('\','/')
      [IO.Compression.ZipFileExtensions]::CreateEntryFromFile($taskArchive, $taskFile.FullName, $taskRelative) | Out-Null
    }
  }
} finally { $taskArchive.Dispose() }
$taskRead = [IO.Compression.ZipFile]::OpenRead($taskOutput)
try {
  $taskNames = @($taskRead.Entries.FullName)
  if ($taskNames -match '(^|/)(\.git/|\.env|node_modules/|\.openai/|\.sites-runtime/|review/)') { throw 'Unexpected private entry in export.' }
  if ('.github/workflows/pages.yml' -notin $taskNames -or 'src/components/mobile-ui.jsx' -notin $taskNames) { throw 'Required source missing.' }
  Write-Output "PASS: $($taskNames.Count) entries, source and Pages workflow present, no private runtime files."
} finally { $taskRead.Dispose() }
Get-FileHash -LiteralPath $taskOutput -Algorithm SHA256

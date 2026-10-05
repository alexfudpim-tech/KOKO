export function readUIMode(search) {
  const mode = new URLSearchParams(search).get('ui');
  return ['mobile', 'desktop'].includes(mode) ? mode : 'auto';
}
export function isMobileUI(mode, narrow) {
  return mode === 'mobile' || (mode === 'auto' && narrow);
}
export function modeURL(href, mode) {
  const url = new URL(href);
  if (mode === 'auto') url.searchParams.delete('ui');
  else url.searchParams.set('ui', mode);
  return url;
}

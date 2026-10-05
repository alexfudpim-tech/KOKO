export default function BrandLogo({ onClick, className = '' }) {
  return <button type="button" className={`brand-logo ${className}`} onClick={onClick} aria-label="KOKO — главная">
    <svg className="brand-symbol" viewBox="0 0 48 54" fill="currentColor" aria-hidden="true">
      <path d="M24 2c2 7 5 10 11 12-6 2-9 5-11 12-2-7-5-10-11-12C19 12 22 9 24 2Z" />
      <path d="M23 50C8 48 2 36 2 19c15 1 22 12 21 31Zm2 0c15-2 21-14 21-31-15 1-22 12-21 31Z" />
    </svg>
    <span className="brand-lockup"><span className="brand-name">KOKO</span><span className="brand-tagline">ÖZİNDİ SÜİ</span></span>
  </button>;
}

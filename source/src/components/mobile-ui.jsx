import { Home, Search, Heart, ShoppingBag, UserRound, ArrowUpRight, Sun } from 'lucide-react';
import { categories, products } from '../catalog';

export function MobileHeader({ home, browse, query, setQuery, showProfile }) {
  return <header className="mobile-header"><div className="mobile-brand-row"><button className="wordmark" onClick={home} aria-label="KOKO — главная">koko<span>beauty in your pocket</span></button><button className="mobile-avatar" onClick={showProfile} aria-label="Открыть профиль"><UserRound size={22} aria-hidden="true" /></button></div><form className="mobile-search" onSubmit={e => { e.preventDefault(); browse('all', query); }}><Search size={20} aria-hidden="true" /><input type="search" placeholder="Твоя следующая beauty-находка" aria-label="Найти косметику или бренд" value={query} onChange={e => setQuery(e.target.value)} /><button aria-label="Искать" type="submit"><ArrowUpRight size={20} aria-hidden="true" /></button></form></header>;
}

export function MobileHome({ concept, browse, showProfile, renderProduct }) {
  const headline = concept === 'gloss' ? <>Красота<br /><i>как чувство.</i></> : concept === 'skin' ? <>Твой уход.<br />Ничего лишнего.</> : <>Твоя кожа.<br />Твои правила.</>;
  return <div className="mobile-home">
    <section className="mobile-campaign"><img src={concept === 'skin' ? './images/skin.jpg' : './images/beauty-editorial.png'} alt={concept === 'skin' ? 'Косметика на воде' : 'Beauty-портрет с естественным сиянием кожи'} fetchPriority="high" /><div className="mobile-campaign-copy"><span>KOKO / BEAUTY EDIT 01</span><h1>{headline}</h1><button onClick={() => browse()}>Найти своё <ArrowUpRight size={19} aria-hidden="true" /></button></div><span className="mobile-campaign-note">ТВОЙ МАЛЕНЬКИЙ РИТУАЛ</span></section>
    <nav className="mobile-category-rail" aria-label="Категории косметики">{categories.slice(1).map((c, i) => <button key={c.id} onClick={() => browse(c.id)}><span style={{ background: products[[0,1,2,4,3][i]].color }}><img src={products[[0,1,2,4,3][i]].image} alt="" /></span>{c.name}</button>)}</nav>
    <section className="mobile-shelf"><div className="mobile-section-heading"><div><small>THE BEAUTY SHORTLIST</small><h2>На твою полку</h2></div><button onClick={() => browse()} aria-label="Открыть весь каталог"><ArrowUpRight aria-hidden="true" /></button></div><div className="mobile-product-rail">{products.map(renderProduct)}</div><p className="price-disclosure">Тестовый ассортимент и демонстрационные цены.</p></section>
    <section className="mobile-promo" id="promotions"><div><span>BEAUTY WEEK / ДЕМО</span><h2>Больше заботы.<br />Меньше суеты.</h2><p>Открой свою новую<br />вечернюю рутину.</p><button onClick={() => browse('cleansing')}>Смотреть подборку <ArrowUpRight size={18} aria-hidden="true" /></button></div><img src="./images/gloss.jpg" alt="Розовый косметический флакон в каплях" loading="lazy" /></section>
    <button className="mobile-spf" onClick={() => browse('spf')}><Sun size={32} aria-hidden="true" /><div><small>DAILY ESSENTIAL</small><h2>SPF. Каждый день.</h2><p>Защита, которую хочется взять с собой.</p></div><ArrowUpRight size={22} aria-hidden="true" /></button>
    <section className="mobile-club"><span>ТВОЁ ПРОСТРАНСТВО KOKO</span><h2>Красота —<br />это личное.</h2><p>Сохраняй находки и собирай свою полку.</p><button onClick={showProfile}>Открыть демо-профиль <ArrowUpRight size={18} aria-hidden="true" /></button><small>Без регистрации. Сохранение только на устройстве.</small></section>
    <a className="mobile-social" href="https://koko.kz/" target="_blank" rel="noopener noreferrer"><img src="./images/koko-social.jpg" alt="Косметика из материалов KOKO" loading="lazy" /><div><small>KOKO В ТВОЕЙ ЛЕНТЕ</small><p>Beauty in real life.</p><span>Соцсети на сайте KOKO ↗</span></div></a>
  </div>;
}

export function MobileDock({ view, cartOpen, home, browse, showFavorites, showProfile, openCart, totalCount, favoriteCount }) {
  const entries = [['home', 'Главная', Home, home], ['catalog', 'Каталог', Search, () => browse()], ['favorites', 'Избранное', Heart, showFavorites], ['cart', 'Корзина', ShoppingBag, openCart], ['profile', 'Профиль', UserRound, showProfile]];
  return <nav className="mobile-dock" aria-label="Мобильная навигация">{entries.map(([id, label, Icon, action]) => <button key={id} onClick={action} aria-current={(cartOpen ? id === 'cart' : view === id) ? 'page' : undefined}><span><Icon size={21} aria-hidden="true" />{id === 'cart' && totalCount > 0 && <b>{totalCount}</b>}{id === 'favorites' && favoriteCount > 0 && <b>{favoriteCount}</b>}</span>{label}</button>)}</nav>;
}

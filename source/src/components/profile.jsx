import { useState } from 'react';
import { Heart, ShoppingBag, Package, UserRound, Droplets } from 'lucide-react';
import SmoothTab from './smooth-tab';
import { products, money, basketTotal, skinTypes, careGoals, normalizePreferences } from '../catalog';
const tabs = [{ id: 'overview', title: 'Профиль' }, { id: 'favorites', title: 'Избранное' }, { id: 'settings', title: 'Мой уход' }];

export default function Profile({ favorites, cart, browse, open, toggleFavorite, openCart, home, notify }) {
  const [tab, setTab] = useState('overview');
  const [preferences, setPreferences] = useState(() => { try { return normalizePreferences(JSON.parse(localStorage.getItem('koko-preview-preferences'))); } catch { return normalizePreferences(null); } });
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');
  const favoriteProducts = products.filter(p => favorites.includes(p.id));
  const count = Object.values(cart).reduce((sum, n) => sum + n, 0);
  function save(event) {
    event.preventDefault();
    try { localStorage.setItem('koko-preview-preferences', JSON.stringify(normalizePreferences(preferences))); setSaved(true); setError(''); notify('Настройки превью сохранены на этом устройстве.'); }
    catch { setError('Браузер не разрешил сохранение. Настройки остаются здесь до закрытия страницы.'); setSaved(false); }
  }
  return <section className="profile-page section-wrap">
    <div className="catalog-top"><button className="text-button" onClick={home}>Главная</button><span>/ Личный кабинет</span></div>
    <header className="profile-heading"><div><h1>Твоя beauty-полка.</h1><p>Всё любимое — ближе.</p></div><span className="profile-demo">Демо-профиль · без входа</span></header>
    <div className="profile-layout"><aside className="profile-identity"><span className="profile-avatar"><UserRound size={40} aria-hidden="true" /></span><h2>Привет, beauty lover!</h2><p>Твоё пространство KOKO</p><span className="profile-local-note">Это пример кабинета.<br />Корзина и избранное — только в этом браузере. Настоящий аккаунт не создан.</span><div className="profile-identity-photo"><img src="./images/beauty-editorial.png" alt="Beauty-портрет KOKO" loading="lazy" /><span>BEAUTY<br />IS PERSONAL.</span></div></aside>
      <div className="profile-content"><SmoothTab items={tabs} selected={tab} onChange={setTab} label="Разделы профиля" idPrefix="account-" swatches={false} className="profile-tabs" /><div id={`account-panel-${tab}`} role="tabpanel" aria-labelledby={`account-tab-${tab}`} className="profile-tab-content">
        {tab === 'overview' && <><div className="profile-quick-actions"><button onClick={() => setTab('favorites')}><Heart size={23} aria-hidden="true" /><span>Избранное</span><strong>{favorites.length}</strong><small>Сохранённые находки</small></button><button onClick={openCart}><ShoppingBag size={23} aria-hidden="true" /><span>Тестовая корзина</span><strong>{count}</strong><small>{money(basketTotal(cart))}</small></button></div><section className="profile-orders"><Package size={28} aria-hidden="true" /><div><h2>Заказы появятся здесь</h2><p>В этом прототипе покупок нет. Здесь будет история заказов после подключения магазина.</p><button className="text-button" onClick={() => browse()}>Пока посмотрим косметику</button></div></section><article className="profile-routine"><div><Droplets size={26} aria-hidden="true" /><h2>Уход в твоём ритме.</h2><p>Выбери направление для своей beauty-полки.</p><button className="primary-button" onClick={() => setTab('settings')}>Настроить превью ухода</button></div><img src="./images/skin.jpg" alt="Косметика на прозрачной воде" loading="lazy" /></article></>}
        {tab === 'favorites' && <><div className="profile-section-title"><h2>Твои находки</h2><span>{favoriteProducts.length} товаров</span></div>{favoriteProducts.length ? <div className="profile-favorites">{favoriteProducts.map(p => <article key={p.id}><button className="profile-favorite-photo" aria-label={`Открыть ${p.name}`} onClick={() => open(p)}><img src={p.image} alt={`${p.brand} ${p.name}`} loading="lazy" /></button><div><span>{p.brand}</span><button className="profile-favorite-name" onClick={() => open(p)}>{p.name}</button><b>{money(p.price)}</b><button className="profile-remove" onClick={() => toggleFavorite(p.id)}>Убрать из избранного</button></div></article>)}</div> : <div className="empty-state"><Heart size={34} aria-hidden="true" /><h2>Пока без фаворитов</h2><p>Сохраняй товары сердечком.<br />Они появятся на этой полке.</p><button className="primary-button" onClick={() => browse()}>Найти любимое</button></div>}<p className="profile-local-note">Демонстрационные цены. Избранное не синхронизируется между устройствами.</p></>}
        {tab === 'settings' && <form className="profile-settings" onSubmit={save}><h2>Твой уход начинается здесь.</h2><p>Настройки демонстрации — не персональная консультация.</p><label>Тип кожи<select value={preferences.skin} onChange={e => { setPreferences(p => ({ ...p, skin: e.target.value })); setSaved(false); }}>{skinTypes.map(type => <option key={type}>{type}</option>)}</select></label><label>Что ищем сегодня?<select value={preferences.goal} onChange={e => { setPreferences(p => ({ ...p, goal: e.target.value })); setSaved(false); }}>{careGoals.map(goal => <option key={goal}>{goal}</option>)}</select></label><button className="primary-button" type="submit">{saved ? 'Настройки сохранены' : 'Сохранить на устройстве'}</button>{error && <p role="alert" className="profile-error">{error}</p>}<small>Сохраняются только настройки этого превью. Имя, телефон и пароль не запрашиваются.</small></form>}
      </div></div>
    </div>
  </section>;
}

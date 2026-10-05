import { Sun, Copy, Gift } from 'lucide-react';
import { products } from '../catalog';

export default function Promotions({ browse, open, notify, showProfile }) {
  async function copy() {
    try { await navigator.clipboard.writeText('BEAUTY15'); notify('BEAUTY15 скопирован. Это пример промокода, он не действует.'); }
    catch { notify('Не удалось скопировать. Пример кода: BEAUTY15 — не действует.'); }
  }
  return <section className="promotions section-wrap" id="promotions" aria-label="Промо-подборки KOKO">
    <div className="section-heading"><h2>Больше поводов<br />для красоты.</h2><span className="promo-intro">Beauty edit от KOKO<br />Новый взгляд на привычный уход</span></div>
    <article className="beauty-week">
      <div className="campaign-copy"><h3>BEAUTY<br /><span>WEEK</span></h3><p>Самое время собрать<br />свою новую косметичку.</p><div className="campaign-buttons"><button className="primary-button" onClick={() => browse()}>Выбрать свой уход</button><button className="promo-code" onClick={copy}><Copy size={16} aria-hidden="true" />BEAUTY15</button></div><small>Дизайн акции: пример −15%, промокод не действует.<br />Цены в корзине не меняются.</small></div>
      <div className="campaign-art"><img src="./images/gloss.jpg" alt="Розовый beauty-флакон в каплях воды" loading="lazy" /><span className="campaign-discount">−15%<small>ДЕМО</small></span><span className="campaign-signature">KOKO BEAUTY EDIT</span></div>
    </article>
    <div className="promo-pair">
      <article className="promo-cleanse"><div><h3>Вечер<br />без спешки.</h3><p>Мягкое очищение.<br />Твоя любимая текстура.</p><button className="text-button" onClick={() => open(products[0])}>Знакомьтесь: Clean It Zero</button></div><img src={products[0].image} alt="Очищающий бальзам BANILA CO Clean It Zero" loading="lazy" /></article>
      <article className="promo-sun"><div><Sun size={28} aria-hidden="true" /><h3>Солнце есть.<br />SPF тоже.</h3><p>Один простой шаг<br />в твоём утреннем уходе.</p><button className="text-button" onClick={() => browse('spf')}>Смотреть SPF-подборку</button></div><img src={products[3].image} alt="Солнцезащитный крем BEAUTY OF JOSEON Relief Sun" loading="lazy" /></article>
    </div>
    <div className="beauty-club"><Gift size={28} aria-hidden="true" /><h3>Твоя красота.<br />Твоё пространство.</h3><p>Сохраняй находки и собирай<br />личную beauty-полку.</p><button className="primary-button" onClick={showProfile}>Открыть профиль</button></div>
  </section>;
}

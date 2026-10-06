import { ArrowUpRight } from 'lucide-react';
import { products } from '../catalog';

export function MaisonProductScene({ compact = false }) {
  return <div className={`maison-product-scene${compact ? ' is-compact' : ''}`} aria-label="Рекламная композиция ANUA и COSRX">
    <span className="maison-scene-word" aria-hidden="true">daily<br /><i>ritual.</i></span>
    <div className="maison-pedestal"><img className="maison-toner" src={products[1].image} alt="ANUA Heartleaf 77% Soothing Toner, 250 мл" fetchPriority={compact ? undefined : 'high'} loading={compact ? 'lazy' : undefined} /><img className="maison-essence" src={products[2].image} alt="COSRX Advanced Snail 96, 100 мл" loading="lazy" /></div>
    <span className="maison-scene-label">ANUA / COSRX<br />YOUR DAILY BEAUTY EDIT</span>
  </div>;
}

export function MaisonHero({ browse }) {
  return <section className="maison-hero" aria-label="Maison KOKO — тёплый beauty-бутик">
    <div className="maison-hero-heading"><div><span className="maison-eyebrow">MAISON KOKO / BEAUTY & CARE</span><h1>Косметика KOKO.<br /><i>Место для себя.</i></h1></div><div className="maison-hero-intro"><p>Любимые текстуры. Маленькие ритуалы.<br />Уход, который хочется<br />оставить на своей полке.</p><button className="primary-button" onClick={() => browse()}>Открыть каталог <ArrowUpRight size={18} aria-hidden="true" /></button></div></div>
    <div className="maison-hero-window"><MaisonProductScene /><div className="maison-window-caption"><span>ТОНЕР + ЭССЕНЦИЯ / ТВОЙ ЕЖЕДНЕВНЫЙ РИТУАЛ</span><span>THE KOKO EDIT / 01</span></div></div>
    <div className="maison-signature-strip"><span>ÖZİNDİ SÜİ</span><p>Красота — в том, как ты заботишься о себе.</p><button onClick={() => browse('cream')}>Начать с увлажнения <ArrowUpRight size={17} aria-hidden="true" /></button></div>
  </section>;
}

export function MaisonEditorial({ browse }) {
  return <section className="maison-editorial section-wrap" aria-label="Рекламные подборки косметики KOKO">
    <article className="maison-product-ad maison-sun-ad"><span className="maison-eyebrow">THE MORNING EDIT / 02</span><h2>Светлый день.<br /><i>Твой SPF.</i></h2><div className="maison-ad-packshot"><img src={products[3].image} alt="BEAUTY OF JOSEON Relief Sun, 50 мл" loading="lazy" /></div><div className="maison-ad-bottom"><span>BEAUTY OF JOSEON<br />RELIEF SUN / 50 ML</span><button className="text-button" onClick={() => browse('spf')}>Выбрать SPF <ArrowUpRight size={17} aria-hidden="true" /></button></div></article>
    <article className="maison-product-ad maison-cleanse-ad"><span className="maison-eyebrow">THE EVENING EDIT / 03</span><h2>Снять макияж.<br /><i>Оставить заботу.</i></h2><div className="maison-ad-packshot"><img src={products[0].image} alt="BANILA CO Clean It Zero, 100 мл" loading="lazy" /></div><div className="maison-ad-bottom"><span>BANILA CO<br />CLEAN IT ZERO / 100 ML</span><button className="text-button" onClick={() => browse('cleansing')}>Выбрать очищение <ArrowUpRight size={17} aria-hidden="true" /></button></div></article>
  </section>;
}

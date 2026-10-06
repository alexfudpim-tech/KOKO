import { ArrowUpRight } from 'lucide-react';

export function MaisonHero({ browse }) {
  return <section className="maison-hero" aria-label="Maison KOKO — тёплый beauty-бутик">
    <div className="maison-hero-heading"><div><span className="maison-eyebrow">MAISON KOKO / BEAUTY & CARE</span><h1>Косметика KOKO.<br /><i>Место для себя.</i></h1></div><div className="maison-hero-intro"><p>Любимые текстуры. Маленькие ритуалы.<br />Уход, который хочется<br />оставить на своей полке.</p><button className="primary-button" onClick={() => browse()}>Открыть каталог <ArrowUpRight size={18} aria-hidden="true" /></button></div></div>
    <div className="maison-hero-window"><img src="./images/maison-interior.png" alt="Предоставленный интерьер KOKO: светлое дерево, кремовые поверхности и мягкий свет" fetchPriority="high" width="948" height="1280" /><div className="maison-window-caption"><span>СВЕТ. ТЕКСТУРА. ЗАБОТА.</span><span>THE KOKO MOOD / 01</span></div></div>
    <div className="maison-signature-strip"><span>ÖZİNDİ SÜİ</span><p>Красота — в том, как ты заботишься о себе.</p><button onClick={() => browse('cream')}>Начать с увлажнения <ArrowUpRight size={17} aria-hidden="true" /></button></div>
  </section>;
}

export function MaisonEditorial({ browse }) {
  return <section className="maison-editorial section-wrap" aria-label="Пространство KOKO">
    <div className="maison-shelves"><img src="./images/maison-shelves.png" alt="Дизайн-референс KOKO: деревянные полки и уголок с мягким креслом" loading="lazy" width="948" height="1280" /><span>THE BEAUTY OF EVERYDAY</span></div>
    <div className="maison-editorial-copy"><span className="maison-eyebrow">ПРОСТРАНСТВО ДЛЯ ТВОИХ РИТУАЛОВ</span><h2>Тёплые текстуры.<br /><i>Спокойные ритуалы.</i></h2><p>Пусть забота о себе будет такой же приятной, как любимое место. Начни с мягкого очищения — и найди свой ритм.</p><button className="text-button" onClick={() => browse('cleansing')}>Выбрать очищение <ArrowUpRight size={17} aria-hidden="true" /></button><img src="./images/maison-entrance.png" alt="Предоставленный дизайн входа KOKO с кремовой вывеской и тёплым освещением" loading="lazy" width="948" height="1280" /><small>Визуальные материалы предоставлены для дизайн-концепта.</small></div>
  </section>;
}

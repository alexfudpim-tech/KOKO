import { ArrowUpRight, ChevronDown, ArrowUp, Heart } from 'lucide-react';
import BrandLogo from './brand-logo';

export default function SiteFooter({ mobileUI, home, browse, showFavorites, showProfile, showPromotions, showInfo }) {
  const help = (title, text) => showInfo({ type: 'info', title, text });
  return <footer className="brand-footer" aria-label="Информация о KOKO">
    <div className="footer-opening"><span>BEAUTY, YOUR WAY.</span><p>Красота начинается<br /><em>с себя.</em></p><button type="button" onClick={() => browse()}>Найти свой уход <ArrowUpRight size={20} aria-hidden="true" /></button></div>
    <div className="footer-body">
      <div className="footer-identity"><BrandLogo onClick={home} /><p>Твой маленький ритуал.<br />Твоё большое удовольствие.</p><span className="footer-location">Косметика и уход · Казахстан</span></div>
      <nav className="footer-navigation" aria-label="Навигация в подвале">
        <details className="footer-group" open={!mobileUI}><summary>Магазин <ChevronDown size={18} aria-hidden="true" /></summary><div><button onClick={() => browse()}>Вся косметика</button><button onClick={() => browse('cleansing')}>Очищение</button><button onClick={() => browse('serum')}>Сыворотки</button><button onClick={() => browse('cream')}>Увлажнение</button><button onClick={() => browse('spf')}>Защита SPF</button></div></details>
        <details className="footer-group" open={!mobileUI}><summary>Покупателям <ChevronDown size={18} aria-hidden="true" /></summary><div><button onClick={() => help('Доставка и оплата', 'Вы просматриваете демо-витрину: она не принимает заказы и платежи. Условия доставки и способы оплаты уточняйте на официальном сайте KOKO.')}>Доставка и оплата</button><button onClick={() => help('Обмен и возврат', 'Актуальные условия обмена и возврата доступны у магазина KOKO. В этом прототипе реальные покупки не оформляются.')}>Обмен и возврат</button><button onClick={() => help('Магазины и контакты', 'Адреса магазинов и контакты команды можно найти на официальном сайте koko.kz. Мы не указываем непроверенные адреса и телефоны.')}>Магазины и контакты</button><a href="https://koko.kz/" target="_blank" rel="noopener noreferrer">Официальный KOKO <ArrowUpRight size={14} aria-hidden="true" /></a></div></details>
        <details className="footer-group" open={!mobileUI}><summary>Твоё пространство <ChevronDown size={18} aria-hidden="true" /></summary><div><button onClick={showProfile}>Личный кабинет</button><button onClick={showFavorites}>Избранное</button><button onClick={showPromotions}>Промо-подборки</button><a href="https://koko.kz/" target="_blank" rel="noopener noreferrer">KOKO в соцсетях <ArrowUpRight size={14} aria-hidden="true" /></a></div></details>
      </nav>
    </div>
    <div className="footer-closing"><span>© {new Date().getFullYear()} KOKO</span><span className="footer-demo"><Heart size={13} aria-hidden="true" />Демо-витрина · без заказов и оплаты</span><button onClick={() => scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>Наверх <ArrowUp size={16} aria-hidden="true" /></button></div>
  </footer>;
}

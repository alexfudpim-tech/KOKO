export const concepts = [
  { id: 'maison', title: 'Maison KOKO', shortTitle: 'Maison', description: 'Тёплый интерьер, натуральные фактуры и оливковый акцент', label: 'Тёплый beauty-бутик' },
  { id: 'electric', title: 'Electric Market', shortTitle: 'Electric', description: 'Энергия большого beauty-магазина', label: 'Энергичный ритейл' },
  { id: 'gloss', title: 'Gloss Atelier', shortTitle: 'Gloss', description: 'Глянцевая редакция красоты', label: 'Глянцевый бутик' },
  { id: 'skin', title: 'Skin Archive', shortTitle: 'Skin', description: 'Точный и спокойный уход', label: 'Skincare-бутик' },
];
export function initialConcept(search) { const value = new URLSearchParams(search).get('concept'); return concepts.some(c => c.id === value) ? value : 'maison'; }
// Example assortment/prices from incumbent KOKO demo catalog. Not live stock.
export const products = [
  { id: 'banila', brand: 'BANILA CO', name: 'Clean It Zero', type: 'Очищающий бальзам', volume: '100 мл', price: 9700, category: 'cleansing', color: '#f7e8ee', image: './images/banila.jpg', description: 'Первый шаг вечернего ухода. Бальзам для снятия макияжа и мягкого очищения кожи.', ingredient: 'Мягкое очищение' },
  { id: 'anua', brand: 'ANUA', name: 'Heartleaf 77% Soothing Toner', type: 'Тонер с хауттюйнией', volume: '250 мл', price: 9900, category: 'toner', color: '#edf1e9', image: './images/anua.jpg', description: 'Лёгкий тонер для ежедневного ухода. Нанесите после очищения, перед сывороткой.', ingredient: 'Хауттюйния' },
  { id: 'cosrx', brand: 'COSRX', name: 'Advanced Snail 96', type: 'Увлажняющая эссенция', volume: '100 мл', price: 14200, category: 'serum', color: '#f3eee1', image: './images/cosrx.jpg', description: 'Эссенция с муцином для увлажняющего этапа. Используйте после тонера и перед кремом.', ingredient: 'Муцин' },
  { id: 'boj', brand: 'BEAUTY OF JOSEON', name: 'Relief Sun', type: 'Солнцезащитный крем', volume: '50 мл', price: 7900, category: 'spf', color: '#f4f0ea', image: './images/boj.jpg', description: 'Солнцезащитный крем на каждый день. Завершает утренний уход; следуйте инструкции на упаковке.', ingredient: 'Ежедневный SPF' },
  { id: 'roundlab', brand: 'ROUND LAB', name: 'Birch Juice Moisturizing', type: 'Увлажняющий крем', volume: '80 мл', price: 13400, category: 'cream', color: '#e8f0f4', image: './images/roundlab.jpg', description: 'Увлажняющий крем с берёзовым соком. Завершающий шаг базового ухода.', ingredient: 'Берёзовый сок' },
  { id: 'abib', brand: 'ABIB', name: 'Quick Sunstick', type: 'Солнцезащитный стик', volume: '22 г', price: 9000, category: 'spf', color: '#eef0ec', image: './images/abib.jpg', description: 'Компактный стик для обновления солнцезащиты. Удобно взять с собой.', ingredient: 'SPF в стике' },
];
export const categories = [{ id: 'all', name: 'Всё' }, { id: 'cleansing', name: 'Очищение' }, { id: 'toner', name: 'Тонеры' }, { id: 'serum', name: 'Сыворотки' }, { id: 'cream', name: 'Кремы' }, { id: 'spf', name: 'SPF' }];
export const money = amount => `${new Intl.NumberFormat('ru-KZ').format(amount)} ₸`;
export function filterProducts(items, query, category) {
  const search = query.trim().toLocaleLowerCase('ru');
  return items.filter(p => (category === 'all' || p.category === category) && `${p.brand} ${p.name} ${p.type} ${p.ingredient}`.toLocaleLowerCase('ru').includes(search));
}
export const basketTotal = (cart, items = products) => items.reduce((sum, p) => sum + p.price * (cart[p.id] || 0), 0);
export const skinTypes = ['Не выбрано', 'Сухая', 'Комбинированная', 'Жирная', 'Нормальная'];
export const careGoals = ['Базовый уход', 'Увлажнение', 'Очищение', 'Солнцезащита'];
export const normalizePreferences = raw => ({ skin: skinTypes.includes(raw?.skin) ? raw.skin : skinTypes[0], goal: careGoals.includes(raw?.goal) ? raw.goal : careGoals[0] });
export function initialView(search) { const view = new URLSearchParams(search).get('view'); return ['catalog', 'profile', 'favorites'].includes(view) ? view : 'home'; }

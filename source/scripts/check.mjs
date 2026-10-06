import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { build } from 'esbuild';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readUIMode, isMobileUI, modeURL } from '../src/ui-mode.js';
assert.equal(readUIMode('?ui=desktop'), 'desktop');
assert.equal(readUIMode('?ui=invalid'), 'auto');
assert.equal(isMobileUI('desktop', true), false);
assert.equal(isMobileUI('mobile', false), true);
assert.equal(isMobileUI('auto', true), true);
assert.equal(isMobileUI('auto', false), false);
const modeLink = modeURL('https://preview.invalid/lab/?concept=gloss&view=profile&ui=mobile', 'desktop');
assert.equal(modeLink.searchParams.get('ui'), 'desktop');
assert.equal(modeLink.searchParams.get('concept'), 'gloss');
assert.equal(modeLink.searchParams.get('view'), 'profile');
assert.equal(modeURL(modeLink, 'auto').searchParams.has('ui'), false);
import { products, filterProducts, basketTotal, concepts, normalizePreferences, initialView, initialConcept } from '../src/catalog.js';
assert.equal(concepts.length, 4);
assert.equal(concepts[0].id, 'maison');
assert.equal(initialConcept(''), 'maison');
assert.equal(initialConcept('?concept=unknown'), 'maison');
for (const concept of concepts) assert.equal(initialConcept(`?concept=${concept.id}`), concept.id);
assert.equal(new Set(concepts.map(c => c.id)).size, concepts.length);
assert.equal(filterProducts(products, '  aNuA ', 'all')[0].id, 'anua');
assert.equal(filterProducts(products, '', 'spf').length, 2);
assert.equal(filterProducts(products, 'NOT-IN-CATALOG', 'all').length, 0);
assert.equal(basketTotal({ banila: 2, anua: 1 }), 29300);
assert.equal(basketTotal({}), 0);
for (const product of products) assert.ok(existsSync(`public/${product.image}`), `Missing photo: ${product.image}`);
for (const file of ['beauty-editorial.png', 'gloss.jpg', 'skin.jpg', 'koko-social.jpg']) assert.ok(existsSync(`public/images/${file}`));
const referencePhotos = /maison-(interior|shelves|entrance|gifts)\.png/;
for (const file of ['maison-interior.png', 'maison-shelves.png', 'maison-entrance.png', 'maison-gifts.png']) {
  assert.ok(!existsSync(`public/images/${file}`), 'Reference photos must not ship');
  assert.ok(!existsSync(`dist/images/${file}`), 'Reference photos must not enter the build');
}
assert.match(readFileSync('dist/index.html', 'utf8'), /6e178754/);
const app = readFileSync('src/App.jsx', 'utf8');
assert.match(app, /id="ingredient-archive"/);
assert.match(app, /concept === 'skin' \? showIngredients\(\)/);
assert.match(app, /getElementById\('ingredient-archive'\)\?\.scrollIntoView/);
assert.deepEqual(normalizePreferences(null), { skin: 'Не выбрано', goal: 'Базовый уход' });
assert.deepEqual(normalizePreferences({ skin: 'Сухая', goal: 'Увлажнение' }), { skin: 'Сухая', goal: 'Увлажнение' });
assert.deepEqual(normalizePreferences({ skin: '<script>', goal: 7 }), normalizePreferences(null));
for (const view of ['profile', 'catalog', 'favorites']) assert.equal(initialView(`?view=${view}`), view);
assert.equal(initialView('?view=not-a-page'), 'home');
assert.match(app, /label="Личный кабинет" onClick=\{showProfile\}/);
const promotions = readFileSync('src/components/promotions.jsx', 'utf8');
assert.match(promotions, /промокод не действует/);
assert.match(promotions, /clipboard.writeText\('BEAUTY15'\)/);
assert.match(promotions, /Цены в корзине не меняются/);
const profile = readFileSync('src/components/profile.jsx', 'utf8');
assert.match(profile, /catch \{ setError\(/);
assert.match(profile, /account-panel-/);
assert.match(profile, /Настоящий аккаунт не создан/);
// ponytail: offline render checks validate markup, not browser layout or clicks.
const compiled = await build({ entryPoints: ['src/App.jsx'], bundle: true, write: false, format: 'cjs', platform: 'node', jsx: 'automatic', external: ['react', 'react/jsx-runtime'] });
const module = { exports: {} };
new Function('require', 'module', 'exports', compiled.outputFiles[0].text)(createRequire(import.meta.url), module, module.exports);
for (const concept of concepts) {
  globalThis.location = new URL(`https://preview.invalid/?concept=${concept.id}`);
  const home = renderToStaticMarkup(createElement(module.exports.default));
  assert.match(home, /BEAUTY15/);
  assert.match(home, /промокод не действует/);
  assert.match(home, /id="promotions"/);
  assert.match(home, /Компьютерная/);
  assert.equal((home.match(/role="tab"/g) || []).length, 4);
  assert.doesNotMatch(home, referencePhotos);
  if (concept.id === 'maison') { assert.match(home, /maison-product-scene/); assert.match(home, /maison-product-ad/); assert.match(home, /images\/anua.jpg/); assert.match(home, /images\/cosrx.jpg/); assert.match(home, /images\/boj.jpg/); assert.match(home, /images\/banila.jpg/); }
  assert.match(home, /class="brand-logo/);
  assert.match(home, /ÖZİNDİ SÜİ/);
  assert.match(home, /aria-label="Информация о KOKO"/);
  assert.match(home, /Доставка и оплата/);
  assert.match(home, /Демо-витрина · без заказов и оплаты/);
  assert.equal((home.match(/class="footer-group" open/g) || []).length, 3);
  globalThis.location.search = `?concept=${concept.id}&ui=desktop`;
  const desktop = renderToStaticMarkup(createElement(module.exports.default));
  assert.match(desktop, /class="desktop-ui"/);
  assert.doesNotMatch(desktop, /Мобильная навигация/);
  globalThis.location.search = `?concept=${concept.id}&view=profile`;
  const account = renderToStaticMarkup(createElement(module.exports.default));
  assert.match(account, /Демо-профиль/);
  assert.match(account, /account-panel-overview/);
  assert.match(account, /Настоящий аккаунт не создан/);
  assert.match(account, /Заказы появятся здесь/);
  for (const view of ['home', 'catalog', 'favorites', 'profile']) {
    globalThis.location = new URL(`https://preview.invalid/koko-demo/?concept=${concept.id}&ui=mobile&view=${view}`);
    const mobile = renderToStaticMarkup(createElement(module.exports.default));
    assert.match(mobile, /class="mobile-ui"/);
    assert.doesNotMatch(mobile, referencePhotos);
    assert.match(mobile, /Мобильная навигация/);
    assert.match(mobile, /aria-current="page"/);
    assert.equal((mobile.match(/class="brand-logo/g) || []).length, 3);
    assert.doesNotMatch(mobile, /class="footer-group" open/);
    assert.match(mobile, /ÖZİNDİ SÜİ/);
    assert.doesNotMatch(mobile, /src="\/images\//);
    if (view === 'home') { assert.match(mobile, /mobile-product-rail/); assert.match(mobile, concept.id === 'maison' ? /maison-hero/ : /mobile-campaign/); }
    if (view === 'catalog') assert.match(mobile, /Найдено товаров: 6/);
  }
}
for (const search of ['', '?ui=mobile', '?concept=unknown']) {
  globalThis.location = new URL(`https://preview.invalid/KOKO/${search}`);
  const defaultHome = renderToStaticMarkup(createElement(module.exports.default));
  assert.match(defaultHome, /storefront maison/);
  assert.match(defaultHome, /id="tab-maison"[^>]+aria-selected="true"/);
  assert.match(defaultHome, /maison-hero/);
}
delete globalThis.location;
console.log('PASS: Maison product advertising; reference photos excluded; 4 desktop concepts + 16 mobile routes, search/filter, basket totals, logo/footer and demo disclosures.');

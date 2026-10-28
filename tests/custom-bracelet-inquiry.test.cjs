const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const script = fs.readFileSync(path.join(root, 'custom-crystal-bracelets/assets/custom-crystal-bracelets-wholesale.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'custom-crystal-bracelets/index.html'), 'utf8');

function setup(valid = true) {
  const handlers = {};
  const tracked = [];
  const values = {
    name: 'Test Company', email: 'test@example.com', stone: 'Amethyst',
    diameter: '8mm', quantity: '300', branding: 'Need logo meaning card',
    packaging: 'Velvet pouch', fulfillment: 'Ship to my warehouse',
    message: 'Test only'
  };
  const emailButton = { addEventListener(type, callback) { handlers[`email:${type}`] = callback; } };
  const form = {
    querySelector(selector) { return selector === '[data-avb-email-inquiry]' ? emailButton : null; },
    addEventListener(type, callback) { handlers[`form:${type}`] = callback; },
    reportValidity() { return valid; }
  };
  const window = {
    location: { href: '' },
    gtag(...args) { tracked.push(args); }
  };
  class FormData { get(name) { return values[name]; } }
  const document = {
    querySelectorAll() { return []; },
    querySelector(selector) { return selector === '[data-avb-bracelet-form]' ? form : null; }
  };
  vm.runInNewContext(script, { document, window, FormData });
  return { handlers, tracked, window };
}

test('WhatsApp route prepares details and tracks only opening intent', () => {
  const { handlers, tracked, window } = setup();
  handlers['form:submit']({ preventDefault() {} });
  const url = new URL(window.location.href);
  assert.equal(url.hostname, 'wa.me');
  assert.equal(url.pathname, '/8617629173592');
  assert.match(url.searchParams.get('text'), /Test Company/);
  assert.equal(tracked[0][1], 'contact_whatsapp_open');
  assert.equal(tracked[0][2].email, undefined);
});

test('Email route opens a draft addressed to the business', () => {
  const { handlers, tracked, window } = setup();
  handlers['email:click']();
  assert.match(window.location.href, /^mailto:niuqifan764@gmail\.com\?/);
  assert.match(decodeURIComponent(window.location.href), /Test Company/);
  assert.equal(tracked[0][1], 'contact_email_open');
  assert.equal(tracked[0][2].email, undefined);
});

test('Invalid form does not open an email draft or track an event', () => {
  const { handlers, tracked, window } = setup(false);
  handlers['email:click']();
  assert.equal(window.location.href, '');
  assert.equal(tracked.length, 0);
});

test('Page clearly says a separate Send action is required', () => {
  assert.match(html, /Please press Send there to complete your inquiry/);
  assert.match(html, /Nothing is sent automatically from this page/);
});

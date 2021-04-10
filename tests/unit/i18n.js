import VueI18n from 'vue-i18n';

function loadLocaleMessages() {
  const messages = require('@/locales/en.json');

  return {
    en: messages,
  };
}

export function setupI18n(vueInstance) {
  vueInstance.use(VueI18n);

  return new VueI18n({
    locale: process.env.VUE_APP_I18N_LOCALE || 'en',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    messages: loadLocaleMessages(),
  });
}
import messages from './messages'
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE, // Язык по умолчанию, если перевод не найден
  locale: process.env.VUE_APP_I18N_LOCALE, // Язык по умолчанию
  messages
})

import Vue from 'vue'
import { i18n } from '../i18n/index'

export default class Notification {
  group = 'main'
  text
  title
  type =''

  showError(message) {
    this.setStatus('error', message)
    Vue.notify(this)
  }

  showSuccess(message) {
    this.setStatus('success', message)
    Vue.notify(this)
  }

  showWarning(message) {
    this.setStatus('warning', message)
    Vue.notify(this)
  }

  setStatus (status, message) {
    this.title = i18n.t('status.' + status)
    this.text = i18n.t('notifications.' + message)
    this.type = status
  }
}

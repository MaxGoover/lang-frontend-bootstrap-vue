/**
 * Наименования данных авторизации.
 * Т.е. то, как будут называться наши поля в localStorage
 *
 * @type {string}
 */
const ACCESS_TOKEN = 'access-token'
const ACCESS_TOKEN_EXPIRES = 'access-token-expires'
const REFRESH_TOKEN = 'refresh-token'

/**
 * Модель авторизации.
 */
export default class Authorization {

  /**
   * Удаляет токен доступа.
   */
  static clearAccessToken () {
    localStorage.removeItem(ACCESS_TOKEN)
  }

  /**
   * Удаляет дату истечения токена доступа.
   */
  static clearAccessTokenExpires () {
    localStorage.removeItem(ACCESS_TOKEN_EXPIRES)
  }

  /**
   * Удаление всех данных авторизации.
   */
  static clearData () {
    Authorization.clearAccessToken()
    Authorization.clearRefreshToken()
    Authorization.clearAccessTokenExpires()
  }

  /**
   * Удаляет токен обновления.
   */
  static clearRefreshToken () {
    localStorage.removeItem(REFRESH_TOKEN)
  }

  /**
   * Возвращает токен доступа.
   *
   * @returns {string | null}
   */
  static getAccessToken () {
    return localStorage.getItem(ACCESS_TOKEN)
  }

  /**
   * Возвращает дату истечения токена доступа.
   *
   * @returns {number}
   */
  static getAccessTokenExpires () {
    const value = Number.parseInt(localStorage.getItem(ACCESS_TOKEN_EXPIRES))
    return isNaN(value) ? 0 : value
  }

  /**
   * Возвращает токен обновления.
   *
   * @returns {string | null}
   */
  static getRefreshToken () {
    return localStorage.getItem(REFRESH_TOKEN)
  }

  /**
   * Авторизован ли пользователь.
   *
   * @returns {boolean}
   */
  static isAccessTokenExpired () {
    return Authorization.getAccessTokenExpires() < Date.now() / 1000
  }

  /**
   * Авторизован ли пользователь.
   *
   * @returns {boolean}
   */
  static isAuthorized () {
    return !!Authorization.getAccessToken()
  }

  /**
   * Сохраняет токен доступа.
   *
   * @param token
   */
  static setAccessToken (token) {
    localStorage.setItem(ACCESS_TOKEN, token)
  }

  /**
   * Сохраняет дату истечения токена доступа.
   *
   * @param token
   */
  static setAccessTokenExpires (token) {
    localStorage.setItem(ACCESS_TOKEN_EXPIRES, token)
  }

  /**
   * Сохранение данных авторизации.
   *
   * @param accessToken
   * @param accessTokenExpires
   * @param refreshToken
   */
  static setData ({ accessToken, accessTokenExpires, refreshToken }) {
    Authorization.setAccessToken(accessToken)
    Authorization.setAccessTokenExpires(accessTokenExpires)
    Authorization.setRefreshToken(refreshToken)
  }

  /**
   * Сохраняет токен обновления.
   *
   * @param token
   */
  static setRefreshToken (token) {
    localStorage.setItem(REFRESH_TOKEN, token)
  }
}

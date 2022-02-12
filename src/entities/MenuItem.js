export default class MenuItem {
  title
  route
  event

  constructor (title, route, event = () => {}) {
    this.title = title
    this.route = route
    this.event = event
  }

  get title () {
    return this._title
  }

  get route () {
    return this._route
  }

  get event () {
    return this._event()
  }
}

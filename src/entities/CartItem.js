export default class CartItem {
  id
  title
  description
  price
  inStock
  quantity

  constructor (goods) {
    for(let key in goods) {
      if (key in this) this[key] = goods[key]
    }
    this.quantity = 1
  }

  get quantity () {
    return this._quantity
  }

  set quantity (value) {
    if (Number.isInteger(value) && value > 0) {
      this._quantity = Math.floor(value)
    }
  }
}
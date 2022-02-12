import { axios } from '../../../axios'
import CartItem from '../../../entities/CartItem'
import CommonHelper from '../../../helpers/CommonHelper'
import Notification from '../../../entities/Notification'
import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    cartItems: [],
    cartItemsCost: 0,
    dollarRate: 70.33,
    groups: [],
    listAddedCartItems:{}
  },
  getters: {
    evenGroups: state => state.groups.filter((e, i) => !(i % 2)),
    oddGroups: state => state.groups.filter((e, i) => i % 2),
  },
  mutations: {
    /**
     * Добавить товар в корзину.
     * @param state
     * @param goods
     */
    addCartItem (state, goods) {
      state.listAddedCartItems[goods.id] = true
      state.cartItems.push(new CartItem(goods))

      // Показываем уведомление о добавлении товара в корзину
      const notification = new Notification()
      notification.showSuccess('addedCartItem')
    },

    /**
     * Удалить товар из корзины.
     * @param state
     * @param goodsId
     */
    deleteCartItem (state, goodsId) {
      let index = 0
      state.listAddedCartItems[goodsId] = false
      state.cartItems.find((item, i) => {
        if (item.id === goodsId) {
          index = i
          return true
        }
      })
      state.cartItems.splice(index, 1)

      // Показываем уведомление об удалении товара из корзины
      const notification = new Notification()
      notification.showWarning('deletedCartItem')
    },

    /**
     * Изменить стоимость товаров в корзине.
     * @param state
     */
    setCostCartItems (state) {
      let cost = 0
      state.cartItems.forEach(item => {
        return cost += item.price * item.quantity
      })
      cost *= state.dollarRate
      state.cartItemsCost = cost.toFixed(2)
    },

    /**
     * Изменить курс доллара.
     * @param state
     * @param rate
     */
    setDollarRate (state, rate) {
      const notification = new Notification()
      if (CommonHelper.isNumber(rate) && rate >= 20 && rate <= 80) {
        if (state.dollarRate !== rate) notification.showSuccess('changedDollarRate')
        state.dollarRate = CommonHelper.numberToFloat(rate)
      } else {
        notification.showWarning('wrongDollarRate')
      }
    },

    /**
     * Изменить группы товаров.
     * @param state
     * @param payload
     */
    setGroups (state, payload) {
      state.groups = payload
      payload.map(group => {
        group.goods.map(goods => {
          Vue.set(state.listAddedCartItems, goods.id, false)
        })
      })
    },

    /**
     * Изменить количество товара в корзине.
     * @param state
     * @param payload
     */
    setQuantityCartItem (state, payload) {
      state.cartItems.find(item => {
        if (item.id === payload.goodsId) {
          item.quantity = payload.quantity
          return true
        }
      })


    }
  },
  actions: {
    /**
     * Удалить товар из корзины.
     * @param commit
     * @param goodsId
     */
    deleteCartItem ({ commit }, goodsId) {
      commit('deleteCartItem', goodsId)
      commit('setCostCartItems')
    },

    /**
     * async Получить корзину товаров.
     */
    getCart () {
      this.commit('app/startLoading')
      axios.post('shop/cart/index')
        .then(
          response => {
            console.log('Get cart', response.data)
            // commit('setCart', response.data)
          },
          reject => {
            console.log(2, reject.response)
          })
        .catch(error => {
          console.log(3, error)
        })
        .finally(() => {
          this.commit('app/stopLoading')
        })
    },

    /**
     * async Получить все группы товаров.
     * @param commit
     */
    getGroups ({ commit }) {
      this.commit('app/startLoading')
      axios.post('shop/group/index')
        .then(
          response => {
            commit('setGroups', response.data)
            console.log(response)
          },
          reject => {
            console.log(2, reject.response)
          })
        .catch(error => {
          console.log(3, error)
        })
        .finally(() => {
          this.commit('app/stopLoading')
        })
    },

    /**
     * Добавить/удалить товар из корзины.
     * Изменить стоимость товаров в корзине.
     * @param state
     * @param commit
     * @param goods
     */
    setCartItem ({ state, commit }, goods) {
      state.listAddedCartItems[goods.id]
        ? commit('deleteCartItem', goods.id)
        : commit('addCartItem', goods)
      commit('setCostCartItems')
    },

    /**
     * Изменить курс доллара.
     * Изменить стоимость товаров в корзине.
     * @param commit
     * @param rate
     */
    setDollarRate ({ commit }, rate) {
      commit('setDollarRate', rate)
      commit('setCostCartItems')
    },

    /**
     * Изменить количество товара в корзине.
     * Изменить стоимость товаров в корзине.
     * @param state
     * @param commit
     * @param payload
     */
    setQuantityCartItem ({ commit }, payload) {
      commit('setQuantityCartItem', payload)
      commit('setCostCartItems')
    }
  }
}

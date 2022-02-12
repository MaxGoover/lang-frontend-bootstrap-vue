<template>
  <b-container>
    <table class="table mb-0">

      <!--Шапка корзины-->
      <thead>
        <tr>
          <th
            v-for="(value, i) in tableHeader"
            :key="i"
            class="font-weight-normal text-muted"
          >
            {{ value }}
          </th>
        </tr>
      </thead>
      <tbody>

        <!--Список товаров корзины-->
        <tr
          v-for="(goods, j) in cartItems"
          :key="j"
        >
          <td :title="goods.description">{{ goods.title }}</td>
          <td class="w-15">
            <input
              :value="goods.quantity"
              class="Quantity"
              min="1"
              type="number"
              :max="goods.inStock"
              @input="setQuantityCartItem(goods.id, ...arguments)"
            /> шт.
            <div
              v-if="goods.quantity === goods.inStock"
              class="LimitQuantity"
            >
              Количество ограничено
            </div>
          </td>
          <td class="w-20">{{ calculateCost(goods.price) }} руб./ шт.</td>
          <td class="w-10">
            <button
              class="btn btn-light"
              type="button"
              @click="deleteCartItem(goods.id)"
            >
              {{ $t('cart.table.delete') }}
            </button>
          </td>
        </tr>
        <tr>

          <!--Курс доллара-->
          <td class="text-muted w-75" colspan="2">
            Стоимость доллара в рублях:
            <template v-if="!showDollarRateInput">
              {{ dollarRate }}

              <button
                class="btn btn-outline-secondary ml-3 pt-0 pb-0"
                @click="showChangeDollarRate"
              >
                Изменить
              </button>
            </template>

            <template v-else>
              <input
                ref="dollarRate"
                :value="dollarRate"
                class="Quantity"
                tabindex="-1"
                type="text"
                @blur="setDollarRate"
              /> (от 20 до 80)
            </template>
          </td>

          <!--Стоимость товара-->
          <td
            align="right"
            class="text-muted w-25"
            colspan="2"
          >
            Общая стоимость:
            <span
              class="font-weight-bold"
              style="color: #b06006;"
            >
              {{ cartItemsCost }} руб.</span>
          </td>
        </tr>
      </tbody>
    </table>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'
import CommonHelper from '../../../helpers/CommonHelper'

export default {
  name: 'CartContent',
  data () {
    return {
      showDollarRateInput: false,
      tableHeader: [
        this.$i18n.t('cart.table.title'),
        this.$i18n.t('cart.table.quantity'),
        this.$i18n.t('cart.table.price'),
        ''
      ]
    }
  },
  computed: {
    ...mapState('shop', [
      'cartItems',
      'cartItemsCost',
      'dollarRate'
    ])
  },
  methods: {
    /**
     * Считает стоимость товара.
     * @param price
     * @returns {number}
     */
    calculateCost (price) {
      return CommonHelper.numberToFloat(price * this.dollarRate)
    },

    /**
     * Удаляет товар из корзины.
     * @param goodsId
     */
    deleteCartItem (goodsId) {
      this.$store.dispatch('shop/deleteCartItem', goodsId)
    },

    /**
     * Меняет курс доллара.
     * @param event
     */
    setDollarRate (event) {
      this.showDollarRateInput = false
      this.$store.dispatch('shop/setDollarRate', Number(event.target.value))
    },

    /**
     * Меняет количество товара в корзине.
     * @param goodsId
     * @param event
     */
    setQuantityCartItem (goodsId, event) {
      this.$store.dispatch('shop/setQuantityCartItem', {
        goodsId,
        quantity: Number(event.target.value)
      })
    },

    /**
     * Позволяет изменить курс доллара.
     */
    showChangeDollarRate () {
      this.showDollarRateInput = true
      this.$nextTick(function () {
        this.$refs.dollarRate.focus()
      })
    }
  }
}
</script>

<style scoped>
@import '../../../assets/shop/CartContent.css';
</style>

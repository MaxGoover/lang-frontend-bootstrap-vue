<template>
  <div>
    <!--Кнопка корзины-->
    <b-button v-b-modal.modal-cart variant="outline-light">
      <i
        class="fa fa-shopping-cart navbar-brand"
        aria-hidden="true"
        :title="$t('appHeader.cart')"
      />
    </b-button>

    <!--Модальное окно корзины-->
    <b-modal
      v-model="showCart"
      id="modal-cart"
      scrollable
      size="xl"
      title="Корзина"
    >
      <!--Содержимое корзины-->
      <cart-content v-if="cartItems.length"/>

      <!--Футер корзины-->
      <template
        v-if="cartItems.length"
        v-slot:modal-footer
      >
        <cart-footer @hideModal="showCart = false"/>
      </template>

      <p v-if="!cartItems.length">Корзина пуста</p>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Cart',
  components: {
    CartContent: () => import('./CartContent'),
    CartFooter: () => import('./CartFooter')
  },
  data () {
    return {
      showCart: false
    }
  },
  computed: {
    ...mapState('shop', ['cartItems'])
  },
  created () {
    // this.$store.dispatch('shop/getCart')
  }
}
</script>

<style scoped>

</style>

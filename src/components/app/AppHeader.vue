<template>
  <header>
    <b-navbar
      toggleable="md"
      type="light"
      variant="white"
    >
      <!--Логотип-->
      <router-link
        class="navbar-brand ml-2 ml-sm-3"
        :to="{ name: 'Main' }"
      >
        <i class="fa fa-ribbon" aria-hidden="true" style="font-size: 26px"/>
        <span class="ml-3">{{ $t('app.name') }}</span>
      </router-link>
      <b-navbar-toggle target="nav-collapse"/>
      <b-collapse id="nav-collapse" is-nav>

        <!--Элементы меню-->
        <ul class="navbar-nav">
          <li
            v-for="(item, i) in menuItems"
            :key="i"
            class="nav-item ml-3 my-auto"
          >
            <router-link class="nav-link" :to="item.route">
              {{ item.title }}
            </router-link>
          </li>
        </ul>

        <!--Поиск товара-->
        <b-nav-form
          v-if="isAuthorized"
          class="ml-2 ml-sm-4"
        >
          <b-form-input
            class="mr-md-2"
            size="sm"
            :placeholder="$t('appHeader.searchGoods')"
          />
          <b-button size="sm" class="my-2 my-md-0" type="submit">{{ $t('appHeader.search') }}</b-button>
        </b-nav-form>

        <b-navbar-nav class="ml-auto">
          <!--Корзина-->

          <cart/>

          <!--Выбор языка-->
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
          </b-nav-item-dropdown>

          <!--Меню пользователя-->
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">{{ $t('appHeader.profile') }}</b-dropdown-item>
            <b-dropdown-item href="#">{{ $t('appHeader.logout') }}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="Void"/>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import MenuItem from '../../entities/MenuItem'

export default {
  name: 'AppHeader',
  components: {
    Cart: () => import('../shop/cart/Cart')
  },
  computed: {
    ...mapState('app', ['loading']),
    ...mapState('authorization', ['isAuthorized']),
    menuItems() {
      return this.isAuthorized ? [
        new MenuItem(
          this.$i18n.t('appHeader.training'),
          { name: 'Grammar' }
        ),
        new MenuItem(
          this.$i18n.t('appHeader.shop'),
          { name: 'Shop' }
        )
      ] : [
        new MenuItem(
          this.$i18n.t('appHeader.login'),
          { name: 'Login' }
        ),
        new MenuItem(
          this.$i18n.t('appHeader.signup'),
          { name: 'Signup' }
        )
      ]
    }
  }
  // methods: {
  //   showDialog() {
  //     this.$store.commit('menu/setShowDialog', true)
  //   }
  // }
}
</script>

<style scoped>
@import '../../assets/app/AppHeader.css';
</style>

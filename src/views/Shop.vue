<template>
  <div>
    <section>
      <!--Задний фон-->
      <div class="Background"></div>

      <!--Магазин-->
      <div class="container">
        <div class="row">
          <div class="d-none d-lg-block col-lg-2">
            on lg and wider screens
          </div>
          <div class="col-md-12 col-lg-10">
            <h1 class="mb-3">Shop</h1>

            <!--Список групп товаров-->
            <shop-groups-list/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Shop',
  components: {
    ShopGroupsList: () => import('../components/shop/ShopGroupsList')
  },
  created () {
    this.$store.dispatch('shop/getGroups')
  }
}
</script>

<style scoped>
.Background {
  background: url('../../public/img/bg_shop.jpg') center no-repeat;
  background-size: cover;
  height: 100%;
  opacity: 0.4;
  position: fixed;
  width: 100%;
}
</style>
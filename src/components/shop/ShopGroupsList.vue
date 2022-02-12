<template>
  <div class="row">
    <!--Левый столбец-->
    <shop-groups-list-column :groups="evenGroups"/>

    <!--Правый столбец-->
    <shop-groups-list-column :groups="oddGroups"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ShopGroupList',
  components: {
    ShopGroupsListColumn: () => import('./ShopGroupsListColumn')
  },
  computed: {
    ...mapGetters('shop', [
      'evenGroups',
      'oddGroups'
    ])
  }
}
</script>

<style scoped>

</style>
<template>
  <div class="w-100">
    <b-button
      variant="secondary"
      class="float-left"
      @click="hideModal"
    >
      Продолжить покупки
    </b-button>
    <b-button
      variant="primary"
      class="float-right"
      @click="hideModal"
    >
      Перейти к заказу
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'CartFooter',
  methods: {
    hideModal () {
      this.$emit('hideModal')
    }
  }
}
</script>

<style scoped>

</style>
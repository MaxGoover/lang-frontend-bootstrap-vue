<template>
  <div class="container">
    <div class="row">
      <!--Список тренировок-->
      <grammar-trainings-list-item
        v-for="(training, i) in trainings"
        :key="i"
        :training="training"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'GrammarTrainingsList',
  components: {
    GrammarTrainingsListItem: () => import('./GrammarTrainingsListItem')
  },
  props: {
    trainings: { type: Array }
  }
}
</script>

<style scoped>

</style>

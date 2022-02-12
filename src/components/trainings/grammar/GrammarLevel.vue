<template>
  <div>
    <!--Уровень-->
    <h6 class="mb-3 mt-3">{{ (JSON.parse(level.level)).title }}</h6>

    <!--Список тренировок-->
    <grammar-trainings-list :trainings="JSON.parse(level.trainings)"/>
  </div>
</template>

<script>
export default {
  name: 'GrammarLevel',
  components: {
    GrammarTrainingsList: () => import('./GrammarTrainingsList')
  },
  props: { level: { type: Object } }
}
</script>

<style scoped>
h6 {
  font-weight: 600;
  text-transform: uppercase;
}
</style>

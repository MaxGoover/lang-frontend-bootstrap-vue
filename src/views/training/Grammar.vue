<template>
  <section>
    <div class="Background"></div>
    <div class="container">
      <div class="row">
        <div class=" d-none d-lg-block col-lg-2">
          on lg and wider screens
        </div>
        <div class="col-md-12 col-lg-10">
          <div class="d-flex">
            <!--Заголовок-->
            <h5 class="mt-3">Грамматические тренировки</h5>
          </div>
          <!--Список уровней-->
          <grammar-level
            v-for="(level, i) in levels"
            :key="i"
            :level="level"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Grammar',
  components: {
    GrammarLevel: () => import('../../components/trainings/grammar/GrammarLevel')
  },
  computed: {
    ...mapState('grammar', ['levels'])
  },
  created () {
    this.$store.dispatch('grammar/getLevels')
  }
}
</script>

<style scoped>
h5 {
  font-weight: 600;
  text-transform: uppercase;
}
.Background {
  background: url('../../../public/img/usa_statue_of_liberty.jpg') center no-repeat;
  background-size: cover;
  height: 100%;
  opacity: 0.4;
  position: fixed;
  width: 100%;
}
</style>

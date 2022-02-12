<template>
  <section>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      background="#ae5cbb"
      controls
      indicators
      style="text-shadow: 1px 1px 2px #333;"
      :interval="0"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="First slide"
        img-src="https://picsum.photos/1024/480/?image=52"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      />

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"/>

      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <b-carousel-slide
        caption="Blank Image"
        img-blank
        img-alt="Blank image"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel
          interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>
  </section>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'GrammarTraining',
    components: {
      // GrammarTrainingToolbar: () => import('./GrammarTrainingToolbar'),
      // GrammarTrainingContent: () => import('./GrammarTrainingContent'),
      // GrammarTrainingFooter: () => import('./GrammarTrainingFooter')
    },
    props: { alias: { type: String } },
    computed: {
      ...mapState('training', [
        'exercises',
        'training'
      ])
    },
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    created() {
      this.$store.commit('app/setShowAppHeader', false)
      this.$store.commit('app/setShowAppFooter', false)
      this.$store.dispatch('training/getExercises', this.alias)
    },
    beforeDestroy() {
      this.$store.commit('app/setShowAppHeader', true)
      this.$store.commit('app/setShowAppFooter', true)
    },
    methods: {
      onSlideStart() {
        this.sliding = true
        console.log(5)
      },
      onSlideEnd() {
        this.sliding = false
        console.log(6)
      }
    }
  }
</script>

<style scoped>

</style>

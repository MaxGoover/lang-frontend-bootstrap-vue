import { axios } from '../../../axios/index'
import TrainingHelper from '../../../helpers/TrainingHelper'

export default {
  namespaced: true,
  state: {
    exercises: [],
    training: {}
  },
  getters: {},
  mutations: {
    checkExercise (state, payload) {
      const exercise = state.exercises.find(exercise => exercise._id === payload._id)
      exercise.checked = true
      exercise.corrected = exercise.translations.filter(el =>
        el.indexOf(payload.translate) > -1
      ).length
    },
    setExercises (state, payload) {
      state.exercises = payload.map(exercise => {
        exercise.checked = false
        exercise.corrected = false
        return exercise
      })
    },
    setTraining (state, payload) {
      state.training = payload
    }
  },
  actions: {
    getExercises ({ commit }, payload) {
      this.commit('app/startLoading')
      axios.post('grammar/training/index', {
        alias: payload,
        conditions: TrainingHelper[payload]
      })
        .then(
          response => {
            console.log(1, response.data)
            commit('setExercises', response.data.exercises.query)
            commit('setTraining', response.data.training)
          },
          reject => { console.log(2, reject.response) })
        .catch(error => { console.log(3, error) })
        .finally(() => { this.commit('app/stopLoading') })
    }
  }
}

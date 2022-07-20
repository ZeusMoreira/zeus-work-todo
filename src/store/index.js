import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    works: [
      {
        id: 1,
        titulo: 'Ir ao mercado',
        finalizada: false,
      },
      {
        id: 2,
        titulo: 'Comprar ração do cachorro',
        finalizada: false,
      },
    ]
  },
  getters: {
  },
  mutations: {
    newWork(state, titulo){
      if(titulo){
        state.works.push({
          id: new Date().getTime(),
          titulo: titulo,
          finalizada: false,
        })
      }
    },
    removeWork(state, work){
      let indexWork = state.works.indexOf(work)
      state.works.splice(indexWork, 1)   
    }
  },
  actions: {
  },
  modules: {
  }
})

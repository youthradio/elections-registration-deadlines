import Vue from 'vue'
import Vuex from 'vuex'
import { csvParse } from 'd3-dsv'
Vue.use(Vuex)

const state = {
  isLoading: false,
  registrationData: null,
  userLocation: 'CT',
}
const actions = {
  fetchData ({ commit }) {
    commit('CSV_DATA');
    commit('GET_LOCATION');
  }
}
const mutations = {
  async CSV_DATA(state){
    state.isLoading = true;
    const registrationData = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_QriRYnb-5aqRkRvnSXBbonFQPZl2fQtLBfq54nsuDvLNOvuFkEs8B14tRkHeRrYynKrRs9KMB3y-/pub?gid=0&single=true&output=csv')
      .then(res => res.text())
      .then(res => csvParse(res))
      .then(data => {
        delete data.columns;
        return data;
    })
    state.registrationData = registrationData;
    state.isLoading = false;
  },
  async GET_LOCATION(state){
    const data = await fetch('http://ip-api.com/json')
      .then(res => res.json())
    state.userLocation = data.countryCode === 'US'? data.region : 'CT'
  }
}
export default new Vuex.Store({
  mutations,
  state,
  actions
})
//
// const QUERY = (id) => `
// query {
//   quiz: getQuizById( id: "${id}" ){
//     id
//     description
//     featureImage
//     questions {
//       id
//       questionOrder
//       questionText
//       featureImage
//       options{
//         id
//         optionText
//         resultText
//         correctOption
//       }
//     }
//   }
// }
// `

import Vue from 'vue';
import Vuex from 'vuex';
import { csvParse } from 'd3-dsv';
Vue.use(Vuex);

const state = {
  isLoading: false,
  registrationData: null,
  userLocation: 'CT'
};
const actions = {
  fetchData({ commit }, fileName) {
    commit('CSV_DATA', fileName);
    commit('GET_LOCATION');
  }
};
const mutations = {
  async CSV_DATA(state, fileName) {
    state.isLoading = true;
    const registrationData = await fetch(
      `${process.env.BASE_URL}years/${fileName}`
    )
      .then(res => res.text())
      .then(res => csvParse(res))
      .then(data => {
        delete data.columns;
        return data;
      });
    state.registrationData = registrationData;
    state.isLoading = false;
  },
  async GET_LOCATION(state) {
    const data = await fetch('https://ipapi.co/json').then(res => res.json());
    state.userLocation = data.country === 'US' ? data.region_code : 'CA';
  }
};
export default new Vuex.Store({
  mutations,
  state,
  actions
});
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

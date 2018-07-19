import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions'
import getters from './getter'

Vue.use(Vuex); 
const state={
  isloading:false,
};
const mutations={
  updateLoading(state,data){
    state.isloading = data
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
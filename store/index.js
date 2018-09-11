import Vuex from 'vuex';

import * as types from './mutation-types';

const store = () => {
  return new Vuex.Store({
    strict: false,

    modules: {

    },

    state: {
      navBarStatus: 'HOME_PAGE'
    },

    getters: {
      navBarStatus(state) {
        return state.navBarStatus;
      }
    },

    actions: {
      updateNavBarStatus({commit}, status) {
        console.log(status);
        commit(types.UPDATE_NAV_BAR_STATUS, status);
      }
    },

    mutations: {
      [types.UPDATE_NAV_BAR_STATUS](state, status) {
        state.navBarStatus = status;
      }
    },
  })
};

export default store;


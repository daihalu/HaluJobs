import * as types from '../mutation-types';

export default {
  namespaced: true,
  state: {
    jobInfo: {}
  },

  getters: {

  },

  actions: {
    fetchJobInfo({commit}, slug) {
      this.$axios.$get('/jobs/' + slug)
        .then(res => {
          // console.log('Tuyen dung: ', res);
          let jobs = [];
          // console.log("Job in store", res.job);
          commit(types.FET_JOB_INFO, res.job);
        })
        .catch(err => {
          console.log(err);
        });
    },

  },
  mutations: {
    [types.FET_JOB_INFO](state, job) {
      state.jobInfo = job;
    },
  }
}

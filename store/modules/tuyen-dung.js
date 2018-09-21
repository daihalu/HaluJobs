import * as types from '../mutation-types';

export default {
  namespaced: true,
  state: {
    quickJobs: [],
    hotJobs: [],
    newJobs: [],
    attractiveJobs: [],

  },

  getters: {

  },

  actions: {
    fetchQuickJobs({commit}, searchingFields) {
      this.$axios.$get('/api/jobs?sort=closing_date&size=60' + searchingFields)
        .then(res => {
          // console.log('Tuyen dung: ', res);
          let jobs = [];

          res.jobs.map(job => {
            jobs.push({
              _jobId: job._id,
              _employerId: job.employer._id,
              jobTitle: job.title,
              companyName: job.employer.name,
              salary: {min: job.salary.min, max: job.salary.max},
              deadline: job.closing_date,
              jobUrl: '/tuyen-dung/viec-lam/',
              logoUrl: job.employer._logo,
              seen: false
            })
          });

          //Divide jobs to 8 arrays, each array length is 15 to pass to carousel because each carousel has 15 cards
          jobs = new Array(Math.ceil(jobs.length / 15))
            .fill("")
            .map(function () {
              return this.splice(0, 15)
            }, jobs.slice());

          commit(types.FETCH_QUICK_JOBS, jobs);
        })
        .catch(err => {
          console.log(err);
        });
    },
    fetchHotJobs({commit}, searchingFields) {
      this.$axios.$get('/api/jobs?sort=-salary.min?size=60' + searchingFields)
        .then(res => {
          let jobs = [];

          res.jobs.map(job => {
            jobs.push({
              _jobId: job._id,
              _employerId: job.employer._id,
              jobTitle: job.title,
              companyName: job.employer.name,
              salary: {min: job.salary.min, max: job.salary.max},
              deadline: job.closing_date,
              workAddresses: job.locations,
              jobUrl: '/tuyen-dung/viec-lam/',
              logoUrl: job.employer._logo,
            })
          });


          commit(types.FETCH_HOT_JOBS, jobs);
          // commit(types.DONE_FETCHING_DATA, true);
        })
        .catch(err => {
          console.log(err);
        });
    },
    fetchNewJobs({commit}, searchingFields) {
      this.$axios.$get('/api/jobs?sort=_updated_at?size=50' + searchingFields)
        .then(res => {
          let jobs = [];

          res.jobs.map(job => {
            jobs.push({
              _jobId: job._id,
              _employerId: job.employer._id,
              jobTitle: job.title,
              companyName: job.employer.name,
              salary: {min: job.salary.min, max: job.salary.max},
              deadline: job.closing_date,
              workAddresses: job.locations,
              jobUrl: '/tuyen-dung/viec-lam/',
              logoUrl: job.employer._logo,
            })
          });


          commit(types.FETCH_NEW_JOBS, jobs);
          // commit(types.DONE_FETCHING_DATA, true);
        })
        .catch(err => {
          console.log(err);
        });
    },
    fetchAttractiveJobs({commit}, searchingFields) {
      this.$axios.$get('/api/jobs?sort=-salary.max?size=50' + searchingFields)
        .then(res => {
          let jobs = [];

          res.jobs.map(job => {
            jobs.push({
              _jobId: job._id,
              _employerId: job.employer._id,
              jobTitle: job.title,
              companyName: job.employer.name,
              salary: {min: job.salary.min, max: job.salary.max},
              deadline: job.closing_date,
              workAddresses: job.locations,
              jobUrl: '/tuyen-dung/viec-lam/',
              logoUrl: job.employer._logo,
            })
          });


          commit(types.FETCH_ATTRACTIVE_JOBS, jobs);
          // commit(types.DONE_FETCHING_DATA, true);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mutations: {
    [types.FETCH_QUICK_JOBS](state, jobs) {
      state.quickJobs = jobs;
    },

    [types.FETCH_HOT_JOBS](state, jobs) {
      state.hotJobs = jobs;
    },

    [types.FETCH_NEW_JOBS](state, jobs) {
      state.newJobs = jobs;
    },

    [types.FETCH_ATTRACTIVE_JOBS](state, jobs) {
      state.attractiveJobs = jobs;
    },



  }
}

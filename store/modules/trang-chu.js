import * as types from '../mutation-types';

export default {
  namespaced: true,
  state: {
    urgentJobs: [],
    attractiveJobs: [],
    highSalaryJobs: [],
    // searchingContent: ''
    // hasDoneFetchingData: false
  },

  getters: {
    urgentCarouselJobs(state) {
      return (index) => {
        return state.urgentJobs[index];
      }
    }

  },

  actions: {
    fetchUrgentJobs({commit}) {
      this.$axios.$get('/api/jobs?sort=closing_date&size=60')
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
              jobUrl: '/tuyen-dung/viec-lam/',
              logoUrl: job.employer._logo,
              seen: false
            })
          });

          //Divide jobs to 8 array, each array length is 15 to pass to carousel because each carousel have 15 cards
          jobs = new Array(Math.ceil(jobs.length / 15))
            .fill("")
            .map(function () {
              return this.splice(0, 15)
            }, jobs.slice());

          commit(types.FETCH_URGENT_JOBS, jobs);
          // commit(types.DONE_FETCHING_DATA, true);
        })
        .catch(err => {
          console.log(err);
        });
    },
    fetchAttractiveJobs({commit}) {
      this.$axios.$get('/api/jobs?size=50')
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
    },
    fetchHighSalaryJobs({commit}) {
      this.$axios.$get('/api/jobs?size=60')
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

          commit(types.FETCH_HIGH_SALARY_JOBS, jobs);
          // commit(types.DONE_FETCHING_DATA, true);
        })
        .catch(err => {
          console.log(err);
        });
    },
    fetchQuickJobs({commit}) {
      this.$axios.$get('/api/jobs?sort=closing_date&size=50')
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
              jobUrl: '/tuyen-dung/viec-lam/',
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
          // commit(types.DONE_FETCHING_DATA, true);
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  mutations: {
    [types.FETCH_URGENT_JOBS](state, jobs) {
      state.urgentJobs = jobs;
    },

    [types.FETCH_ATTRACTIVE_JOBS](state, jobs) {
      state.attractiveJobs = jobs;
    },

    [types.FETCH_HIGH_SALARY_JOBS](state, jobs) {
      state.highSalaryJobs = jobs;
    },


    // [types.DONE_FETCHING_DATA](state, status) {
    //   state.hasDoneGettingData = status;
    // }
  }
}

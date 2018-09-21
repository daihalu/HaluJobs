<template>
  <div id="app">
    <p>{{ message }}</p>

    <!--<div class="vuebar-element" v-bar> &lt;!&ndash; el1 &ndash;&gt;-->
    <scroll-bar>
      <p class="main"> <!-- el2 -->

        <attractive-job-card :jobInfo="jobs[0]"/>
        <attractive-job-card :jobInfo="jobs[0]"/>
        <attractive-job-card :jobInfo="jobs[0]"/>
        <attractive-job-card :jobInfo="jobs[0]"/>
        <attractive-job-card :jobInfo="jobs[0]"/>
        <attractive-job-card :jobInfo="jobs[0]"/>
        <attractive-job-card :jobInfo="jobs[0]"/>
        <attractive-job-card :jobInfo="jobs[0]"/>
        <attractive-job-card :jobInfo="jobs[0]"/>

      </p>
      <!-- dragger will be automatically added here -->
    </scroll-bar>


  </div>
</template>
<script>
  import ScrollBar from '~/components/public-components/bars/ScrollBar';
  import AttractiveJobCard from '~/components/public-components/cards/PinkWorkAddressSalaryJobCard8';
  import {mapActions, mapState} from 'vuex';

  export default {
    components: {ScrollBar, AttractiveJobCard},
    layout: 'default',
    data() {
      return {
        message: 'Hello Vue.js + Vuebar!'
      }
    },
    methods: {
      scrollHanle(evt) {
        console.log(evt)
      },

      ...mapActions('HOME_PAGE', {
        fetchAttractiveJobs: 'fetchAttractiveJobs'
      })
    },
    computed: {
      ...mapState('HOME_PAGE', {
        jobs: 'attractiveJobs'
      })
    },
    created() {
      this.fetchAttractiveJobs();
    }
  }
</script>


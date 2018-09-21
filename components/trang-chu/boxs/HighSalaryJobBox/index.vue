<template>
  <el-row class="box-container">
    <h4 class="box-title">
      <font-awesome-icon icon="briefcase"/>
      {{jobBoxTitle}}
    </h4>

    <scroll-bar class="job-box">
      <el-row :gutter="4">
        <el-col
          v-for="(item, index) in jobs"
          :key="index"
          class="mg-bottom-10"
        >
          <high-salary-job-card
            :jobInfo="item"
          />
        </el-col>
      </el-row>
    </scroll-bar>
  </el-row>
</template>

<script>
  import HighSalaryJobCard from '~/components/public-components/cards/PinkSalaryJobCard16';
  import ScrollBar from '~/components/public-components/bars/ScrollBar';
  import {mapActions, mapState} from 'vuex';

  export default {
    components: {
      HighSalaryJobCard,
      ScrollBar
    },
    props: {
      jobBoxTitle: String
    },
    computed: {
      ...mapState('HOME_PAGE', {
        jobs: 'highSalaryJobs'
      })
    },

    methods: {
      ...mapActions('HOME_PAGE', {
        fetchHighSalaryJobs: 'fetchHighSalaryJobs'
      })
    },
    created() {
      this.fetchHighSalaryJobs();
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .job-box {
    height: 745px;
  }
</style>



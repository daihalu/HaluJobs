<template>
  <el-row class="box-container" style="overflow: hidden">
    <h4 class="box-title">
      <font-awesome-icon :icon="['fas', 'briefcase']"/>
      {{jobBoxTitle}}
    </h4>

    <scroll-bar class="job-box">
        <el-row :gutter="10">
          <el-col
            :span="12"
            v-for="(item, index) in jobs"
            :key="index"
            class="mg-bottom-10"
          >
            <attractive-job-card
              :jobInfo="item"
            />
          </el-col>
        </el-row>
    </scroll-bar>

  </el-row>
</template>

<script>
  import AttractiveJobCard from '~/components/public-components/cards/PinkWorkAddressSalaryJobCard8';
  import ScrollBar from '~/components/public-components/bars/ScrollBar';
  import {mapActions, mapState} from 'vuex';

  export default {
    components: {
      AttractiveJobCard,
      ScrollBar
    },
    props: {
      jobBoxTitle: String,
    },

    computed: {
      ...mapState('HOME_PAGE', {
        jobs: 'attractiveJobs'
      })
    },

    methods: {
      ...mapActions('HOME_PAGE', {
        fetchAttractiveJobs: 'fetchAttractiveJobs'
      })
    },
    created() {
      this.fetchAttractiveJobs();
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .job-box {
    height: 658px;
  }
</style>


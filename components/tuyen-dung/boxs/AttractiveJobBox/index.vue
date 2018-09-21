<template>
  <el-row class="box-container">
    <h4 class="box-title">
      <font-awesome-icon :icon="['fas', 'briefcase']"/>
      {{jobBoxTitle}}
    </h4>
    <div id="scroll-box">
      <el-row
        v-for="(item, index) in jobs"
        :key="index"
        class="mg-bottom-10"
      >
        <attractive-job-card
          :jobInfo="item"
        />
      </el-row>
    </div>
  </el-row>
</template>

<script>
  import AttractiveJobCard from '~/components/public-components/cards/PinkWorkAddressSalaryJobCard8';
  import {mapActions, mapState} from 'vuex';

  export default {
    components: {
      AttractiveJobCard
    },
    props: {
      jobBoxTitle: String,
    },

    computed: {
      ...mapState('RECRUITMENT_PAGE', {
        jobs: 'attractiveJobs'
      })
    },

    methods: {
      ...mapActions('RECRUITMENT_PAGE', {
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

  #scroll-box {
    overflow: auto;
    height: 700px;
    padding: 10px;
  }

  /* width */
  #scroll-box::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  #scroll-box::-webkit-scrollbar-track:hover {
    background: $color-gray;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }

  /* Handle */
  #scroll-box::-webkit-scrollbar-thumb {
    background: $color-scroll-bar;
    border-radius: 8px;
  }

  /* Handle on hover */
  #scroll-box::-webkit-scrollbar-thumb:hover {
    background: $color-scroll-bar--hover;
  }

</style>


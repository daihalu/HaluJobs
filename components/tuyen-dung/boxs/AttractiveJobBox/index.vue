<template>
  <el-row class="box-container">
    <h4 class="box-title">
      <font-awesome-icon :icon="['fas', 'briefcase']"/>
      {{jobBoxTitle}}
    </h4>
    <div class="item">
      <div v-for="item in 12" :key="item" class="mg-bottom-10">
        <attractive-job-card
          :jobInfo="jobList[0]"
        />
      </div>
    </div>
  </el-row>
</template>

<script>
  import AttractiveJobCard from '~/components/public-components/cards/PinkLocationSalaryJobCard8';

  export default {
    components: {
      AttractiveJobCard
    },
    props: {
      jobBoxTitle: String,
      jobList: Array
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .item {
    padding: 10px 10px 0 10px;
  }
</style>

<template>
  <el-row class="box-container">
    <h4 class="box-title">
      <font-awesome-icon :icon="['fas', 'user-tie']"/>
      Việc làm tương tự
    </h4>

    <el-row :gutter="10" class="container">
      <el-col :span="8" v-for="item in sameJobs" :key="item.companyName" class="mg-bottom-10">
        <same-job-card
          :jobInfo="item"
        />
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
  import SameJobCard from '~/components/public-components/cards/PinkLocationSalaryJobCard8';

  export default {
    props: {
      sameJobs: Array
    },
    components: {
      SameJobCard
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .container {
    padding: 10px;

  }
</style>

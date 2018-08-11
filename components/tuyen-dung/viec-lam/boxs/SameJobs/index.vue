<template>
  <el-row class="container">
    <h4>
      <font-awesome-icon icon="user-tie"/>
      Việc làm tương tự
    </h4>
    <hr class="hr-1"/>
    <el-row :gutter="4">
      <el-col :span="8" v-for="item in attractiveJobs" :key="item.companyName" class="">
        <attractive-job-card
          :title="item.title"
          :companyName="item.companyName"
          :salary="item.salary"
          :deadline="item.deadline"
          :workAddress="item.workAddress"
          :logoUrl="item.logoUrl"
        />
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
  import AttractiveJobCard from '~/components/public-components/cards/AttractiveJobCard';

  export default {
    props: {
      attractiveJobs: Array
    },
    components: {
      AttractiveJobCard
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .container {
    padding: 5px;
    background-color: #ffffff;

    margin: 20px auto;

  }

  .container h4 {
    padding: 5px;
    margin-bottom: 10px;
  }

  hr {
    margin-bottom: 10px;
  }

  .container .el-row .el-col {
    margin-bottom: 5px;
  }

</style>

<style lang="scss">
  @import "~assets/css/halujobs_variables";
</style>

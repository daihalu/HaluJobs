<template>
  <el-row class="container">
    <h4>
      <font-awesome-icon icon="user-tie"/>
      ỨNG VIÊN LIÊN QUAN
    </h4>
    <hr class="hr-1"/>
    <el-row :gutter="4">
      <el-col :span="8" v-for="item in 12" :key="item" class="">
        <CandidateCard/>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
  import CandidateCard from '~/components/public-components/cards/PinkExperienceCandiateCard8';

  export default {
    components: {
      CandidateCard
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .container {
    padding: 5px;
    background-color: #ffffff;
    margin: $mg-top-bottom-15 auto;
  }

  .container h4 {
    padding: 5px;
    margin-bottom: 10px;
  }

  hr {
    margin-bottom: 20px;
  }

  .container .el-row .el-col {
    margin-bottom: 5px;
  }

</style>


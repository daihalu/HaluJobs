<template>
  <el-row class="box-container">
    <h4 class="box-title">
      <font-awesome-icon icon="briefcase"/>
      {{jobBoxTitle}}
    </h4>
    <el-carousel trigger="click" height="555px" indicator-position="outside" v-bind:interval="60000">
      <el-carousel-item v-for="item in 8" :key="item">
        <el-row :gutter="10">
          <el-col :span="8" v-for="item in 15" v-bind:key="item" class="mg-bottom-10">
            <quick-job-card
              :jobInfo="jobList[0]"
            />
          </el-col>
        </el-row>

      </el-carousel-item>
    </el-carousel>
  </el-row>
</template>

<script>
  import QuickJobCard from '~/components/public-components/cards/PinkSalary8';

  export default {
    props: {
      jobBoxTitle: String,
      jobList: Array
    },
    components: {
      QuickJobCard
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/css/halujobs_variables';

</style>


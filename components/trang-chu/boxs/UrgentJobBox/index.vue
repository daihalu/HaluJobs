<template>
  <el-row class="box-container">
    <h4 class="box-title">
      <font-awesome-icon icon="briefcase"/>
      {{jobTitle}}
    </h4>
    <el-carousel trigger="click" height="555px" indicator-position="outside" v-bind:interval="60000">
      <el-carousel-item v-for="item in 8" :key="item">
        <el-row :gutter="10">
          <el-col :span="8" v-for="item in 15" v-bind:key="item" class="quick-job-card">
            <quick-job-card
              :position="jobList[0].position"
              :companyName="jobList[0].companyName"
              :salary="jobList[0].salary"
              :deadline="jobList[0].deadline"
              :quickJobUrl="jobList[0].quickJobUrl"
            />
          </el-col>
        </el-row>

      </el-carousel-item>
    </el-carousel>
  </el-row>
</template>

<script>
  import QuickJobCard from '~/components/public-components/cards/QuickJobCard';

  export default {
    props: {
      jobTitle: String
    },
    components: {
      QuickJobCard
    },
    data() {
      return {
        jobList: [
          {
            position: 'Nhân Viên Kinh Doanh Thiết',
            companyName: 'Công ty cổ phần Hoàng Kim',
            salary: '10 - 20 triệu',
            deadline: '13/7/2018',
            quickJobUrl: '/tuyen-dung/viec-lam'
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/css/halujobs_variables';

  .quick-job-card {
    margin-bottom: 10px;
  }

</style>


<template>
  <el-row class="box-container">
    <h4 class="box-title">
      <font-awesome-icon icon="briefcase"/>
      {{jobTitle}}
    </h4>
    <div class="row" id="scroll-box">
      <el-row :gutter="10">
        <el-col :span="12" v-for="item in 50" v-bind:key="item" class="mr-bottom-10">
          <attractive-job-card
            :jobInfo="jobList[0]"
          />
        </el-col>
      </el-row>
    </div>
  </el-row>
</template>

<script>
  import AttractiveJobCard from '~/components/public-components/cards/AttractiveJobCard';

  export default {
    components: {
      AttractiveJobCard
    },
    props: {
      jobTitle: String
    },
    data() {
      return {
        jobList: [
          {
            position: "Giám đốc điều hành nhân sự",
            companyName: "Công ty cổ phần Đại Nam",
            salary: "15 - 22 triệu",
            deadline: "30/7/2018",
            workAddress: "Sài Gòn",
            avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_V7avrT3e0yZsQ_lVZgrMaE_fUA-8RX04mDkxTPO2SgoGU-Jjg",
            jobUrl: "/tuyen-dung/viec-lam",
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .row {
    overflow: auto;
    height: 670px;
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


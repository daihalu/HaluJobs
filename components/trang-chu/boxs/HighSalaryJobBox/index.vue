<template>
  <el-row class="high-salary-job-box">
    <h4>
      <font-awesome-icon icon="briefcase"/>
      {{jobTitle}}
    </h4>
    <div class="row" id="high-salary-job-box">
      <el-row :gutter="4">
        <el-col v-for="item in 50" v-bind:key="item">
          <high-salary-job-card
            :jobInfo="jobList[0]"
          />
        </el-col>
      </el-row>
    </div>
  </el-row>
</template>

<script>
  import HighSalaryJobCard from '~/components/public-components/cards/HighSalaryJobCard';


  export default {
    components: {
      HighSalaryJobCard
    },
    props: {
      jobTitle: String
    },
    data() {
      return {
        jobList: [
          {
            position: 'Nhân Viên Marketing Online - Được Đào Tạo Từ A-Z',
            companyName: 'Công Ty Cổ Phần Tư Vấn Bất Động Sản Phương Đông',
            salary: '10 triệu - 20 triệu',
            deadline: '13/7/2018',
            workAddress: 'Hà Nội',
            jobUrl: '/tuyen-dung/viec-lam',
            avatarUrl: 'http://www.spulsa.info/wp-content/uploads/photo-logos-free-online-logo-maker-design-a-custom-logo-canva.png'
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
    height: 640px;
    padding: 10px;
  }

  .high-salary-job-box {
    background-color: $color-white;
    margin: $mg-top-bottom-15 auto;
  }

  h4 {
    border-bottom: 1px solid $color-border;
    padding: 10px;
    font-size: $fs-large-18;
    font-weight: $fw-base-500;
  }

  /* width */
  #high-salary-job-box::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  #high-salary-job-box::-webkit-scrollbar-track:hover {
    background: $color-gray;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }

  /* Handle */
  #high-salary-job-box::-webkit-scrollbar-thumb {
    background: $color-scroll-bar;
    border-radius: 8px;
  }

  /* Handle on hover */
  #high-salary-job-box::-webkit-scrollbar-thumb:hover {
    background: $color-scroll-bar--hover;
  }

</style>



<template>
  <div class="job-card">
    <div class="job-card--avatar">
      <nuxt-link to="/tuyen-dung/viec-lam" :title="companyName">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_V7avrT3e0yZsQ_lVZgrMaE_fUA-8RX04mDkxTPO2SgoGU-Jjg"/>
      </nuxt-link>
    </div>
    <div class="job-card--content">
      <el-tooltip class="item" effect="dark" :content="position" placement="top-start">
        <p class="position">
          <nuxt-link to="/tuyen-dung/viec-lam" :title="position">
            {{position}}
          </nuxt-link>
        </p>
      </el-tooltip>
      <p class="company" :title="companyName"><font-awesome-icon :icon="['far', 'building']"/>{{companyName}}</p>
      <div class="job-card--content--item">
        <p class="salary" :title="salary"><font-awesome-icon icon="dollar-sign"/>{{salary}}</p>
        <p class="expiryDate" :title="expiryDate"><font-awesome-icon icon="user-clock"/>{{expiryDate}}</p>
        <p class="location" :title="location"><font-awesome-icon icon="map-marker-alt"/>{{location}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      colNum: Number
    },
    data() {
      return {
        position: 'Giám đốc điều hành nhân sự',
        companyName: 'Công ty cổ phần Đại Ca',
        salary: '15 - 22 triệu',
        expiryDate: '30/7/2018',
        location: 'Sài Gòn'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .job-card {
    margin: 5px 3px;
    border: 1px solid $color-border;
    border-radius: $br-5;
    font-size: $fs-base-16;
    padding: $padding-border-box-10;
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    align-items: center;
  }

  .job-card:hover {
    box-shadow: 0 0 5px $color-primary;
    cursor: pointer;
  }

  .job-card:active {
    box-shadow: 0 0 0 transparent;
    transition: none;
  }

  .job-card--avatar img {
    border: 2px solid $color-gray;
    border-radius: $br-3;
    width: 70px;
    height: 70px;
    margin-top: 3px;
  }

  .job-card--content {
    margin-left: 20px;
  }



  .position {
    color: $color-primary;
    font-weight: $fw-base-500;
    padding-bottom: 5px;
  }

  .company {
    opacity: 0.8;

  }

  svg {
    margin-right: 3px;
    font-size: 14px;
    opacity: 0.7;
  }


  .salary, .location  {
    color: $color-pink;
  }

  .expiryDate, .salary, .location {
    font-size: 12px;
    line-height: 25px;
    display: inline;
    margin-right: 10px;
  }

  .expiryDate {
    opacity: 0.8;
  }

</style>


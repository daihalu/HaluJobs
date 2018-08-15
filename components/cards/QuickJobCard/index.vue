<template>
    <div class="card">
      <div class="job-card--avatar">
        <nuxt-link to="/tuyen-dung/viec-lam" :title="companyName">
          <img src="https://www.codyhub.com/wp-content/uploads/2017/07/i2.jpg"/>
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
        position: 'Nhân Viên Kinh Doanh Thiết',
        companyName: 'Công ty cổ phần Hoàng Kim',
        salary: '10 - 20 triệu',
        expiryDate: '13/7/2018'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .card {
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

  .card:hover {
    box-shadow: 0 0 5px $color-primary;
    cursor: pointer;
  }

  .card:active {
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
  .company svg {
    margin-right: 3px;
  }

  .salary {
    color: $color-pink;
  }

  .expiryDate, .salary {
    font-size: $fs-small-14;
    line-height: 25px;
    display: inline;
  }

  .expiryDate {
      padding-left: 50px;
      opacity: 0.8;
  }

  svg {
    font-size: 14px;
    opacity: 0.7;
  }

</style>

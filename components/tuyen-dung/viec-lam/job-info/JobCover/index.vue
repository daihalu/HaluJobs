<template>
  <el-row class="job-container">
    <el-col :span="5">
      <div class="job-avatar">
        <img :src="logoUrl" :alt="companyName"/>
      </div>
    </el-col>
    <el-col :span="13">
      <h2 class="job-title">{{title}}</h2>
      <p class="company-name">{{companyName}}</p>
      <p><strong>Địa điểm tuyển dụng:</strong><span> {{locations}}</span></p>
      <p><strong>Mức lương:</strong><span> {{salary}}</span></p>
      <p><strong>Hạn nộp hồ sơ:</strong><span> {{closingDate}} </span></p>
      <div class="btn-options">
        <el-button
          class="apply-now"
        >
          <font-awesome-icon :icon="['far', 'clipboard']"/>
          Ứng tuyển ngay
        </el-button>
        <el-button
          @click="activeBtn = 'luucongviec'"
          :class="{active: activeBtn === 'luucongviec' }"
          class="save-job"
        >
          <font-awesome-icon icon="heart"/>
          Lưu công việc
        </el-button>
      </div>
    </el-col>
    <el-col :span="6" class="box-right">
      <div class="hot-job">
        <font-awesome-icon icon="star"/>
        <font-awesome-icon icon="star"/>
        <font-awesome-icon icon="star"/>
        <p>Tin hấp dẫn</p>
      </div>
      <p><strong>Lượt xem:</strong><span> 1996</span></p>
      <p><strong>Ngày duyệt:</strong><span> 18/07/2018</span></p>
      <hr class="hr-1">
      <el-row class="icon">
        <el-tooltip class="item" effect="dark" content="Thông báo sai sự thật" placement="top">
          <font-awesome-icon icon="comment"/>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Chia sẻ tới bạn bè" placement="top">
          <font-awesome-icon icon="share-alt"/>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Các lưu ý để tránh bị lừa đảo khi ứng viên tìm việc"
                    placement="top">
          <font-awesome-icon icon="exclamation-triangle"/>
        </el-tooltip>
      </el-row>

    </el-col>
  </el-row>
</template>

<script>
  import {FormattedDate} from '~/assets/js/functions';
  export default {
    props: {
      title: String,
      companyName: String,
      salaryRange: Object,
      deadline: String,
      workAddresses: Array,
      logoUrl: String,
    },
    data() {
      return {
        activeBtn: '',
        salary: this.salaryRange.min + ' triệu - ' + this.salaryRange.max + ' triệu',
        closingDate: this.deadline,
        locations: this.workAddresses.join(', ')
      }
    },

    created() {
      this.closingDate = FormattedDate(this.deadline);
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .job-container {
    width: 100%;
    border: 1px solid $color-gray;
    padding: 20px 20px 20px 3px;
    background-color: $color-white;
    border-radius: $br-5;
  }

  .job-avatar {
    text-align: center;
    width: 214px;
    height: 214px;
    display: block;
    margin: 0 auto;
  }

  .job-avatar img {
    width: 100%;
    border: 2px solid $color-gray;
    border-radius: 5px;

  }

  .job-title {

    font-weight: 600;
  }

  .company-name {
    color: $color-primary;
    font-weight: $fw-base-500;
    font-size: 20px;
    text-transform: uppercase;
  }

  p {
    margin-bottom: 3px;
    line-height: 30px;

    span {
      color: $color-pink;
    }
  }

  .btn-options {
    margin-top: 10px;
  }

  .el-button {
    padding: 10px 20px;
  }


  .apply-now {
    background-color: $color-pink;
    border: 1px solid $color-pink;
    color: $color-white;
  }

  .apply-now:hover {
    background-color: $color-white;
    color: $color-pink;
    border-color: $color-pink;
    box-shadow: 0 0 5px $color-pink;
    cursor: pointer;
  }

  .apply-now:active {
    background-color: $color-pink;
    color: $color-white;
  }

  .save-job {
    background-color: $color-white;
    border: 1px solid $color-primary;
    color: $color-primary;
  }

  .save-job:hover {
    background-color: $color-primary;
    color: $color-white;
  }

  .save-job:active {
    background-color: $color-white;
    color: $color-primary;
  }

  .active {
    background-color: $color-primary;
    color: $color-white;
    border-color: $color-primary;
  }

  .hot-job {
    border: 1px solid $color-pink;
    background-color: $color-pink;
    color: $color-white;
    border-radius: 30px;
    width: 50%;
    margin: 20px auto;

    svg {
      margin-right: 5px;
    }

    p {
      line-height: 20px;
    }
  }

  .box-right {
    text-align: center;
    font-size: $fs-base-16;

    hr {
      margin: 10px auto;
      opacity: 0.5;
      width: 80%;
    }

    .icon {
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 22px;
      opacity: 0.7;

      svg:hover {
        color: $color-primary;
        cursor: pointer;
      }
    }
  }
</style>

<template>
  <el-row class="job-container">
    <el-col :span="5">
      <div class="job-avatar">
        <img
          src="https://cdn1.mywork.com.vn/company-logo-medium/042018/6b61d0525c385e6c76454d532267522b.gif"/>
      </div>
    </el-col>
    <el-col :span="13">
      <h2 class="job-name">Nhân Viên Văn Phòng Phụ Trách Kinh Doanh Khai Thác Sự Kiện - ( Lương cứng 5tr + % Hoa hồng
        )</h2>
      <p class="company-name">Công Ty TNHH MTV Dương Thiên Hương</p>
      <p><strong>Địa điểm tuyển dụng:</strong><span> Hà Nội</span></p>
      <p><strong>Mức lương:</strong><span> 5 triệu - 10 triệu (Có phần trăm hoa hồng)</span></p>
      <p><strong>Hạn nộp hồ sơ:</strong><span> 25/07/2018 </span></p>
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
      <el-row class="box-right--icon">
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
  export default {
    contact: "index",
    data() {
      return {
        activeBtn: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs-variables";

  .job-container {
    width: 100%;
    margin-top: $mg-top-bottom-20;
    font-size: $fs-base-16;
    color: $color-black;
    border: 1px solid $color-gray;
    padding: 15px;
    background-color: $color-white;
    font-weight: 600;
  }

  .job-avatar {
    text-align: center;
    margin-top: 10px;
    margin-right: 10px;
  }

  .job-avatar img {
    width: 200px;
    height: 200px;
    border: 2px solid $color-gray;
    border-radius: 5px;

  }

  .job-name {
    margin-bottom: 3px;
  }

  .company-name {
    color: $color-primary;
    font-weight: $fw-base-500;
  }

  p {
    margin-bottom: 3px;
    line-height: 30px;
  }

  p span {
    color: $color-pink;
  }

  .btn-options {
    margin-top: 10px;
  }

  .el-button {
    height: 40px;
    padding: 10px 20px;
    outline: 0 none;
    transition: all 0.15s ease-in-out;
    font-weight: $fw-base-500;
    font-size: $fs-base-16;
  }

  .el-button:active {
    box-shadow: 0 0 0 transparent;
    transition: none;
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
    border: 1px solid #fc3d6c;
    background-color: #fc3d6c;
    color: $color-white;
    border-radius: 30px;
    width: 50%;
    margin: 10px auto;
  }

  .hot-job svg {
    margin-right: 5px;
  }

  .hot-job p {
    line-height: 20px;
  }

  .box-right hr {
    margin: 10px auto;
    opacity: 0.5;
    width: 80%;
  }

  .box-right {
    text-align: center;
    font-size: $fs-base-16;
  }

  .box-right--icon {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 22px;
    opacity: 0.7;
  }

  .box-right--icon svg:hover {
    color: $color-primary;
    cursor: pointer;
  }

</style>

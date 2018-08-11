<template>
  <el-row class="candidate-header">
    <el-col :span="5">
      <div class="candidate-avatar">
        <img :src="profilePicture"/>
      </div>
    </el-col>
    <el-col :span="19">
      <h2 class="candidate-name">{{name}}</h2>
      <p class="candidate-position">{{position}}</p>
      <p><strong>Mã hồ sơ:</strong><span> {{id}}</span></p>
      <p><strong>Số năm kinh nghiệm:</strong><span> {{workExperience}}</span> | <strong>Số lượt xem: </strong><span> {{numberOfViews}}</span>
      </p>
      <div class="btn-options">
        <el-button class="view-contact">
          <font-awesome-icon icon="user"/>
          Xem liên hệ
        </el-button>
        <el-button
          @click="activeBtn = 'luucongviec'"
          :class="{active: activeBtn === 'luucongviec' }"
          class="apply-now">
          <font-awesome-icon icon="heart"/>
          Lưu hồ sơ
        </el-button>
        <el-button class="send-message">
          <font-awesome-icon icon="comment"/>
          Gửi tin nhắn
        </el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    props: {
      id: String,
      numberOfViews: String,
      position: String,
      name: String,
      workExperience: String,
      phoneNumber: String,
      email: String,
      imageUrl: String
    },
    data() {
      return {
        activeBtn: '',
        profilePicture: this.imageUrl
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .candidate-header {
    width: 100%;
    margin-top: $mg-top-bottom-15;
    font-size: $fs-base-16;
    color: $color-black;
    border: 1px solid $color-gray;
    padding: $padding-border-box-15;
    background-color: $color-white;
    font-weight: 600;
  }

  .candidate-avatar img {
    width: 152px;
    height: 152px;
    border: 2px solid $color-gray;
    border-radius: 5px;
  }

  .candidate-name {
    margin-bottom: 3px;
  }

  .candidate-position {
    color: $color-primary;
    font-weight: $fw-base-500;
  }

  .candidate-header p {
    margin-bottom: 3px;
  }

  .candidate-header p span {
    color: $color-pink;
  }

  .candidate-header .btn-options {
    margin-top: 10px;
  }

  .candidate-header .el-button {
    height: 40px;
    padding: 10px 20px;
    outline: 0 none;
    transition: all 0.15s ease-in-out;
    font-weight: $fw-base-500;
    font-size: $fs-base-16;
  }

  .candidate-header .el-button:active {
    box-shadow: 0 0 0 transparent;
    transition: none;
  }

  .candidate-header .view-contact {
    background-color: $color-pink;
    border: 1px solid $color-pink;
    color: $color-white;
  }

  .candidate-header .view-contact:hover {
    background-color: $color-white;
    color: $color-pink;
    border-color: $color-pink;
    box-shadow: 0 0 5px $color-pink;
    cursor: pointer;
  }

  .candidate-header .view-contact:active {
    background-color: $color-pink;
    color: $color-white;
  }

  .candidate-header .apply-now,
  .candidate-header .send-message {
    background-color: $color-white;
    border: 1px solid $color-primary;
    color: $color-primary;
  }

  .candidate-header .apply-now:hover,
  .candidate-header .send-message:hover {
    background-color: $color-primary;
    color: $color-white;
  }

  .candidate-header .apply-now:active,
  .candidate-header .send-message:active {
    background-color: $color-white;
    color: $color-primary;
  }

  .candidate-header .active {
    background-color: $color-primary;
    color: $color-white;
    border-color: $color-primary;
  }

</style>

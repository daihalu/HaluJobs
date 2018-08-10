<template>
  <div class="container">
    <h3>Thông tin liên hệ</h3>

    <p><strong>Họ tên: </strong><span>{{name}}</span></p>
    <p><strong>Địa chỉ: </strong><span>{{address}}</span></p>
    <div class="btn-options">
      <el-button class="view-contact">
        <font-awesome-icon icon="user"/>
        Xem liên hệ
      </el-button>

      <el-button class="send-message">
        <font-awesome-icon icon="comment"/>
        Gửi tin nhắn
      </el-button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: String,
      address: String,
      phoneNumber: String,
      email: String
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs-variables";

  .container {
    width: 100%;
    color: $color-black;
    border: 1px solid $color-gray;
    background-color: $color-white;
    margin-top: $mg-top-bottom-20;
    border-radius: $br-5;
    padding: $padding-border-box-15;
  }

  h3 {
    color: $color-primary;
    border-bottom: 1px solid $color-border;
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-size: $fs-large-18;
    font-weight: $fw-base-500;
  }

  p {
    line-height: 30px;
  }

  .btn-options {
    margin-top: 10px;
    text-align: center;
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

  .view-contact {
    background-color: $color-pink;
    border: 1px solid $color-pink;
    color: $color-white;
  }

  .view-contact:hover {
    background-color: $color-white;
    color: $color-pink;
    border-color: $color-pink;
    box-shadow: 0 0 5px $color-pink;
    cursor: pointer;
  }

 .view-contact:active {
    background-color: $color-pink;
    color: $color-white;
  }

  .send-message {
    background-color: $color-white;
    border: 1px solid $color-primary;
    color: $color-primary;
  }

  .send-message:hover {
    background-color: $color-primary;
    color: $color-white;
  }

  .send-message:active {
    background-color: $color-white;
    color: $color-primary;
  }


</style>


<template>
    <div class="company-box">
      <img src="https://cdn1.mywork.com.vn/company-logo-medium/042018/6b61d0525c385e6c76454d532267522b.gif"
           alt="Công Ty TNHH MTV Dương Thiên Hương">
      <p class="company-name">{{name}}</p>
      <p><strong>Địa chỉ:</strong> {{address}}</p>
      <p><strong>Quy mô công ty:</strong> {{size}}</p>
      <div class="btn-options">
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
      size: String
    },
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs-variables";

  .company-box {
    border: 1px solid $color-gray;
    padding: 15px;
    background-color: $color-white;
    margin-top: $mg-top-bottom-20;
    text-align: center;

  }

  .company-box img {
    width: 260px;
    height: 260px;
    border: $br-3 solid $color-gray;
  }

  .company-name {
    color: $color-primary;
    font-weight: $fw-big-700;
    font-size: $fs-large-18;
  }

  .company-box p {
    line-height: $line-height-30;
  }

  .el-button {
    padding: 10px 20px;
    outline: 0 none;
    transition: all 0.15s ease-in-out;
    font-weight: $fw-base-500;
    font-size: $fs-base-16;
    margin-top: 10px;
  }

  .el-button:active {
    box-shadow: 0 0 0 transparent;
    transition: none;
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

<style lang="">

</style>

<template>
  <el-row :gutter="10" class="container">
    <el-col :span="4">
      <nuxt-link to="/auth/dang-nhap">
        <div class="box-container function-box">
          <font-awesome-icon :icon="['fas', 'lock']"/>
          <p>ĐĂNG NHẬP</p>
        </div>
      </nuxt-link>
    </el-col>

    <el-col :span="4">
      <nuxt-link to="/auth/dang-ky">
        <div class="box-container function-box">
          <font-awesome-icon :icon="['fas', 'sign-in-alt']"/>
          <p>ĐĂNG KÝ</p>
        </div>
      </nuxt-link>
    </el-col>

    <el-col :span="8">
      <nuxt-link to="/ung-vien/dang-nhap">
        <div class="box-container function-box">
          <font-awesome-icon :icon="['far', 'check-circle']"/>
          <p>HOÀN THIỆN HỒ SƠ</p>
          <p>Tạo hồ sơ miễn phí, có ngay việc làm ưng ý</p>
        </div>
      </nuxt-link>
    </el-col>

    <el-col :span="8">
      <nuxt-link to="/nha-tuyen-dung/dang-nhap">
        <div class="box-container function-box">
          <font-awesome-icon :icon="['fas', 'door-open']"/>
          <p>ĐĂNG TUYỂN MIỄN PHÍ</p>
          <p>Tiếp cận nhanh nhất với hơn 4 triệu hồ sơ tìm việc</p>
        </div>
      </nuxt-link>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    contact: "index"
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .function-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-color: transparent;
    height: 140px;
    color: $color-primary;
    -webkit-transition: all 0.15s ease-in-out;
    transition: all 0.15s ease-in-out;
  }

  .function-box:hover {
    background-color: $color-primary;
    color: $color-white !important;
  }

  .function-box svg {
    font-size: 60px;
    margin-bottom: 15px;
  }

</style>

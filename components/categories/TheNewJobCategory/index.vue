<template>
  <el-row class="new-job-box">
    <el-col :span="3">
      <h3>VIỆC LÀM MỚI</h3>
    </el-col>
    <el-col :span="13">
      <el-carousel height="30px" indicator-position="none" arrow="never" class="col-md-9" :interval="10000">
        <el-carousel-item v-for="item in list" :key="item">
          <p :title="item">
            <nuxt-link to="/tuyen-dung/viec-lam">
              {{ item }}
            </nuxt-link>
          </p>
        </el-carousel-item>
      </el-carousel>
    </el-col>
    <el-col :span="8" class="text-new-job">
      <p>Hôm nay có 1703 việc làm mới <nuxt-link to="/viec-lam-moi-ngay">» Bấm xem ngay</nuxt-link></p>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        list: ['Nhân viên văn phòng', 'Quản lý kho', 'Nhân viên marketing', 'Quản lý ca sĩ']
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs-variables";

  .new-job-box {
    margin: $mg-top-bottom-20 auto;
    padding: $padding-border-box-10;
    line-height: $line-height-30;
    background-color: $color-white;
    font-size: $fs-base-16;
  }


  .el-carousel__item p {
    color: $color-primary;
    font-size: $fs-base-16;
    line-height: $line-height-30;
    margin: 0;
    font-weight: $fw-base-500;
  }

  .text-new-job p {
    float: right;
  }

  .text-new-job p a {
    color: $color-pink;
    font-weight: $fw-base-500;
  }

  .el-col h3 {
    font-weight: $fw-base-500;
  }

</style>

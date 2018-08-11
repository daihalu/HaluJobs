<template>
  <el-row class="location-job-box">
    <div class="header">
      <h2>TÌM VIỆC LÀM THEO TỈNH THÀNH</h2>
    </div>
    <div>
      <div class="area-box">
        <el-row :gutter="4">
          <el-col :span="6" v-for="item in 48" :key="item">
            <p><nuxt-link to="/tuyen-dung/dia-diem">Việc làm tại Bến Tre</nuxt-link></p>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-row>
</template>

<script>
  export default {
    contact: "index"
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .location-job-box {
    background-color: $color-white;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .header {
    text-align: center;
    color: $color-white;
    background-color: $color-primary;
    line-height: 50px;
    border-radius: 5px 5px 0 0;
    padding: 10px;
  }

  .area-box {

    padding: 20px;
    font-size: $fs-small-14;
  }

  .el-col p {
    line-height: $line-height-30;
    color: $color-primary;
  }


</style>

<style lang="">

</style>

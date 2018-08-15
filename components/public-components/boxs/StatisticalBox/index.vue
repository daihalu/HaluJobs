<template>
  <el-row class="statistical-box">
    <el-col :span="6" class="col">
      <h3>4.000.000</h3>
      <p>Ứng viên</p>
    </el-col>
    <el-col :span="6">
      <h3>2.000.000</h3>
      <p>Việc làm</p>
    </el-col>
    <el-col :span="6">
      <h3>100.000</h3>
      <p>Nhà tuyển dụng</p>
    </el-col>
    <el-col :span="6">
      <h3>9.000.000</h3>
      <p>Lượt ứng tuyển</p>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .statistical-box {
    background-color: $color-pink;
    padding: 20px;
    color: $color-white;
    border-radius: $br-5;
    text-align: center;
  }

  h3 {
    font-weight: $fw-base-500;
    font-size: 30px;
    line-height: $line-height-50;
  }

</style>


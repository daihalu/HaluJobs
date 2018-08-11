<template>
    <div>
      <el-row class="hotline-box">
        <div class="header">
          <h2>HOTLINE TƯ VẤN DÀNH CHO NHÀ TUYỂN DỤNG</h2>
        </div>
        <div>
          <div class="area-box">
            <h3>KHU VỰC  <span>MIỀN BẮC</span> HOTLINE <span>(024) 888 88888</span></h3>

            <el-row :gutter="4">
              <el-col :span="4" v-for="item in 48" :key="item">
                <p><span>012 488 719098</span> Ms Lương</p>
              </el-col>
            </el-row>
          </div>

          <div class="area-box">
            <h3>KHU VỰC  <span>MIỀN TRUNG</span> HOTLINE <span>(024) 888 88899</span></h3>

            <el-row :gutter="4">
              <el-col :span="4" v-for="item in 24" :key="item">
                <p><span>012 488 719098</span> Ms Lương</p>
              </el-col>
            </el-row>
          </div>

          <div class="area-box">
            <h3>KHU VỰC  <span>MIỀN NAM</span> HOTLINE <span>(024) 998 88899</span></h3>

            <el-row :gutter="4">
              <el-col :span="4" v-for="item in 24" :key="item">
                <p><span>012 488 719098</span> Ms Lương</p>
              </el-col>
            </el-row>
          </div>

        </div>
      </el-row>

      <el-row class="hotline-box">
        <div class="header">
          <h2>HOTLINE TƯ VẤN DÀNH CHO NGUỜI TÌM VIỆC</h2>
        </div>
        <div class="number-box">
          <h3><span>TOÀN QUỐC: </span><strong>(098) 999 88988</strong></h3>
        </div>

      </el-row>
    </div>
</template>

<script>
    export default {
        contact: "index"
    }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";
  .hotline-box {
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
    text-align: center;
    padding: 10px;
    font-size: $fs-small-14;
  }

  .area-box h3 {
    line-height: $line-height-50;
    font-size: 24px;
    font-weight: $fw-base-500;
  }

  .area-box h3 span {
    color: $color-pink;
  }

  .el-col p {
    line-height: $line-height-30;
  }

  .el-col p span {
    color: $color-primary;
    font-weight: $fw-base-500;
  }

  .number-box {
    text-align: center;
    padding: 10px;
  }

  .number-box h3 {
    line-height: $line-height-50;
    font-size: 24px !important;
    font-weight: $fw-base-500;
  }

  .number-box h3 span {
    color: $color-primary;
  }

  .number-box h3 strong {
    color: $color-pink;
  }

</style>

<style lang="">

</style>

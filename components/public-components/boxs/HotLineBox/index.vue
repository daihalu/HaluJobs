<template>
  <div>
    <el-row class="box-container">
      <div class="header">
        <h2>HOTLINE TƯ VẤN</h2>
      </div>
      <div>
        <div class="area-box">
          <h3>HOTLINE: <span>0247 102 9889</span></h3>

          <!--<el-row :gutter="4">-->
            <!--<el-col :span="4" v-for="item in 48" :key="item">-->
              <!--<p><span>012 488 719098</span> Ms Lương</p>-->
            <!--</el-col>-->
          <!--</el-row>-->
        </div>

        <!--<div class="area-box">-->
          <!--<h3>KHU VỰC <span>MIỀN TRUNG</span> HOTLINE <span>(024) 888 88899</span></h3>-->

          <!--<el-row :gutter="4">-->
            <!--<el-col :span="4" v-for="item in 24" :key="item">-->
              <!--<p><span>012 488 719098</span> Ms Lương</p>-->
            <!--</el-col>-->
          <!--</el-row>-->
        <!--</div>-->

        <!--<div class="area-box">-->
          <!--<h3>KHU VỰC <span>MIỀN NAM</span> HOTLINE <span>(024) 998 88899</span></h3>-->

          <!--<el-row :gutter="4">-->
            <!--<el-col :span="4" v-for="item in 24" :key="item">-->
              <!--<p><span>012 488 719098</span> Ms Lương</p>-->
            <!--</el-col>-->
          <!--</el-row>-->
        <!--</div>-->

      </div>
    </el-row>

    <!--<el-row class="hotline-box">-->
      <!--<div class="header">-->
        <!--<h2>HOTLINE TƯ VẤN DÀNH CHO NGUỜI TÌM VIỆC</h2>-->
      <!--</div>-->
      <!--<div class="number-box">-->
        <!--<h3><span>TOÀN QUỐC: </span><strong>(098) 999 88988</strong></h3>-->
      <!--</div>-->

    <!--</el-row>-->
  </div>
</template>

<script>
  export default {
    contact: "index"
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .box-container {
    text-align: center;
  }

  .hotline-box {
    margin-top: 15px;
    background-color: $color-white;
    border-radius: $br-5;
    text-align: center;
  }

  .header {
    color: $color-white;
    background-color: $color-primary;
    line-height: $line-height-50;
    border-radius: 5px 5px 0 0;
    padding: 10px;
  }

  .area-box {
    padding: 10px;
    font-size: $fs-small-14;
    h3 {
      line-height: $line-height-50;
      font-size: 24px;
      font-weight: $fw-base-500;
      span {
        color: $color-pink;
      }
    }
    p {
      line-height: $line-height-30;
      span {
        color: $color-primary;
        font-weight: $fw-base-500;
      }
    }
  }

  .number-box {
    padding: 10px;
    h3 {
      line-height: $line-height-50;
      font-size: 24px !important;
      font-weight: $fw-base-500;
      span {
        color: $color-primary;
      }
      strong {
        color: $color-pink;
      }
    }
  }


</style>


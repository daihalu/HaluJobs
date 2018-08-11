<template>
  <el-row class="box-container">
    <div class="header">
      <h2>TÌM VIỆC LÀM THEO TỈNH THÀNH</h2>
    </div>
    <div>
      <div class="area-box">
        <el-row :gutter="4">
          <el-col :span="6" v-for="item in 48" :key="item">
            <p>Việc làm tại <nuxt-link to="/tuyen-dung/dia-diem">Bến Tre</nuxt-link></p>
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
    p {
      line-height: $line-height-30;
      font-weight: $fw-base-500;
      color: $color-primary;
      a {
        color: $color-pink;
      }
    }
  }

</style>


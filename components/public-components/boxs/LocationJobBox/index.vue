<template>
  <el-row class="box-container">
    <div class="header">
      <h2>TÌM VIỆC LÀM THEO TỈNH THÀNH</h2>
    </div>
    <div>
      <div class="area-box">
        <el-row :gutter="4">
          <el-col :span="6" v-for="(item, index) in workAddresses" :key="index">
            <p v-if="item.label === 'Tất cả'">Việc làm  <nuxt-link to="/tuyen-dung/dia-diem">Toàn quốc</nuxt-link></p>
            <p v-else>Việc làm tại <nuxt-link to="/tuyen-dung/dia-diem">{{item.label}}</nuxt-link></p>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-row>
</template>

<script>
  import {JobOption} from '~/assets/js/data-options';
  export default {
    contact: "index",
    data() {
      const {workAddresses} = JobOption;
      return {
        workAddresses: workAddresses
      }
    }
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


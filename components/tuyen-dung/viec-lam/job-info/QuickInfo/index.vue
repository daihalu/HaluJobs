<template>
  <div class="box-container">
    <h3 class="box-title">Thông tin tuyển dụng nhanh</h3>

    <div class="container">
      <el-row>
        <el-col :span="12">
          <p><strong>Kinh nghiệm: </strong>{{yearsOfExperience}} năm</p>
          <p><strong>Bằng cấp yêu cầu: </strong>{{qualification}}</p>
          <p><strong>Số lượng cần tuyển: </strong>{{quantity}}</p>
        </el-col>


        <el-col :span="12">
          <p><strong>Hình thức làm việc: </strong>{{jobType}}</p>
          <p><strong>Chức vụ: </strong>{{position}}</p>
          <p><strong>Giới tính yêu cầu: </strong>{{gender}}</p>
        </el-col>
      </el-row>
      <p>
        <strong>Ngành nghề: </strong>
        <nuxt-link to="/tuyen-dung" v-for="item in professions" :key="item" class="tag">
          {{item}}
        </nuxt-link>
      </p>
    </div>


  </div>
</template>

<script>
  export default {
    props: {
      yearsOfExperience: String,
      qualification: String,
      quantity: Number,
      professions: Array,
      position: String,
      gender: String,
      jobType: String
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .container {
    padding: 5px 15px 15px 15px;
  }

  h3 {
    color: $color-primary;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100px;
      bottom: 0;
      border-bottom: 2px solid $color-primary;
    }
  }

  .tag {
    color: $color-black !important;
  }

  .container p {
    line-height: 25px;
    margin-bottom: 3px;
  }
</style>


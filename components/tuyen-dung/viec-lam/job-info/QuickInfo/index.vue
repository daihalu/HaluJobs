<template>
  <div class="container">
    <h3>Thông tin tuyển dụng nhanh</h3>
    <hr class="hr-1"/>

    <el-row>
      <el-col :span="12">
        <p><strong>Kinh nghiệm: </strong>{{yearsOfExperience}}</p>
        <p><strong>Bằng cấp yêu cầu: </strong>{{qualification}}</p>
        <p><strong>Số lượng cần tuyển: </strong>{{numberOfRecruits}}</p>
        <p><strong>Ngành nghề: </strong>{{professions}}</p>
      </el-col>

      <el-col :span="12">
        <p><strong>Hình thức làm việc: </strong>{{jobType}}</p>
        <p><strong>Chức vụ: </strong>{{position}}</p>
        <p><strong>Giới tính yêu cầu: </strong>{{gender}}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    props: {
      yearsOfExperience: String,
      qualification: String,
      numberOfRecruits: String,
      professions: String,
      position: String,
      gender: String,
      jobType: String
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs-variables";

  .container {
    width: 100%;
    color: $color-black;
    border: 1px solid $color-gray;
    background-color: $color-white;
    margin-top: $mg-top-bottom-20;
    border-radius: $br-5;
    padding: $padding-border-box-15;
  }

  .container h3 {
    color: $color-primary;
    border-bottom: 1px solid $color-border;
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-size: $fs-large-18;
    font-weight: $fw-base-500;
  }

  .container hr {
    margin-bottom: 10px;
  }

  .container p {
    line-height: 25px;
    margin-bottom: 3px;
  }

</style>

<style lang="">

</style>

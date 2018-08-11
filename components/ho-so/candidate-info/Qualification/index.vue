<template>
  <div class="container">
    <h3>Kinh nghiệm làm việc</h3>
    <el-row class="container" v-for="item in qualifications" :key="item.time">
      <el-col :span="16">
        <p><strong>Bằng: </strong>{{item.type}}</p>
        <p><strong>Trường: </strong>{{item.school}}</p>
        <p><strong>Ngành: </strong>{{item.major}}</p>
        <p><strong>Xếp loại: </strong>{{item.level}}</p>
        <p><strong>Khoa: </strong>{{item.department}}</p>
        <p><strong>Thời gian: </strong>{{item.time}}</p>
      </el-col>
      <el-col :span="8">
        <img :src="schoolImage" :title="item.school">
      </el-col>
    </el-row>

  </div>

</template>

<script>
  export default {
    props: {
      qualifications: Array
    },
    data() {
      return {
        schoolImage: require('~/assets/images/uni.svg'),
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .container {
    width: 100%;
    color: $color-black;
    border: 1px solid $color-gray;
    background-color: $color-white;
    margin-top: $mg-top-bottom-15;
    border-radius: $br-5;
    padding: $padding-border-box-15;
  }

  .container p {
    line-height: 25px;
    margin-bottom: 3px;
  }

  h3 {
    color: $color-primary;
    border-bottom: 1px solid $color-border;
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-size: $fs-large-18;
    font-weight: $fw-base-500;
  }

  .container hr {
    margin: 10px 0 5px 0;
    opacity: 0.3;
  }

  img {
    height: 150px;
  }

</style>


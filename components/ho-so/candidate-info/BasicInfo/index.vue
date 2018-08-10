<template>
  <div class="container">
    <h3>Thông tin cơ bản</h3>

    <div>
      <strong>Nơi làm việc: </strong>
      <p v-for="address in workAddresses" :key="address">
        <nuxt-link to="/">{{address}}</nuxt-link>
      </p>
    </div>

    <div>
      <strong>Ngành nghề: </strong>
      <p v-for="profession in professions" :key="profession">
        <nuxt-link to="/">{{profession}}</nuxt-link>
      </p>
    </div>

    <div>
      <strong>Số năm kinh nghiệm: </strong>
      {{yearsOfExperience}} năm
    </div>

    <div>
      <strong>Loại hình công việc: </strong>
      <p v-for="jobType in jobTypes" :key="jobType">
        {{jobType}}
      </p>
    </div>

    <div>
      <strong>Cấp bậc mong muốn: </strong>
      {{position}}
    </div>

    <div>
      <strong>
        Mức lương mong muốn:
      </strong>{{salary}}
    </div>

    <div>
      <strong>Ngày cập nhật: </strong>
      {{updatedDate}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      workAddresses: Array,
      professions: Array,
      yearsOfExperience: String,
      jobTypes: Array,
      position: String,
      salary: String,
      updatedDate: String
    },
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
    margin: 10px 0 5px 0;
  }

  .container div {
    line-height: 25px;
    margin-bottom: 3px;
  }

  .container p {
    display: inline;
  }

  .container p > a {
    border: 1px solid $color-primary;
    margin-right: 5px;
    margin-bottom: 3px;
    border-radius: 3px;
    padding: 2px;
    background-color: $color-tags;
    display: inline-block;
  }

</style>

<style lang="">

</style>

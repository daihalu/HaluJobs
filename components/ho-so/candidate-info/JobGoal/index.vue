<template>
  <div class="container">
    <h3>Mục tiêu nghề nghiệp</h3>

    <h4>Mục tiêu: </h4>
    <p v-for="item in list" :key="item">
      - {{item}}
    </p>

    <hr>

    <h4>Mô tả thêm: </h4>
    <p v-for="desc in description" :key="desc">
      - {{desc}}
    </p>

  </div>
</template>

<script>
  export default {
    props: {
      list: Array,
      description: Array
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

  .container p {
    line-height: 25px;
    margin-bottom: 3px;
  }

  .container hr {
    margin: 10px 0 5px 0;
    opacity: 0.3;
  }
</style>


<template>
  <div class="box-container">
    <h3 class="box-title">Yêu cầu hồ sơ</h3>

    <div class="container">
      {{requirements.more}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      requirements: Object,
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

</style>

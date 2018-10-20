<template>
  <div class="container">
    <h2>Đăng nhập ứng viên</h2>
    <p>
      <font-awesome-icon :icon="['fas', 'check']"/>
      <span>Tiếp cận hàng triệu công việc hoàn toàn miễn phí</span>
    </p>

    <p>
      <font-awesome-icon :icon="['fas', 'check']"/>
      <span>Ứng tuyển nhanh chóng, dễ dàng</span>
    </p>

    <p>
      <font-awesome-icon :icon="['fas', 'check']"/>
      <span>Nhận bản tin công việc phù hợp định kỳ</span>
    </p>

    <p>
      <font-awesome-icon :icon="['fas', 'check']"/>
      <span>Nâng cao cơ hội tìm việc với chương trình ứng viên năng động</span>
    </p>
    <div class="header">
      <div class="cut-diamond"></div>
      <div class="cut-diamond"></div>
      <div class="cut-diamond"></div>
      <div class="cut-diamond"></div>
    </div>


  </div>
</template>

<script>
  export default {
    name: "IntroductionBox"
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .container {
    color: $color-white;
  }

  .header {
    display: flex;
    justify-content: space-between;
    width: 70%;
  }

  .cut-diamond {
    display: inline-block;
    border-style: solid;
    border-color: transparent transparent hsla(0,0%,100%,.5) transparent;
    border-width: 0 25px 25px 25px;
    height: 0;
    width: 100px;
    position: relative;
    margin: 20px 0 50px 0;
  }

  .cut-diamond:after {
    content: "";
    position: absolute;
    top: 25px;
    left: -25px;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: hsla(0,0%,100%,.27843) transparent transparent transparent;
    border-width: 70px 50px 0 50px;
  }

</style>

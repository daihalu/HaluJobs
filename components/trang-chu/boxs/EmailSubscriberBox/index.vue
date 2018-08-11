<template>
  <div class="box-container">
    <h4 class="box-title">
      <font-awesome-icon :icon="['far', 'envelope']"/>
      NHẬN BẢN TIN VIỆC LÀM
    </h4>
    <div class="content">
      <el-input
        type="email"
        v-model="emailSubscriber"
        auto-complete="off"
        placeHolder="Vui lòng nhập email"
        class="input"
      >
      </el-input>

      <el-button class="btn-subscriber" @click="handleOnClick">Gửi</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        emailSubscriber: '',
      }
    },
    methods: {
      handleOnClick() {

      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .content {
    padding: $padding-border-box-10;
    display: flex;
    justify-content: space-between;
  }

  .input {
    width: 73%;

  }

  .btn-subscriber {
    background-color: $color-primary;
    border: 1px solid $color-primary;
    color: $color-white;
    font-weight: $fw-base-500;
    width: 25%;
    font-size: $fs-base-16;

  }

  .btn-subscriber:hover {
    background-color: $color-white;
    box-shadow: 0 0 5px $color-secondary;
    color: $color-primary;
  }

  .btn-subscriber:active {
    box-shadow: 0 0 0 transparent;
    background-color: $color-primary;
    transition: none;
    color: $color-white;
  }

</style>


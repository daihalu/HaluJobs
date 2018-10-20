<template>
  <div class="box-container">
    <h4 class="box-title">
      <font-awesome-icon :icon="['far', 'envelope']"/>
      NHẬN BẢN TIN VIỆC LÀM
    </h4>
    <div>
      <el-form
        :model="subscribeForm"
        class="content"
      >
        <el-form-item class="el-col-17">
          <el-input
            v-model="subscribeForm.emailOrPhoneNumber"
            auto-complete="off"
            placeHolder="Nhập email hoặc số điện thoại"
            class="input"
          >
          </el-input>
        </el-form-item>

        <el-form-item class="el-col-6">
          <el-button
            class="btn-subscriber"
            @click="handleOnSubmitEmailSubscriberForm()"
          >
            Gửi
          </el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
  import {Vld} from '~/assets/js/functions';

  export default {
    data() {
      return {
        subscribeForm: {
          emailOrPhoneNumber: ''
        }
      }
    },
    methods: {
      handleOnSubmitEmailSubscriberForm() {
        if ((Vld.isEmail(this.subscribeForm.emailOrPhoneNumber) || Vld.isMobile(this.subscribeForm.emailOrPhoneNumber))
        ) {
          this.showSuccessAlert('Quý khách đăng ký nhận thông báo thành công!')
        } else {
          this.showErrorAlert('Vui lòng nhập lại email hoặc số điện thoại!');
          return false;
        }
      },

      showSuccessAlert(message) {
        this.$notify({
          title: 'Thông báo',
          message: message,
          type: 'success'
        });
      },

      showErrorAlert(message) {
        this.$notify({
          title: 'Thông báo',
          message: message,
          type: 'warning'
        });
      },
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
    width: 100%;
  }

  .btn-subscriber {
    background-color: $color-primary;
    border: 1px solid $color-primary;
    color: $color-white;
    font-weight: $fw-base-500;
    width: 100%;
    font-size: $fs-base-16;

  }

  .btn-subscriber:hover {
    background-color: $color-white;
    color: $color-primary;
  }

  .btn-subscriber:active {
    box-shadow: 0 0 0 transparent;
    background-color: $color-primary;
    transition: none;
    color: $color-white;
  }

  .el-form-item {
    margin-bottom: 0;
  }
</style>


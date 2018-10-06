<template>
  <div class="container">
    <div>Bằng việc đăng nhập bạn đã đồng ý với <nuxt-link to="thoa-thuan-su-dung" class="t-navy">Thỏa thuận sử dụng</nuxt-link> của HaluJobs</div>
    <div class="svo-sign-in mg-top-15">
      <el-button class="btn btn-halu">Đăng nhập qua SVOnline</el-button>
      <el-button class="btn btn-facebook mg-top-15">Đăng nhập qua Facebook</el-button>
    </div>

    <div class="text-or">
      Hoặc
    </div>

    <div v-if="!forgetPasswordDialogVisible">
      <el-form
        :model="signInInfo"
        :rules="rules"
        ref="signInInfo"
        label-width="120px"
        label-position="top"
        class="mg-top-15">

        <el-form-item prop="emailOrPhoneNumber">
          <div class="form-input">
            <font-awesome-icon :icon="['fas', 'phone-square']" class="icon"/>
            <el-input
              ref="emailOrPhoneNumberInput"
              v-model="signInInfo.emailOrPhoneNumber"
              auto-complete="off"
              prefix-icon="el-icon-dai"
              placeHolder="Nhập email hoặc số điện thoại"
            >
            </el-input>
          </div>
        </el-form-item>

        <el-form-item prop="password">
          <div class="form-input">
            <font-awesome-icon icon="lock" class="icon"/>
            <el-input
              type="password"
              v-model="signInInfo.password"
              auto-complete="off"
              prefix-icon="el-icon-dai"
              placeHolder="Nhập mật khẩu"
            >
            </el-input>
          </div>
        </el-form-item>

        <el-button
          class="button button--ujarak"
          @click="handleOnLogin('signInInfo')"
          :loading="isLoading"
        >
          Đăng nhập
        </el-button>

      </el-form>

      <div class="forgot-password mg-top-15">
        <span @click="handleOnOClickForgetPassword">Quên mật khẩu?</span>
      </div>
    </div>

    <div v-if="forgetPasswordDialogVisible">
      <p>
        Nhập số điện thoại hoặc email để nhận mật khẩu mới
      </p>
      <el-input
        ref="inputOfPasswordRecovery"
        v-model="inputOfPasswordRecoveryDialog"
        placeholder="Nhập email hoặc số điện thoại"
        autofocus="true"
        class="mg-top-15"
      ></el-input>
      <div class="mg-top-15">
        <el-button @click="handleOnBackToLogin">Quay lại</el-button>
        <el-button
          type="primary"
          @click="handleOnSubmitPasswordRecovery"
          :loading="isLoading"
        >
          Khôi phục mật khẩu
        </el-button>
      </div>
    </div>


    <div class="ta-center mg-top-25">
      <hr class="hr-1"/>
      <p class="mg-top-15">Bạn chưa có tài khoản?
        <span class="sign-up-text" @click="handleOnClickSignUpText">Đăng ký</span>
      </p>
    </div>
  </div>
</template>

<script>
  import {Vld} from '~/assets/js/functions';
  import {EventTypes} from '~/assets/js/event-types';

  export default {

    data() {
      return {
        signInInfo: {
          emailOrPhoneNumber: '',
          password: '',
        },
        inputOfPasswordRecoveryDialog: '',
        forgetPasswordDialogVisible: false,
        isLoading: false,
        isAnAccount: true,

        rules: {
          emailOrPhoneNumber: [
            {required: true, message: 'Vui lòng nhập email hoặc số điện thoại', trigger: 'blur'},
            {min: 10, message: 'Độ dài email hoặc số điện thoại phải có it nhất 10 ký tự ', trigger: 'blur'}
          ],
          password: [
            {required: true, message: 'Vui lòng nhập mật khẩu', trigger: 'blur'},
            {min: 6, message: 'Độ  dài mật khẩu phải có ít nhất 6 ký tự', trigger: 'blur'}
          ],
        }
      }
    },
    methods: {
      handleOnOClickForgetPassword() {
        this.forgetPasswordDialogVisible = true;
        setTimeout(() => {
          this.$refs.inputOfPasswordRecovery.focus();
        }, 100);
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

      handleOnSubmitPasswordRecovery() {
        if (Vld.isMobile(this.inputOfPasswordRecoveryDialog) || Vld.isEmail(this.inputOfPasswordRecoveryDialog)) {
          this.isLoading = true;
          setTimeout(() => {
            this.isLoading = false;
            if (this.isAnAccount) {
              this.showSuccessAlert(`Mật khẩu mới đã được gửi tới ${this.inputOfPasswordRecoveryDialog}.`);
            } else {
              this.showErrorAlert('Tài khoản không tồn tại trên hệ thống!');
            }
          }, 1000);
        } else {
          this.showErrorAlert('Vui lòng nhập email hoặc số điện thoại để nhận mật khẩu mới!');
        }
      },

      handleOnLogin(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid && (Vld.isEmail(this.signInInfo.emailOrPhoneNumber) || Vld.isMobile(this.signInInfo.emailOrPhoneNumber))) {
            this.isLoading = true;
            setTimeout(() => {
              this.isLoading = false;
              this.$router.push("/");
              this.$emit('on_submit_sign_in_form', this.signInInfo)
            }, 1000)
          } else {
            this.showErrorAlert('Thông tin tài khoản hoặc mật khẩu không chính xác!');
            return false;
          }
        });
      },

      handleOnClickSignUpText() {
        this.$emit('on_click_sign_up_text', "sign_up");
      },

      handleOnBackToLogin() {
        this.forgetPasswordDialogVisible = false;
        setTimeout(() => {
          this.$refs.emailOrPhoneNumberInput.focus();
        }, 100);
      }
    },
    created() {
      setTimeout(() => {
        this.$refs.emailOrPhoneNumberInput.focus();
      }, 100);
    }
  }

</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .container {
    transition: all 2s ease-in-out;

    h3 {
      color: #48576a;
      display: flex;
      align-items: center;
      margin-left: 5px;

      svg {
        margin-right: 5px;
      }
    }
  }

  .btn {
    color: $color-white;
    font-weight: 500;
    margin: 0 auto;
    width: 100%;
    border-radius: 2px;

    &:hover {
      cursor: pointer;
    }

    &:active {
      box-shadow: 0 0 0 transparent;
      transition: none;
    }
  }

  .btn-halu {
    background-color: $color-primary;
    border: transparent;
  }

  .btn-facebook {
    background-color: #3b5998;
    border: transparent;
    margin-left: 0 !important;
  }

  .svo-sign-in {
    text-align: center;
  }

  .text-or {
    display: flex;
    width: 100%;
    align-items: center;
    margin: 15px auto;

    &::after,
    &::before {
      content: "";
      background: gray;
      height: 1px;
      margin: .3em;
      flex: 1;
    }
  }

  .form-input {
    position: relative;
    .icon {
      display: inline-block;
      width: 17px;
      color: $color-icon;
      position: absolute;
      top: 10px;
      font-size: $fs-large-18;
      z-index: 3;
      left: 10px;
    }
  }

  .forgot-password {
    color: $color-primary;
    text-align: center;

    span {
      font-weight: 500;
      &:hover {
        color: $color-secondary;
        cursor: pointer;
      }

      &:active {
        color: $color-primary;
      }
    }
  }


  .sign-up-text {
    color: $color-primary;
    font-weight: 500;

    &:hover {
      color: $color-secondary;
      cursor: pointer;
    }
  }

  .ta-center {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .button {
    display: block;
    border-radius: 2px;
    margin-left: 0 !important;
    margin-top: 1em;
    width: 100%;
    border: none;
    color: #ffffff;
    vertical-align: middle;
    position: relative;
    z-index: 1;
    -webkit-backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
  }

  .button:focus {
    outline: none;
  }

  .button > span {
    vertical-align: middle;
  }

  /* Ujarak */
  .button--ujarak {
    -webkit-transition: border-color 0.4s, color 0.4s;
    transition: border-color 0.4s, color 0.4s;
    -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    background-color: #1ab394;
    border-radius: 2px;
  }

  .button--ujarak::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #009688;
    border-radius: 2px;
    z-index: -1;
    opacity: 0;
    -webkit-transform: scale3d(0.7, 1, 1);
    transform: scale3d(0.7, 1, 1);
    -webkit-transition: -webkit-transform 0.4s, opacity 0.4s;
    transition: transform 0.4s, opacity 0.4s;
    -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  }

  .button--ujarak:hover {
    color: #ffffff;
    border-color: #009688;
    border-radius: 2px;
  }

  .button--ujarak:hover::before {
    opacity: 1;
    border-radius: 2px;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  /*==============================================*/
</style>


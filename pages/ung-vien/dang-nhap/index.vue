<template>
  <div class="wrapper">
    <el-row :gutter="10" class="">
      <el-col :span="16">
        <div class="box-left">
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
        </div>
      </el-col>
      <el-col :span="8">
        <div class="box-right box-container">
          <h3>
            <font-awesome-icon icon="user-tie"/>
            Đăng nhập ứng viên
          </h3>
          <el-form :model="signInForm" :rules="rules" ref="signInForm" label-width="120px" label-position="top"
                   class="demo-dynamic">
            <div class="login-inputs">
              <el-form-item
                prop="phoneNumber"

              >
                <div class="form-input">
                  <font-awesome-icon :icon="['fas', 'phone']" class="icon"/>
                  <el-input
                    v-model="signInForm.phoneNumber"
                    auto-complete="off"
                    prefix-icon="el-icon-dai"
                    placeHolder="Vui lòng nhập số điện thoại"
                  >
                  </el-input>
                </div>
              </el-form-item>

              <el-form-item
                prop="password"
              >
                <div class="form-input">
                  <font-awesome-icon icon="lock" class="icon"/>
                  <el-input type="password" v-model="signInForm.password" auto-complete="off" prefix-icon="el-icon-dai"
                            placeHolder="Vui lòng nhập mật khẩu"></el-input>
                </div>
              </el-form-item>

              <div class="forgot-password">
                <span @click="handleOnOpenForgotPasswordDialog">Quên mật khẩu?</span>
              </div>
            </div>

            <el-button class="btn" @click="submitForm('signInForm')">Đăng nhập</el-button>

          </el-form>
          <div class="svo-sign-in">
            <div class="text-or">
              Hoặc
            </div>
            <div>
              <el-button class="btn">Đăng nhập qua SVOnline</el-button>
            </div>
            <div>
              <p>Bạn chưa có tài khoản
                <nuxt-link to="/ung-vien/dang-ky" class="sign-up">Đăng ký</nuxt-link>
              </p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-dialog title="Khôi phục mật khẩu" :visible.sync="dialogRecoveryPassword">
      <div>
        <h3>Nhập số điện thoại hoặc email để nhận mật khẩu mới.</h3>
        <el-input
          v-model="inputOfRecoveryPasswordDialog"
          placeholder="Vui lòng nhập số điện thoại hoặc email"
          autofocus="true"
          class="mg-top-15"
        >
        </el-input>
        <div v-if="showAlert" class="alert mg-top-15">Vui lòng nhập chính xác số điện thoại hoặc email</div>
        <div class="ta-center">
          <el-button
            @click="handleOnSubmitRecoveryPassword"
            :loading="isLoading"
            class="mg-top-15"
          >
            Khôi phục mật khẩu
          </el-button>
        </div>

      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {Vld} from '~/assets/js/functions';

  export default {
    head() {
      return {
        title: this.title
      };
    },
    layout: 'candidate',
    data() {
      return {
        title: 'Đăng nhập ứng viên',
        signInForm: {
          phoneNumber: '',
          password: '',
        },
        inputOfRecoveryPasswordDialog: '',
        showAlert: false,
        dialogRecoveryPassword: false,
        isLoading: false,
        isAnAccount: true,
        rules: {
          phoneNumber: [
            {required: true, message: 'Vui lòng nhập lại số điện thoại', trigger: 'blur'},
          ],
          password: [
            {required: true, min: 6, message: 'Độ  dài mật khẩu phải có ít nhất 6 ký tự', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      handleOnOpenForgotPasswordDialog() {
        this.dialogRecoveryPassword = true;
      },

      handleOnSubmitRecoveryPassword() {
        if (Vld.isMobile(this.inputOfRecoveryPasswordDialog) || Vld.isEmail(this.inputOfRecoveryPasswordDialog)) {
          this.showAlert = false;
          this.isLoading = true;
          setTimeout(() => {
            this.isLoading = false;
            if (this.isAnAccount) {
              this.success(`Mật khẩu mới đã được gửi tới ${this.inputOfRecoveryPasswordDialog}. Quý khách vui lòng kiểm tra.`);
              this.dialogRecoveryPassword = false;
              this.inputOfRecoveryPasswordDialog = '';
            } else {
              this.error('Tài khoản không tồn tại trên hệ thống!');
            }
          }, 2000);
        } else {
          this.showAlert = true;
        }
      },

      success(status) {
        this.$notify({
          title: 'Thông báo',
          message: status,
          type: 'success'
        });
      },

      error(status) {
        this.$notify({
          title: 'Thông báo',
          message: status,
          type: 'warning'
        });
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .wrapper {
    width: $page-width;
    margin: 0 auto !important;
  }

  .box-left {
    color: $color-white;
    margin-top: 20vh;
    h2 {
      font-size: 45px;
      font-weight: 500;
      line-height: 60px;
    }

    p {
      line-height: 40px;
      font-size: $fs-large-18;
      display: flex;
      align-items: center;

      svg {
        font-size: 25px;
        border: 1px solid $color-white;
        border-radius: 50%;
        padding: 5px;
        margin-right: 5px;
      }
    }
  }

  .box-right {
    padding: $padding-border-box-15;
    margin-top: 20vh;

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

  .login-inputs {
    margin: 10px auto;
    border: 1px solid $color-border;
    border-radius: 3px;
    background-color: $bc-border-box;
    padding: $padding-border-box-10;
  }

  .btn {
    background-color: $color-primary;
    border: 1px solid $color-primary;
    color: $color-white;
    font-weight: 600;
    margin: 5px 0;
    width: 100%;
    border-radius: 2px;

    &:hover {
      box-shadow: 0 0 3px $color-primary;
      background-color: #009688;
    }

    &:active {
      box-shadow: 0 0 0 transparent;
      background-color: $color-primary;
      transition: none;
    }
  }

  a:hover {
    cursor: pointer;
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
      height: 0.1em;
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
    text-align: right;

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

  .sign-up {
    color: $color-primary;
    font-weight: 500;

    &:hover {
      color: $color-secondary;
    }
  }
</style>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .alert {
    color: $color-pink;
  }

</style>

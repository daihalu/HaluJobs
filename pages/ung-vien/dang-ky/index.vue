<template>
  <div class="wrapper">
    <el-row :gutter="10" class="">
      <el-col :span="16">
        <introduction-box class="box-left"/>
      </el-col>
      <el-col :span="8">
        <div class="box-right box-container">
          <h3 class="ta-center">
            Đăng ký tài khoản cùng HaluJobs
          </h3>


          <div class="svo-sign-in mg-top-15">
            <el-button class="btn btn-halu">Đăng nhập qua SVOnline</el-button>
            <el-button class="btn btn-facebook mg-top-15">Đăng nhập qua Facebook</el-button>

            <div class="text-or">
              Hoặc
            </div>
          </div>

          <el-form
            :model="signUpInfo"
            :rules="rules" ref="signUpInfo"
            class="mg-top-15"
          >
            <el-form-item prop="emailOrPhoneNumber">
              <div class="form-input">
                <font-awesome-icon :icon="['fas', 'phone-square']" class="icon"/>
                <el-input
                  ref="emailOrPhoneNumberInput"
                  v-model="signUpInfo.emailOrPhoneNumber"
                  auto-complete="off"
                  prefix-icon="el-icon-halu"
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
                  v-model="signUpInfo.password"
                  auto-complete="off"
                  prefix-icon="el-icon-dai"
                  placeHolder="Nhập mật khẩu"
                >
                </el-input>
              </div>
            </el-form-item>

            <el-button
              class="button button--ujarak"
              @click="handleOnSubmitSignUpForm('signUpInfo')"
              :loading="isLoading"
            >
              Đăng ký
            </el-button>

          </el-form>

          <div class="mg-top-15" style="font-size: 14px;">Bằng việc đăng kí bạn đã đồng ý với
            <nuxt-link to="/thoa-thuan-su-dung" class="t-navy">Thỏa thuận sử dụng</nuxt-link>
            của HaluJobs
          </div>

          <hr class="hr-1 mg-bottom-10"/>

          <div class="ta-center mg-top-15">
            <p>Bạn đã có tài khoản?
              <span class="sign-up-text" @click="handleOnClickSignInText">Đăng nhập</span>
            </p>
          </div>

        </div>
      </el-col>
    </el-row>

    <el-dialog
      :visible.sync="userTypeDialogVisible"
      class="sign-up-dialog"
      :width="signInDialogWidth"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      :show-close="false"
      style="margin-top: 20vh"
    >
      <div class="user-type">
        <div class="title">Bạn là nhà tuyển dụng hay ứng viên?</div>
        <div class="container mg-top-15">
          <div
            class="small-box"
            :class="{active: signUpInfo.userType === 'employer'}"
            @click="handleOnClickEmployerBtn"
          >
            <font-awesome-icon :icon="['fas', 'user-tie']"/>
            <span>Nhà tuyển dụng</span>
          </div>

          <div
            class="small-box"
            :class="{active: signUpInfo.userType === 'candidate'}"
            @click="handleOnClickCandidateBtn"
          >
            <font-awesome-icon :icon="['fas', 'briefcase']"/>
            <span>Ứng viên</span>
          </div>
        </div>
      </div>

    </el-dialog>

    <el-dialog
      :visible.sync="signInDialogVisible"
      class="sign-up-dialog"
      :width="signInDialogWidth"
    >
      <div class="mg-top-10">Bằng việc đăng nhập bạn đã đồng ý với <nuxt-link to="thoa-thuan-su-dung" class="t-navy">Thỏa thuận sử dụng</nuxt-link> của HaluJobs</div>
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
            @click="handleOnSubmitSignInForm('signInInfo')"
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
    </el-dialog>
  </div>
</template>

<script>
  import IntroductionBox from '~/components/ung-vien/boxs/IntroductionBox';
  import SignInForm from '~/components/ung-vien/SignInForm';

  import {Vld} from '~/assets/js/functions';

  export default {
    head() {
      return {
        title: this.title
      };
    },

    components: {
      IntroductionBox,
      SignInForm
    },

    layout: 'candidate',
    data() {
      return {
        title: 'Đăng ký',
        signInInfo: {
          emailOrPhoneNumber: '',
          password: '',
        },
        signUpInfo: {
          userType: '',
          emailOrPhoneNumber: '',
          password: ''
        },
        forgetPasswordDialogVisible: false,
        isLoading: false,
        isAnAccount: true,
        userTypeDialogVisible: true,
        signInDialogVisible: false,
        signInDialogWidth: '440px',
        rules: {
          emailOrPhoneNumber: [
            {required: true, message: 'Vui lòng nhập email hoặc số điện thoại', trigger: 'blur'},
            {min: 10, message: 'Độ dài email hoặc số điện thoại phải có it nhất 10 ký tự ', trigger: 'blur'}
          ],
          password: [
            {required: true, message: 'Vui lòng nhập mật khẩu', trigger: 'blur'},
            {min: 6, message: 'Độ dài mật khẩu phải có ít nhất 6 ký tự', trigger: 'blur'}
          ],
        }
      }
    },
    methods: {
      handleOnClickSignInBtn(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid && (Vld.isEmail(this.signInInfo.emailOrPhoneNumber) || Vld.isMobile(this.signInInfo.emailOrPhoneNumber))) {
            // alert('submit!');
            this.isLoading = true;
            setTimeout(() => {
              this.isLoading = false;
              // this.$router.push("/");

            }, 1000)
          } else {
            this.showErrorAlert('Thông tin tài khoản hoặc mật khẩu không chính xác!');
            return false;
          }
        });
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

      handleOnClickEmployerBtn() {
        this.signUpInfo.userType = 'employer';
        this.userTypeDialogVisible = false;
      },

      handleOnClickCandidateBtn() {
        this.signUpInfo.userType = 'candidate';
        this.userTypeDialogVisible = false;
      },

      handleOnSubmitSignUpForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid && (Vld.isMobile(this.signUpInfo.emailOrPhoneNumber) || Vld.isEmail(this.signUpInfo.emailOrPhoneNumber))) {
            this.isLoading = true;
            setTimeout(() => {
              this.isLoading = false;
              this.showSuccessAlert("Đăng ký tài khoản thành công.");
              // this.$router.push("/");
            }, 1000);
          } else {
            if (!this.signUpInfo.password) {
              this.showErrorAlert("Vui lòng nhập email hoặc số điện thoại và mật khẩu.");
              return false;
            }
            this.showErrorAlert("Email hoặc số điện thoại không đúng định dạng. Vui lòng nhập lại.");
            return false;
          }
        });
      },


      handleOnSubmitSignInForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid && (Vld.isEmail(this.signInInfo.emailOrPhoneNumber) || Vld.isMobile(this.signInInfo.emailOrPhoneNumber))) {
            this.isLoading = true;
            setTimeout(() => {
              this.isLoading = false;
              this.$router.push("/");
            }, 1000)
          } else {
            this.showErrorAlert('Thông tin tài khoản hoặc mật khẩu không chính xác!');
            return false;
          }
        });
      },

      handleOnClickSignInText() {
        this.signInDialogVisible = true;
        this.forgetPasswordDialogVisible = false;
      },

      handleOnOClickForgetPassword() {
        this.forgetPasswordDialogVisible = true;
        setTimeout(() => {
          this.$refs.inputOfPasswordRecovery.focus();
        }, 100);
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


      handleOnBackToLogin() {
        this.forgetPasswordDialogVisible = false;
        setTimeout(() => {
          this.$refs.emailOrPhoneNumberInput.focus();
        }, 100);
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
    margin-top: 20vh;
  }

  .box-right {
    padding: $padding-border-box-15;
    margin-top: 20vh;

    h3 {
      color: #48576a;
      display: flex;
      align-items: center;
      justify-content: center;

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

  .password-recovery-dialog {
    width: 70%;
    margin: 0 auto;
  }

  .alert {
    color: $color-pink;
  }

  .sign-up-text {
    color: $color-primary;
    font-weight: 500;

    &:hover {
      color: $color-secondary;
      cursor: pointer;
    }
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
  }

  .button--ujarak::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #009688;
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

  .password-recovery-dialog {
    width: 70%;
    margin: 0 auto;
  }

  .alert {
    color: $color-pink;
  }

  .sign-up-dialog {

    margin: 0 auto;
    overflow: hidden;

    .sign-up-dialog--box-left {
      font-size: 18px;
      color: $color-black;
      h3 {
        font-weight: 500;
        margin-bottom: 30px;
        /*line-height: 60px;*/
      }

      p {
        line-height: 25px;
        font-size: $fs-base-16;
        display: flex;
        align-items: center;
        margin-top: 10px;

        svg {
          font-size: 20px;
          border: 1px solid $color-primary;
          color: $color-primary;
          border-radius: 50%;
          padding: 3px;
          margin-right: 5px;
        }
      }
    }
  }

  .user-type {
    text-align: center;
    .title {
      font-size: 20px;
    }

    .container {
      display: flex;
      justify-content: space-around;
      margin-bottom: 20px;

      .small-box {
        width: 170px;
        height: 110px;
        border: 2px solid $color-primary;
        padding: $padding-base-20;
        color: $color-primary;
        font-size: 17px;
        border-radius: 2px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        -webkit-transition: all 0.15s ease-in-out;
        transition: all 0.15s ease-in-out;

        &:hover {
          cursor: pointer;
          background-color: $color-primary;
          color: $color-white !important;
        }

        svg {
          display: inline-block;
          width: 40px;
          height: 40px;
          margin-bottom: 15px;
        }
      }

      .active {
        background-color: $color-primary;
        color: $color-white;
      }
    }
  }
</style>


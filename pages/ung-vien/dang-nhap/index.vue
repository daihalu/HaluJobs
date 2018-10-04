<template>
  <div class="wrapper">
    <el-row :gutter="10" class="">
      <el-col :span="16">
        <introduction-box class="box-left"/>
      </el-col>
      <el-col :span="8">
        <div class="box-right box-container">
          <h3 class="ta-center">
            Đăng nhập cùng HaluJobs
          </h3>

          <div class="svo-sign-in mg-top-15">

            <el-button class="btn btn-halu">Đăng nhập qua SVOnline</el-button>
            <el-button class="btn btn-facebook mg-top-15">Đăng nhập qua Facebook</el-button>


            <div class="text-or">
              Hoặc
            </div>

          </div>

          <el-form :model="signInInfo" :rules="rules" ref="signInInfo" label-width="120px" label-position="top"
                   class="mg-top-15">

            <el-form-item
              prop="phoneNumber"

            >
              <div class="form-input">
                <font-awesome-icon :icon="['fas', 'phone-square']" class="icon"/>
                <el-input
                  v-model="signInInfo.phoneNumber"
                  auto-complete="off"
                  autofocus="true"
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
                <el-input type="password" v-model="signInInfo.password" auto-complete="off" prefix-icon="el-icon-dai"
                          placeHolder="Vui lòng nhập mật khẩu"></el-input>
              </div>
            </el-form-item>

            <el-button
              @click="handleOnSignInBtn('signInInfo')"
              :loading="isLoading"
              class="button button--ujarak"
            >
              Đăng nhập
            </el-button>

          </el-form>

          <div class="forgot-password mg-top-15">
            <span @click="handleOnOpenPasswordRecoveryDialog">Quên mật khẩu?</span>
          </div>

          <div class="ta-center">
            <p>Bạn chưa có tài khoản?
              <span class="sign-up-text" @click="handleOnClickSignUpText">Đăng ký</span>
            </p>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-dialog
      title="Khôi phục mật khẩu"
      :visible.sync="passwordRecoveryDialog"
      class="password-recovery-dialog"
    >
      <div>
        <h3>Nhập số điện thoại hoặc email để nhận mật khẩu mới.</h3>
        <el-input
          v-model="inputOfPasswordRecoveryDialog"
          placeholder="Vui lòng nhập số điện thoại hoặc email"
          autofocus="true"
          class="mg-top-15"
        >
        </el-input>
        <div
          v-if="alertVisible"
          class="alert mg-top-15"
        >
          Vui lòng nhập chính xác số điện thoại hoặc email
        </div>
        <div>
          <el-button
            type="primary"
            @click="handleOnSubmitPasswordRecovery"
            :loading="isLoading"
            class="mg-top-15"
          >
            Khôi phục mật khẩu
          </el-button>
        </div>

      </div>
    </el-dialog>

    <el-dialog
      :visible.sync="signUpDialogVisible"
      class="sign-up-dialog"
      :width="signUpDialogWidth"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      :before-close="handleOnCloseSignUpDialog"
    >
      <el-carousel
        indicator-position="none"
        arrow="never"
        :autoplay="false"
        @change="handleOnChangeCarouselItem"
        ref="signUpCarousel"
        :height="signUpCarouselHeight"
        v-if="signUpDialogVisible"
      >

        <el-carousel-item>
          <div class="user-type" v-if="!signUpInfo.userType">
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
        </el-carousel-item>

        <el-carousel-item>
          <el-row :gutter="10">
            <el-col :span="12" class="sign-up-dialog--box-left">
              <h3>Đăng ký để kết nối ngay với hàng triệu nhà tuyển dụng hàng đầu và ứng viên chất lượng</h3>

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
            </el-col>
            <el-col :span="12">
              <div class="sign-up-dialog--box-left">
                <div>Bằng việc đăng kí bạn đã đồng ý với <nuxt-link to="/thoa-thuan-su-dung" class="t-navy">Thỏa thuận sử dụng</nuxt-link> của HaluJobs</div>
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
                  <el-form-item prop="phoneNumber">
                    <div class="form-input">
                      <font-awesome-icon :icon="['fas', 'phone-square']" class="icon"/>
                      <el-input
                        ref="phoneNumberInput"
                        v-model="signUpInfo.phoneNumber"
                        auto-complete="off"
                        prefix-icon="el-icon-halu"
                        placeHolder="Vui lòng nhập số điện thoại"
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
                        placeHolder="Vui lòng nhập mật khẩu"
                      >
                      </el-input>
                    </div>
                  </el-form-item>

                  <el-button
                    class="button button--ujarak"
                    @click="handleOnSubmitSignUpForm('signUpInfo')"
                  >
                    Đăng ký
                  </el-button>

                </el-form>
              </div>
            </el-col>
          </el-row>
          <hr class="hr-1 mg-top-15"/>
          <div class="ta-center mg-top-15">
            <p>Bạn đã có tài khoản?
              <span class="sign-up-text" @click="handleOnClickSignInText">Đăng nhập</span>
            </p>
          </div>
        </el-carousel-item>
      </el-carousel>
      <el-dialog
        width="30%"
        :visible.sync="innerCloseDialogVisible"
        append-to-body
        class="mg-top-15"
      >
        <div class="mg-bottom-15" style="font-size: 18px">Quý khách có chắc chắn là muốn huỷ đăng ký tài khoản?</div>
        <el-button @click="handleOnCancelingCloseSignUpDialog">Huỷ bỏ</el-button>
        <el-button type="primary" @click="handleOnAcceptingCloseSignUpDialog">Đồng ý</el-button>
      </el-dialog>
    </el-dialog>
  </div>
</template>

<script>
  import IntroductionBox from '~/components/ung-vien/boxs/IntroductionBox';

  import {Vld} from '~/assets/js/functions';

  export default {
    head() {
      return {
        title: this.title
      };
    },

    components: {
      IntroductionBox
    },

    layout: 'candidate',
    data() {
      return {
        title: 'Đăng nhập',
        signInInfo: {
          phoneNumber: '',
          password: '',
        },
        signUpInfo: {
          userType: '',
          phoneNumber: '',
          password: ''
        },
        inputOfPasswordRecoveryDialog: '',
        alertVisible: false,
        passwordRecoveryDialog: false,
        isLoading: false,
        isAnAccount: true,

        signUpDialogVisible: false,
        innerCloseDialogVisible: false,
        signUpDialogWidth: '450px',
        signUpCarouselHeight: '200px',
        rules: {
          password: [
            {required: true, message: 'Vui lòng nhập mật khẩu', trigger: 'blur'},
            {min: 6, message: 'Độ dài mật khẩu phải có ít nhất 6 ký tự', trigger: 'blur'},
          ],
          phoneNumber: [
            {required: true, message: 'Vui lòng nhập số điện thoại', trigger: 'blur'},
            {min: 10, message: 'Độ dài số điện thoại phải có ít nhất 10 số', trigger: 'blur'},
            {max: 11, message: 'Độ dài số điện thoại tối đa là 11 số', trigger: 'blur'}
          ],
        }
      }
    },
    methods: {
      handleOnOpenPasswordRecoveryDialog() {
        this.passwordRecoveryDialog = true;
      },

      handleOnSubmitPasswordRecovery() {
        if (Vld.isMobile(this.inputOfPasswordRecoveryDialog) || Vld.isEmail(this.inputOfPasswordRecoveryDialog)) {
          this.alertVisible = false;
          this.isLoading = true;
          setTimeout(() => {
            this.isLoading = false;
            if (this.isAnAccount) {
              this.showSuccessAlert(`Mật khẩu mới đã được gửi tới ${this.inputOfPasswordRecoveryDialog}. Quý khách vui lòng kiểm tra.`);
              this.passwordRecoveryDialog = false;
              this.inputOfPasswordRecoveryDialog = '';
            } else {
              this.showErrorAlert('Tài khoản không tồn tại trên hệ thống!');
            }
          }, 2000);
        } else {
          this.alertVisible = true;
        }
      },

      handleOnSignInBtn(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            this.isLoading = true;
            setTimeout(() => {
              this.isLoading = false;
              this.$router.push("/");

            }, 2000)
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

      handleOnClickSignUpText() {
        this.signUpDialogVisible = true;
        this.signUpCarouselHeight = '200px';
      },

      handleOnClickEmployerBtn() {
        this.signUpInfo.userType = 'employer';
        this.$refs.signUpCarousel.activeIndex = 1;
        this.signUpCarouselHeight = '440px';
        this.signUpDialogWidth = '750px'
      },

      handleOnClickCandidateBtn() {
        this.signUpInfo.userType = 'candidate';
        this.$refs.signUpCarousel.activeIndex = 1;
        this.signUpCarouselHeight = '440px';
        this.signUpDialogWidth = '750px'
      },

      handleOnCloseSignUpDialog() {
        this.innerCloseDialogVisible = true;
      },

      handleOnCancelingCloseSignUpDialog() {
        this.innerCloseDialogVisible = false;
      },

      handleOnAcceptingCloseSignUpDialog() {
        this.innerCloseDialogVisible = false;
        this.signUpDialogVisible = false;
        this.signUpInfo.userType = '';
        this.signUpCarouselHeight = '200px';
        this.signUpDialogWidth = '440px';
        this.signUpInfo.phoneNumber = '';
        this.signUpInfo.password = '';
      },

      handleOnSubmitSignUpForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid && Vld.isMobile(this.signUpInfo.phoneNumber)) {
            this.showSuccessAlert("Đăng ký tài khoản thành công");
            this.$router.push("/");
          } else {
            return false;
          }
        });
      },


      handleOnChangeCarouselItem(value) {
        if (value === 1) {
          //setTimeOut 200ms để tránh trùng event change của carousel vs focus của input
          setTimeout(() => {
            //this.$nextTick(() => {
            this.$refs.phoneNumberInput.focus();
            // })
          }, 200);
        }
      },

      handleOnClickSignInText() {
        this.signUpDialogVisible = false;
        this.signUpInfo.userType = '';
        //nếu set thuộc tính :visible.sync của carousel thì không cần set this.signUpDialog = false
        // this.signUpDialog = false;
        this.signUpCarouselHeight = '200px';
        this.signUpDialogWidth = '440px';
        this.signUpInfo.phoneNumber = '';
        this.signUpInfo.password = '';
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
    color: #fff;
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
    /*text-align: center;*/

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

  .title {
    font-size: 20px;
  }

  .fade-in-up-leave-active,
  .fade-in-up-enter-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0) !important;
  }

  .fade-in-up-enter,
  .fade-in-up-leave-to {
    transform: translateY(10px) !important;
    opacity: 0 !important;
  }

  .el-select {
    width: 100% !important;
  }

</style>


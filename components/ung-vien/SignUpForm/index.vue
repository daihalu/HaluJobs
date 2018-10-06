<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12" class="box-left">
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
        <div class="box-left">
          <div>Bằng việc đăng kí bạn đã đồng ý với <nuxt-link to="thoa-thuan-su-dung" class="t-navy">Thỏa thuận sử dụng</nuxt-link>  của HaluJobs</div>
          <div class="svo-sign-in mg-top-15">
            <el-button class="btn btn-halu">Đăng nhập qua SVOnline</el-button>
            <el-button class="btn btn-facebook mg-top-15">Đăng nhập qua Facebook</el-button>

            <div class="text-or">
              Hoặc
            </div>
          </div>

          <el-form
            :model="signUpInfo"
            :rules="rules"
            ref="signUpInfo"
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
                <font-awesome-icon :icon="['fas', 'lock']" class="icon"/>
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
        </div>
      </el-col>
    </el-row>
    <hr class="hr-1 mg-top-15"/>
    <div class="ta-center mg-top-15">
      <p>Bạn đã có tài khoản?
        <span class="sign-in-text" @click="handleOnClickSignInText">Đăng nhập</span>
      </p>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex';

  import {Vld} from '~/assets/js/functions';

  export default {
    data() {
      return {
        signUpInfo: {
          emailOrPhoneNumber: '',
          password: ''
        },
        signUpDialogWidth: '440px',
        signUpCarouselHeight: '200px',
        isLoading: false,

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
    computed: {
      ...mapGetters({
        activeMenuItem: 'navBarStatus',
        hasSignIn: 'hasSignIn'
      }),

      ...mapState('home_page', {
        hasDoneFetchingData: 'hasDoneFetchingData'
      })
    },
    methods: {
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

      handleOnSubmitSignUpForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid && (Vld.isMobile(this.signUpInfo.emailOrPhoneNumber) || Vld.isEmail(this.signUpInfo.emailOrPhoneNumber))) {
            this.isLoading = true;
            setTimeout(() => {
              this.isLoading = false;
              this.showSuccessAlert("Đăng ký tài khoản thành công.");
              // this.$router.push("/");
              this.$emit('on_submit_sign_up_form', this.signUpInfo);
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

      handleOnClickSignInText() {
        this.$emit('on_click_sign_in_text', "sign_in");
      },
    },

    created() {
      setTimeout(() => {
        this.$refs.emailOrPhoneNumberInput.focus();
      }, 200);

    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .box-left {
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

  .sign-in-text {
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
    width: 100%;
    border: none;
    color: #ffffff;
    vertical-align: middle;
    position: relative;
    z-index: 1;
    -webkit-backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;

    &:focus {
      outline: none;
    }
  }

  /* Ujarak */
  .button--ujarak {
    -webkit-transition: border-color 0.4s, color 0.4s;
    transition: border-color 0.4s, color 0.4s;
    -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    background-color: #1ab394;
    border-radius: 2px;

    &::before {
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

    &:hover {
      color: #fff;
      border-color: #009688;
      border-radius: 2px;

      &::before {
        opacity: 1;
        border-radius: 2px;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }
  }
</style>

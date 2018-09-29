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

          <div class="svo-sign-in mg-top-15">

            <el-button class="btn btn-halu">Đăng nhập qua SVOnline</el-button>
            <el-button class="btn btn-facebook mg-top-15">Đăng nhập qua Facebook</el-button>


            <div class="text-or">
              Hoặc
            </div>

          </div>

          <el-form :model="signInForm" :rules="rules" ref="signInForm" label-width="120px" label-position="top"
                   class="mg-top-15">

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

            <el-button
              class="btn btn-halu"
              @click="handleOnLogin('signInForm')"
              :loading="isLoading"
            >
              Đăng nhập
            </el-button>

          </el-form>

          <div class="forgot-password mg-top-15">
            <span @click="handleOnOpenPasswordRecoveryDialog">Quên mật khẩu?</span>
          </div>

          <div class="ta-center">
            <p>Bạn chưa có tài khoản
              <span class="sign-up-text" @click="signUpDialog = true">Đăng ký</span>
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
          v-if="showAlert"
          class="alert mg-top-15"
        >
          Vui lòng nhập chính xác số điện thoại hoặc email
        </div>
        <div class="ta-center">
          <el-button
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
      :visible.sync="signUpDialog"
      class="sign-up-dialog"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      @close="handleOnCloseSignUpDialog"
    >
      <div v-if="signUpDialogItemIndex === 1" class="user-type">
        <div class="title">Bạn là nhà tuyển dụng hay ứng viên?</div>
        <div class="container mg-top-15">
          <div
            class="small-box"
            :class="{active: userType === 'employer'}"
            @click="userType = 'employer'"
          >
            <font-awesome-icon :icon="['fas', 'user-tie']"/>
            <span>Nhà tuyển dụng</span>
          </div>
          <div
            class="small-box"
            :class="{active: userType === 'candidate'}"
            @click="userType = 'candidate'"
          >
            <font-awesome-icon :icon="['fas', 'briefcase']"/>
            <span>Ứng viên</span>
          </div>
        </div>
        <el-button
          class="mg-top-15"
          @click="handleOnClickContinueBtn"
          :disabled="!userType"
        >
          Tiếp tục
        </el-button>
      </div>

      <div v-else-if="signUpDialogItemIndex === 2">
        <div class="title">Đăng ký tài khoản {{userType === 'employer' ? 'Nhà tuyển dụng' : 'Ứng viên'}}</div>

        <div v-if="userType === 'employer'">
          <el-form
            :model="employerSignUpInfo"
            :rules="rules"
            ref="employerSignUpInfo"
            label-position="top"
          >

            <transition name="fade-in-up">
              <el-form-item
                prop="name"
                label="Nhập họ và tên"
                class="mg-top-15"
              >
                <el-input
                  v-model="employerSignUpInfo.name"
                  auto-complete="on"
                  autofocus="true"
                  placeholder="Nhập họ và tên..."
                ></el-input>
              </el-form-item>
            </transition>

            <transition name="fade-in-up">
              <el-form-item
                prop="phoneNumber"
                label="Nhập số điện thoại"
                v-if="hasChangeEmployerNameInput"
              >
                <el-input
                  v-model="employerSignUpInfo.phoneNumber"
                  auto-complete="on"
                  placeholder="Nhập số điện thoại..."
                >
                  <!--<template slot="prepend">-->
                  <!--<img :src="flagUrl" width="30px" height="20px"/>-->
                  <!--</template>-->
                </el-input>
              </el-form-item>
            </transition>

            <transition name="fade-in-up">
              <el-form-item
                prop="companyName"
                label="Nhập tên công ty"
                v-if="hasChangeCompanyPhoneNumberInput"
              >
                <el-input
                  v-model="employerSignUpInfo.companyName"
                  auto-complete="on"
                  placeholder="Nhập tên công ty..."
                ></el-input>
              </el-form-item>
            </transition>

            <transition name="fade-in-up">
              <el-form-item
                v-if="hasChangeCompanyNameInput"
              >
                <el-button
                  @click="handleOnSubmitSignUpForm"
                  class="mg-top-15 button button--wapasha done-btn"
                >
                  Tiếp tục
                </el-button>
              </el-form-item>
            </transition>

          </el-form>
        </div>
        
        <div v-if="userType === 'candidate'">
            <el-form
              :model="candidateSignUpInfo"
              :rules="rules"
              ref="candidateSignUpInfo"
              label-position="top"
            >
              <transition name="fade-in-up">
                <el-form-item
                  prop="name"
                  label="Nhập họ và tên"
                  class="mg-top-15"
                >
                  <el-input
                    v-model="candidateSignUpInfo.name"
                    auto-complete="on"
                    autofocus="true"
                    placeholder="Nhập họ và tên..."
                  ></el-input>
                </el-form-item>
              </transition>

              <transition name="fade-in-up">
                <el-form-item
                  prop="phoneNumber"
                  label="Nhập số điện thoại"
                  v-if="hasChangeCandidateNameInput"
                >
                  <el-input
                    v-model="candidateSignUpInfo.phoneNumber"
                    auto-complete="on"
                    placeholder="Nhập số điện thoại..."
                  ></el-input>
                </el-form-item>
              </transition>

              <transition name="fade-in-up">
                <el-form-item
                  prop="professions"
                  label="Chọn lĩnh vực muốn làm việc"
                  v-if="hasChangeCandidatePhoneNumberInput"
                >
                  <el-select v-model="candidateSignUpInfo.professions" placeholder="Chọn lĩnh vực muốn làm việc...">
                    <el-option
                      v-for="item in professionOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </transition>

              <transition name="fade-in-up">
                <el-form-item
                  v-if="hasChangeCandidateProfessionInput"
                >
                  <el-button
                    @click="handleOnSubmitSignUpForm"
                    class="mg-top-15 button button--wapasha done-btn"
                  >
                    Tiếp tục
                  </el-button>
                </el-form-item>
              </transition>
            </el-form>
        </div>
      </div>

      <div  v-else-if="signUpDialogItemIndex === 3">
        <div class="title">Xác nhận thông tin</div>
        <p>Thông tin {{userType === 'candidate' ? 'Ứng viên' : 'Nhà tuyển dụng'}}: </p>
        <p>Họ tên: {{userType === 'candidate' ? candidateSignUpInfo.name : employerSignUpInfo.name}}</p>
        <p>Số điện thoại: {{userType === 'candidate' ? candidateSignUpInfo.phoneNumber :
          employerSignUpInfo.phoneNumber}}</p>
        <p v-if="userType === 'employer'">Tên công ty: {{employerSignUpInfo.companyName}}</p>
        <p v-if="userType === 'candidate'">Lĩnh vực muốn làm việc: {{candidateSignUpInfo.professions}}</p>
        <p>Bạn có chắc chắn thông tin đã cung cấp là xác thực?</p>

        <div slot="footer" class="dialog-footer">
          <el-button @click="signUpDialogItemIndex = 2">Sửa lại</el-button>
          <el-button type="primary" @click="handleOnDoneSigningUp">Xác nhận</el-button>
        </div>
      </div>

      <div v-else-if="signUpDialogItemIndex === 4">
        <div class="title">Hoàn thành đăng ký</div>
        <p>Bộ phận chăm sóc khách hàng của HaluJobs sẽ liên hệ với quý khách trong vòng 5 phút!</p>
        <div slot="footer" class="dialog-footer">
          <nuxt-link to="/" style="color: #ffffff">
            <el-button @click="doneRegisterDialogVisible = false" type="primary">
              Đi đến trang chủ
            </el-button>
          </nuxt-link>
        </div>
      </div>
    </el-dialog>


  </div>
</template>

<script>
  import {Vld} from '~/assets/js/functions';
  import {JobOption} from '~/assets/js/data-options';

  export default {
    head() {
      return {
        title: this.title
      };
    },
    layout: 'candidate',
    data() {
      const {
        jobs
      } = JobOption;
      return {
        title: 'Đăng nhập ứng viên',
        signInForm: {
          phoneNumber: '',
          password: '',
        },
        userType: '',
        employerSignUpInfo: {
          name: '',
          phoneNumber: '',
          companyName: ''
        },
        candidateSignUpInfo: {
          name: '',
          phoneNumber: '',
          professions: ''
        },
        inputOfPasswordRecoveryDialog: '',
        showAlert: false,
        passwordRecoveryDialog: false,
        isLoading: false,
        isAnAccount: true,

        signUpDialog: true,
        signUpDialogItemIndex: 1,

        hasChangeCompanyPhoneNumberInput: false,
        hasChangeEmployerNameInput: false,
        hasChangeCompanyNameInput: false,
        hasChangeCandidatePhoneNumberInput: false,
        hasChangeCandidateNameInput: false,
        hasChangeCandidateProfessionInput: false,
        doneRegisterDialogVisible: false,
        professionOptions: jobs,

        rules: {
          password: [
            {required: true, min: 6, message: 'Độ  dài mật khẩu phải có ít nhất 6 ký tự', trigger: 'blur'}
          ],
          name: [
            {required: true, message: 'Vui lòng nhập họ và tên', trigger: 'blur'},
            {required: true, min: 5, message: 'Độ dài tên phải có ít nhất 5 ký tự', trigger: 'blur'}
          ],
          phoneNumber: [
            {required: true, message: 'Vui lòng nhập số điện thoại', trigger: 'blur, change'},
            {min: 10, message: 'Độ dài số điện thoại phải có ít nhất 10 số', trigger: 'blur'},
            {max: 11, message: 'Độ dài số điện thoại tối đa là 11 số', trigger: 'blur'}
          ],
          professions: [
            {required: true, message: 'Vui lòng chọn lĩnh vực bạn muốn làm việc', trigger: 'blur'},
          ],
          companyName: [
            {required: true, message: 'Vui lòng nhập tên công ty', trigger: 'blur'},
            {required: true, min: 5, message: 'Độ dài tên công ty phải có ít nhất 5 ký tự', trigger: 'blur'}
          ],
        }
      }
    },
    watch: {
      employerSignUpInfo: {
        handler(newValue, oldValue) {

          if (newValue.name.length >= 10) {
            this.hasChangeEmployerNameInput = true;
          }

          if (newValue.phoneNumber.length >= 10) {
            this.hasChangeCompanyPhoneNumberInput = true;
          }

          if (newValue.companyName.length >= 5) {
            this.hasChangeCompanyNameInput = true;
          }
        },
        deep: true
      },
      candidateSignUpInfo: {
        handler(newValue, oldValue) {
          if (newValue.name.length >= 10) {
            this.hasChangeCandidateNameInput = true;
          }

          if (newValue.phoneNumber.length >= 10) {
            this.hasChangeCandidatePhoneNumberInput = true;
          }

          if (newValue.professions) {
            this.hasChangeCandidateProfessionInput = true;
          }
        },
        deep: true
      },
    },
    methods: {
      handleOnOpenPasswordRecoveryDialog() {
        this.passwordRecoveryDialog = true;
      },

      handleOnSubmitPasswordRecovery() {
        if (Vld.isMobile(this.inputOfPasswordRecoveryDialog) || Vld.isEmail(this.inputOfPasswordRecoveryDialog)) {
          this.showAlert = false;
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
          this.showAlert = true;
        }
      },

      handleOnLogin(formName) {
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

      showSuccessAlert(status) {
        this.$notify({
          title: 'Thông báo',
          message: status,
          type: 'success'
        });
      },

      showErrorAlert(status) {
        this.$notify({
          title: 'Thông báo',
          message: status,
          type: 'warning'
        });
      },

      handleOnClickContinueBtn() {
        this.signUpDialogItemIndex++;
      },

      handleOnCloseSignUpDialog() {
        this.userType = '';
        this.signUpDialogItemIndex = 1;
      },

      handleOnConfirmInfo() {
        console.log(this.doneRegisterDialogVisible);
        this.confirmInfoDialogVisible = false;
        this.doneRegisterDialogVisible = true;
        console.log(this.doneRegisterDialogVisible);
      },

      handleOnSubmitSignUpForm() {
        this.signUpDialogItemIndex++;
        console.log(this.employerSignUpInfo);
      },

      handleOnDoneSigningUp() {
        this.signUpDialogItemIndex++;
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

  .password-recovery-dialog {
    width: 70%;
    margin: 0 auto;
  }

  .alert {
    color: $color-pink;
  }

  .sign-up-dialog {
    width: 60%;
    margin: 0 auto;
    
  }

  .user-type {
    /*text-align: center;*/

    .container {
      display: flex;
      justify-content: space-around;

      .small-box {
        width: 160px;
        height: 110px;
        border: 1px solid $color-primary;
        padding: $padding-base-20;
        color: $color-primary;
        font-size: 16px;
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
          box-shadow: 0 0 10px $color-primary;
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


</style>

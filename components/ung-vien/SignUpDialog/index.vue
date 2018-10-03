<template>
 
    <el-dialog
      :visible.sync="signUpDialog"
      class="sign-up-dialog"
      :width="signUpDialogWidth"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      :before-close="handleOnCloseSignUpDialog"
    >
      <el-carousel
        indicator-position="none"
        arrow="never" :autoplay="false"
        @change="handleOnChangeCarouselItem"
        ref="signUpCarousel"
        :height="signUpCarouselHeight"
      >

        <el-carousel-item>
          <div class="user-type">
            <div class="title">Bạn là nhà tuyển dụng hay ứng viên?</div>
            <div class="container mg-top-15">
              <div
                class="small-box"
                :class="{active: userType === 'employer'}"
                @click="handleOnClickEmployerBtn"
              >
                <font-awesome-icon :icon="['fas', 'user-tie']"/>
                <span>Nhà tuyển dụng</span>
              </div>

              <div
                class="small-box"
                :class="{active: userType === 'candidate'}"
                @click="handleOnClickCandidateBtn"
              >
                <font-awesome-icon :icon="['fas', 'briefcase']"/>
                <span>Ứng viên</span>
              </div>
            </div>

          </div>
        </el-carousel-item>

        <el-carousel-item>
          <div v-if="showSignUpForm">
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
                  <div>Bằng việc đăng kí bạn đã đồng ý với Thỏa thuận sử dụng của HaluJobs</div>
                  <div class="svo-sign-in mg-top-15">
                    <el-button class="btn btn-halu">Đăng nhập qua SVOnline</el-button>
                    <el-button class="btn btn-facebook mg-top-15">Đăng nhập qua Facebook</el-button>

                    <div class="text-or">
                      Hoặc
                    </div>
                  </div>

                  <el-form
                    v-if="userType === 'employer'"
                    :model="employerSignUpInfo"
                    :rules="rules" ref="signInForm"
                    class="mg-top-15"
                  >
                    <el-form-item prop="phoneNumber">
                      <div class="form-input">
                        <font-awesome-icon :icon="['fas', 'phone-square']" class="icon"/>
                        <el-input
                          v-model="employerSignUpInfo.phoneNumber"
                          auto-complete="off"
                          prefix-icon="el-icon-dai"
                          placeHolder="Vui lòng nhập số điện thoại"
                        >
                        </el-input>
                      </div>
                    </el-form-item>

                    <el-form-item prop="password">
                      <div class="form-input">
                        <font-awesome-icon icon="lock" class="icon"/>
                        <el-input type="password" v-model="employerSignUpInfo.password" auto-complete="off"
                                  prefix-icon="el-icon-dai"
                                  placeHolder="Vui lòng nhập mật khẩu"></el-input>
                      </div>
                    </el-form-item>

                    <el-button class="button button--ujarak button--border-thin button--text-thick">Đăng ký</el-button>

                  </el-form>

                  <el-form
                    v-if="userType === 'candidate'"
                    :model="candidateSignUpInfo"
                    :rules="rules" ref="signInForm"
                    class="mg-top-15"
                  >
                    <el-form-item prop="phoneNumber">
                      <div class="form-input">
                        <font-awesome-icon :icon="['fas', 'phone-square']" class="icon"/>
                        <el-input
                          v-model="candidateSignUpInfo.phoneNumber"
                          auto-complete="off"
                          prefix-icon="el-icon-dai"
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
                          v-model="candidateSignUpInfo.password"
                          auto-complete="off"
                          prefix-icon="el-icon-dai"
                          placeHolder="Vui lòng nhập mật khẩu"
                        >
                        </el-input>
                      </div>
                    </el-form-item>

                    <el-button class="button button--ujarak button--border-thin button--text-thick">Đăng ký</el-button>

                  </el-form>
                </div>
              </el-col>
            </el-row>
            <hr class="hr-1 mg-top-15"/>
            <div class="ta-center mg-top-15">
              <p>Bạn đã có tài khoản?
                <span class="sign-up-text" @click="handleOnClickSignIn">Đăng nhập</span>
              </p>
            </div>
          </div>

          
          
          <sign-in-dialog v-if="showSignInForm" @on_change_form_status="handleOnChangeDialogStatus"/>
        </el-carousel-item>

        <!--<el-carousel-item>-->
        <!--<div v-if="userType === 'employer'">-->
        <!--<div class="title">Đăng ký tài khoản Nhà tuyển dụng</div>-->
        <!--<el-form-->
        <!--:model="employerSignUpInfo"-->
        <!--:rules="rules"-->
        <!--ref="employerSignUpInfo"-->
        <!--label-position="top"-->
        <!--&gt;-->

        <!--<transition name="fade-in-up">-->
        <!--<el-row :gutter="10">-->
        <!--<el-col :span="12">-->
        <!--<el-form-item-->
        <!--prop="firstName"-->
        <!--label="Nhập họ: "-->
        <!--class="mg-top-15"-->
        <!--&gt;-->
        <!--<el-input-->
        <!--v-model="employerSignUpInfo.firstName"-->
        <!--auto-complete="on"-->
        <!--ref="employerFirstName"-->
        <!--&gt;</el-input>-->
        <!--</el-form-item>-->
        <!--</el-col>-->
        <!--<el-col :span="12">-->
        <!--<el-form-item-->
        <!--prop="lastName"-->
        <!--label="Nhập tên:"-->
        <!--class="mg-top-15"-->
        <!--&gt;-->
        <!--<el-input-->
        <!--v-model="employerSignUpInfo.lastName"-->
        <!--auto-complete="on"-->
        <!--&gt;</el-input>-->
        <!--</el-form-item>-->
        <!--</el-col>-->
        <!--</el-row>-->
        <!--</transition>-->

        <!--<transition name="fade-in-up">-->
        <!--<el-form-item-->
        <!--prop="phoneNumber"-->
        <!--label="Nhập số điện thoại"-->
        <!--v-if="hasChangedEmployerNameInput"-->
        <!--&gt;-->
        <!--<el-input-->
        <!--v-model="employerSignUpInfo.phoneNumber"-->
        <!--auto-complete="on"-->
        <!--&gt;-->
        <!--&lt;!&ndash;<template slot="prepend">&ndash;&gt;-->
        <!--&lt;!&ndash;<img :src="flagUrl" width="30px" height="20px"/>&ndash;&gt;-->
        <!--&lt;!&ndash;</template>&ndash;&gt;-->
        <!--</el-input>-->
        <!--</el-form-item>-->
        <!--</transition>-->

        <!--<transition name="fade-in-up">-->
        <!--<el-form-item-->
        <!--prop="companyName"-->
        <!--label="Nhập tên công ty"-->
        <!--v-if="hasChangedCompanyPhoneNumberInput"-->
        <!--&gt;-->
        <!--<el-input-->
        <!--v-model="employerSignUpInfo.companyName"-->
        <!--auto-complete="on"-->
        <!--&gt;</el-input>-->
        <!--</el-form-item>-->
        <!--</transition>-->

        <!--<transition name="fade-in-up">-->
        <!--<el-form-item-->
        <!--v-if="hasChangedCompanyNameInput"-->
        <!--&gt;-->
        <!--<el-button-->
        <!--type="primary"-->
        <!--@click="handleOnSubmitEmployerSignUpForm('employerSignUpInfo')"-->
        <!--class=""-->
        <!--&gt;-->
        <!--Tiếp tục-->
        <!--</el-button>-->
        <!--</el-form-item>-->
        <!--</transition>-->

        <!--</el-form>-->
        <!--</div>-->

        <!--<div v-if="userType === 'candidate'">-->
        <!--<div class="title">Đăng ký tài khoản Ứng viên</div>-->
        <!--<el-form-->
        <!--:model="candidateSignUpInfo"-->
        <!--:rules="rules"-->
        <!--ref="candidateSignUpInfo"-->
        <!--label-position="top"-->
        <!--&gt;-->
        <!--<transition name="fade-in-up">-->
        <!--<el-row :gutter="10">-->
        <!--<el-col :span="12">-->
        <!--<el-form-item-->
        <!--prop="firstName"-->
        <!--label="Nhập họ: "-->
        <!--class="mg-top-15"-->
        <!--&gt;-->
        <!--<el-input-->
        <!--v-model="candidateSignUpInfo.firstName"-->
        <!--auto-complete="on"-->
        <!--ref="candidateFirstName"-->
        <!--&gt;</el-input>-->
        <!--</el-form-item>-->
        <!--</el-col>-->
        <!--<el-col :span="12">-->
        <!--<el-form-item-->
        <!--prop="lastName"-->
        <!--label="Nhập tên:"-->
        <!--class="mg-top-15"-->
        <!--&gt;-->
        <!--<el-input-->
        <!--v-model="candidateSignUpInfo.lastName"-->
        <!--auto-complete="on"-->
        <!--&gt;</el-input>-->
        <!--</el-form-item>-->
        <!--</el-col>-->
        <!--</el-row>-->
        <!--</transition>-->

        <!--<transition name="fade-in-up">-->
        <!--<el-form-item-->
        <!--prop="phoneNumber"-->
        <!--label="Nhập số điện thoại"-->
        <!--v-if="hasChangedCandidateNameInput"-->
        <!--&gt;-->
        <!--<el-input-->
        <!--v-model="candidateSignUpInfo.phoneNumber"-->
        <!--auto-complete="on"-->
        <!--&gt;</el-input>-->
        <!--</el-form-item>-->
        <!--</transition>-->

        <!--<transition name="fade-in-up">-->

        <!--<el-row :gutter="10" v-if="hasChangedCandidatePhoneNumberInput">-->
        <!--<el-col :span="12">-->
        <!--<el-form-item-->
        <!--prop="professions"-->
        <!--label="Chọn lĩnh vực muốn làm việc"-->
        <!--&gt;-->
        <!--<el-select-->
        <!--v-model="candidateSignUpInfo.professions"-->
        <!--placeholder="Chọn lĩnh vực"-->
        <!--&gt;-->
        <!--<el-option-->
        <!--v-for="item in professionOptions"-->
        <!--:key="item.value"-->
        <!--:label="item.label"-->
        <!--:value="item.value">-->
        <!--</el-option>-->
        <!--</el-select>-->
        <!--</el-form-item>-->
        <!--</el-col>-->
        <!--<el-col :span="12">-->
        <!--<el-form-item-->
        <!--prop="professions"-->
        <!--label="Chọn địa điểm muốn làm việc"-->
        <!--&gt;-->
        <!--<el-select-->
        <!--v-model="candidateSignUpInfo.workAddress"-->
        <!--placeholder="Chọn địa điểm"-->
        <!--&gt;-->
        <!--<el-option-->
        <!--v-for="item in workAddressOptions"-->
        <!--:key="item.value"-->
        <!--:label="item.label"-->
        <!--:value="item.value"-->
        <!--&gt;-->
        <!--</el-option>-->
        <!--</el-select>-->
        <!--</el-form-item>-->
        <!--</el-col>-->
        <!--</el-row>-->


        <!--</transition>-->

        <!--<transition name="fade-in-up">-->
        <!--<el-form-item-->
        <!--v-if="hasSelectedCandidateWorkAddressInput"-->
        <!--&gt;-->
        <!--<el-button-->
        <!--type="primary"-->
        <!--@click="handleOnSubmitCandidateSignUpForm('candidateSignUpInfo')"-->
        <!--class=""-->
        <!--&gt;-->
        <!--Tiếp tục-->
        <!--</el-button>-->
        <!--</el-form-item>-->
        <!--</transition>-->
        <!--</el-form>-->
        <!--</div>-->
        <!--</el-carousel-item>-->

        <!--<el-carousel-item>-->
        <!--<div>-->
        <!--<div class="title">Xác nhận thông tin</div>-->
        <!--<p>Thông tin {{userType === 'candidate' ? 'Ứng viên' : 'Nhà tuyển dụng'}}: </p>-->
        <!--<p>-->
        <!--Họ tên:-->
        <!--{{userType === 'candidate'-->
        <!--? candidateSignUpInfo.firstName + ' ' + candidateSignUpInfo.lastName-->
        <!--: employerSignUpInfo.firstName + ' ' + employerSignUpInfo.lastName }}-->
        <!--</p>-->
        <!--<p>-->
        <!--Số điện thoại:-->
        <!--{{userType === 'candidate'-->
        <!--? candidateSignUpInfo.phoneNumber-->
        <!--: employerSignUpInfo.phoneNumber}}-->
        <!--</p>-->
        <!--<p v-if="userType === 'employer'">Tên công ty: {{employerSignUpInfo.companyName}}</p>-->
        <!--<div v-if="userType === 'candidate'">-->
        <!--<p>Lĩnh vực muốn làm việc: {{candidateSignUpInfo.professions}}</p>-->
        <!--<p>Địa điểm muốn làm việc: {{candidateSignUpInfo.workAddress}}</p>-->
        <!--</div>-->

        <!--<p>Bạn có chắc chắn thông tin đã cung cấp là xác thực?</p>-->

        <!--<div slot="footer" class="dialog-footer">-->
        <!--<el-button @click="handleOnBackForward">Sửa lại</el-button>-->
        <!--<el-button type="primary" @click="handleOnDoneSigningUp">Xác nhận</el-button>-->
        <!--</div>-->
        <!--</div>-->
        <!--</el-carousel-item>-->

        <!--<el-carousel-item>-->
        <!--<div>-->
        <!--<div class="title">Hoàn thành đăng ký</div>-->
        <!--<p>Bộ phận chăm sóc khách hàng của HaluJobs sẽ liên hệ với quý khách trong vòng 5 phút!</p>-->
        <!--<div slot="footer" class="dialog-footer">-->
        <!--<nuxt-link to="/" style="color: #ffffff">-->
        <!--<el-button @click="doneRegisterDialogVisible = false" type="primary">-->
        <!--Đi đến trang chủ-->
        <!--</el-button>-->
        <!--</nuxt-link>-->
        <!--</div>-->
        <!--</div>-->
        <!--</el-carousel-item>-->
      </el-carousel>
    </el-dialog>
  
</template>

<script>
  import SignInDialog from '~/components/ung-vien/SignInDialog';
  
  import {Vld} from '~/assets/js/functions';
  import {JobOption} from '~/assets/js/data-options';

  export default {
    components: {
      SignInDialog  
    },
    
    head() {
      return {
        title: this.title
      };
    },
    layout: 'candidate',
    data() {
      const {
        jobs,
        workAddresses
      } = JobOption;
      return {
        title: 'Đăng nhập ứng viên',
        signInForm: {
          phoneNumber: '',
          password: '',
        },
        userType: '',
        employerSignUpInfo: {
          firstName: '',
          lastName: '',
          phoneNumber: '',
          companyName: '',
          password: ''
        },
        candidateSignUpInfo: {
          firstName: '',
          lastName: '',
          phoneNumber: '',
          professions: '',
          workAddress: '',
          password: ''
        },
        inputOfPasswordRecoveryDialog: '',
        showAlert: false,
        passwordRecoveryDialog: false,
        isLoading: false,
        isAnAccount: true,

        showSignInForm: false,
        showSignUpForm: true,
        
        signUpDialog: true,
        signUpDialogWidth: '450px',
        signUpCarouselHeight: '200px',

        hasChangedCompanyPhoneNumberInput: false,
        hasChangedEmployerNameInput: false,
        hasChangedCompanyNameInput: false,
        hasChangedCandidatePhoneNumberInput: false,
        hasChangedCandidateNameInput: false,
        hasSelectedCandidateWorkAddressInput: false,
        doneRegisterDialogVisible: false,
        hasCarouselChange: false,

        professionOptions: jobs,
        workAddressOptions: workAddresses,

        rules: {
          password: [
            {required: true, min: 6, message: 'Độ  dài mật khẩu phải có ít nhất 6 ký tự', trigger: 'blur'}
          ],
          firstName: [
            {required: true, message: 'Vui lòng nhập họ của bạn', trigger: 'blur'},
          ],
          lastName: [
            {required: true, message: 'Vui lòng nhập tên của bạn', trigger: 'blur'},
          ],
          phoneNumber: [
            {required: true, message: 'Vui lòng nhập số điện thoại', trigger: 'blur'},
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

          if (newValue.lastName) {
            this.signUpCarouselHeight = '230px';
            this.hasChangedEmployerNameInput = true;
          }

          if (newValue.phoneNumber.length >= 10) {
            this.signUpCarouselHeight = '300px';
            this.hasChangedCompanyPhoneNumberInput = true;
          }

          if (newValue.companyName.length >= 5) {
            this.signUpCarouselHeight = '360px';
            this.hasChangedCompanyNameInput = true;
          }
        },
        deep: true
      },
      candidateSignUpInfo: {
        handler(newValue, oldValue) {
          if (newValue.lastName) {
            this.signUpCarouselHeight = '230px';
            this.hasChangedCandidateNameInput = true;
          }

          if (newValue.phoneNumber.length >= 10) {
            this.signUpCarouselHeight = '300px';
            this.hasChangedCandidatePhoneNumberInput = true;
          }

          if (newValue.workAddress) {
            this.signUpCarouselHeight = '360px';
            this.hasSelectedCandidateWorkAddressInput = true;
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

      handleOnClickSignUp() {
        this.signUpDialog = true;
        // this.signUpCarouselHeight = '200px';
      },

      handleOnClickEmployerBtn() {
        this.userType = 'employer';
        this.$refs.signUpCarousel.activeIndex = 1;
        // this.signUpCarouselHeight = '150px';
        this.signUpCarouselHeight = '450px';
        this.signUpDialogWidth = '750px'
      },

      handleOnClickCandidateBtn() {
        this.userType = 'candidate';
        this.$refs.signUpCarousel.activeIndex = 1;
        this.signUpCarouselHeight = '450px';
        this.signUpDialogWidth = '750px'
      },

      handleOnCloseSignUpDialog(done) {
        this.$confirm('Bạn có chắc là muốn huỷ đăng ký tài khoản?')
          .then(_ => {
            done();
            this.$refs.signUpCarousel.activeIndex = 0;
            this.userType = '';
            //nếu set thuộc tính :visible.sync của carousel thì không cần set this.signUpDialog = false
            // this.signUpDialog = false;
            this.signUpCarouselHeight = '200px';

            //reset employer sign up info
            let employerSignUpInfoKeys = Object.getOwnPropertyNames(this.employerSignUpInfo); //take keys of object
            for (let i = 0; i < employerSignUpInfoKeys.length; i++) {
              this.employerSignUpInfo[employerSignUpInfoKeys[i]] = '';
            }
            this.hasChangedEmployerNameInput = false;
            this.hasChangedCompanyPhoneNumberInput = false;
            this.hasChangedCompanyNameInput = false;

            //reset candidate sign up info
            let candidateSignUpInfoKeys = Object.getOwnPropertyNames(this.candidateSignUpInfo); //take keys of object
            for (let i = 0; i < candidateSignUpInfoKeys.length; i++) {
              this.candidateSignUpInfo[candidateSignUpInfoKeys[i]] = '';
            }
            this.hasChangedCandidateNameInput = false;
            this.hasChangedCandidatePhoneNumberInput = false;
            this.hasSelectedCandidateWorkAddressInput = false;
          })
          .catch(_ => {
          });
      },

      handleOnConfirmInfo() {
        console.log(this.doneRegisterDialogVisible);
        this.confirmInfoDialogVisible = false;
        this.doneRegisterDialogVisible = true;
        console.log(this.doneRegisterDialogVisible);
      },

      handleOnSubmitEmployerSignUpForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (
            valid
            && Vld.isName(this.employerSignUpInfo.firstName)
            && Vld.isName(this.employerSignUpInfo.lastName)
            && Vld.isName(this.employerSignUpInfo.companyName)
            && Vld.isMobile(this.employerSignUpInfo.phoneNumber)
          ) {
            this.$refs.signUpCarousel.activeIndex = 2;
          } else {
            if (!Vld.isName(this.employerSignUpInfo.firstName)) {
              setTimeout(() => {
                this.showErrorAlert('Vui lòng nhập lại họ của bạn!');
              }, 200);
            }

            if (!Vld.isName(this.employerSignUpInfo.lastName)) {
              setTimeout(() => {
                this.showErrorAlert('Vui lòng nhập lại tên của bạn!');
              }, 300);

            }

            if (!Vld.isMobile(this.employerSignUpInfo.phoneNumber)) {
              setTimeout(() => {
                this.showErrorAlert('Vui lòng nhập lại số điện thoại của bạn!');
              }, 400);

            }

            if (!Vld.isName(this.employerSignUpInfo.companyName)) {
              setTimeout(() => {
                this.showErrorAlert('Vui lòng nhập lại tên công ty!');
              }, 500);
            }
            return false;
          }
        });
      },

      handleOnSubmitCandidateSignUpForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (
            valid
            && Vld.isName(this.candidateSignUpInfo.firstName)
            && Vld.isName(this.candidateSignUpInfo.lastName)
            && Vld.isName(this.candidateSignUpInfo.companyName)
            && Vld.isMobile(this.candidateSignUpInfo.phoneNumber)
          ) {
            this.$refs.signUpCarousel.activeIndex = 2;
          } else {
            if (!Vld.isName(this.candidateSignUpInfo.firstName)) {
              setTimeout(() => {
                this.showErrorAlert('Vui lòng nhập lại họ của bạn!');
              }, 200);
            }

            if (!Vld.isName(this.candidateSignUpInfo.lastName)) {
              setTimeout(() => {
                this.showErrorAlert('Vui lòng nhập lại tên của bạn!');
              }, 300);

            }

            if (!Vld.isMobile(this.candidateSignUpInfo.phoneNumber)) {
              setTimeout(() => {
                this.showErrorAlert('Vui lòng nhập lại số điện thoại của bạn!');
              }, 400);

            }
            return false;
          }
        });
      },

      handleOnDoneSigningUp() {
        this.$refs.signUpCarousel.activeIndex = 3;
      },

      handleOnBackForward() {
        this.$refs.signUpCarousel.activeIndex = 1;
      },

      handleOnChangeCarouselItem(value) {
        if (value === 1) {
          //setTimeOut 200ms để tránh trùng event change của carousel vs focus của input
          setTimeout(() => {
            //this.$nextTick(() => {
            if (this.userType === 'employer') {
              this.$refs.employerFirstName.focus();
            } else {
              this.$refs.candidateFirstName.focus();
            }
            // })
          }, 200);
        }
      },

      handleOnClickSignIn() {
        this.showSignInForm = true;
        this.showSignUpForm = false;
        this.signUpDialogWidth = '450px';
        this.signUpCarouselHeight = '450px';
      },

      handleOnChangeDialogStatus() {
        this.$refs.signUpCarousel.activeIndex = 1;
        this.showSignUpForm = true;
        this.showSignInForm = false;
        this.signUpDialogWidth = "750px";
        this.signUpCarouselHeight = '450px';
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
    color: $color-black;
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

  .el-select {
    width: 100% !important;
  }

</style>

<style lang="scss">
  .el-form-item.is-required {
    .el-form-item__label {
      font-size: 15px;
      padding-bottom: 5px !important;
      &:before {
        display: none !important;
      }
    }
  }
</style>

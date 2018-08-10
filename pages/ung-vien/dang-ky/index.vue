<template>
  <div class="sign-up-container">
    <el-row :gutter="10">
      <el-col :span="10">
        <div class="box-left">
          <h2>Đăng ký ứng viên</h2>
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
      <el-col :span="14">
        <div class="sign-up-form">
          <h3 class="sign-up-form__title">
            <font-awesome-icon icon="user-tie"/>
            Đăng ký tài khoản ứng viên
          </h3>

          <el-form :model="signUpForm" :rules="rules" ref="signUpForm" label-width="120px" class="demo-dynamic"
                   label-position="top">
            <el-tabs v-model="activeTab" @tab-click="handleClick">
              <el-tab-pane label="Tài khoản" name="account">

                <div class="account-info">

                  <el-form-item
                    prop="name"
                    label="Nhập họ và tên">
                    <div class="form-input">
                      <font-awesome-icon icon="user-tie" class="icon"/>
                      <el-input v-model="signUpForm.contact" auto-complete="off" suffix-icon="el-icon-dai"
                                placeHolder="Vui lòng nhập họ tên"></el-input>
                    </div>
                  </el-form-item>

                  <el-row :gutter="10">
                    <el-col :span="12">
                      <el-form-item
                        prop="email"
                        label="Nhập email">
                        <div class="form-input">
                          <font-awesome-icon :icon="['far', 'envelope']" class="icon"/>
                          <el-input type="email" v-model="signUpForm.email" auto-complete="off"
                                    suffix-icon="el-icon-dai"
                                    placeHolder="Vui lòng nhập email"></el-input>
                        </div>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item
                        prop="phoneNumber"
                        label="Nhập số điện thoại">
                        <div class="form-input">
                          <font-awesome-icon icon="phone" class="icon"/>
                          <el-input v-model.number="signUpForm.phoneNumber" auto-complete="off"
                                    suffix-icon="el-icon-dai"
                                    placeHolder="Vui lòng nhập số điện thoại"></el-input>
                        </div>
                      </el-form-item>
                    </el-col>
                  </el-row>

                  <el-row :gutter="10">
                    <el-col :span="12">
                      <el-form-item
                        prop="password"
                        label="Nhập mật khẩu">
                        <div class="form-input">
                          <font-awesome-icon icon="lock" class="icon"/>
                          <el-input type="password" v-model="signUpForm.password" auto-complete="off"
                                    suffix-icon="el-icon-dai"
                                    placeHolder="Vui lòng nhập mật khẩu"></el-input>
                        </div>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item
                        prop="checkPassword"
                        label="Nhập lại mật khẩu">
                        <div class="form-input">
                          <font-awesome-icon icon="lock" class="icon"/>
                          <el-input type="password" v-model="signUpForm.checkPassword" auto-complete="off"
                                    suffix-icon="el-icon-dai"
                                    placeHolder="Vui lòng nhập lại mật khẩu"></el-input>
                        </div>
                      </el-form-item>
                    </el-col>
                  </el-row>

                  <el-form-item
                    prop="hasCheckedRules">
                    <el-checkbox label="" name="hasCheckedRules" v-model="signUpForm.hasCheckedRules">
                      <span>Đồng ý với các <nuxt-link to="/quy-dinh-bao-mat">Quy định bảo mật</nuxt-link> & <nuxt-link
                        to="/thoa-thuan-su-dung">Thỏa thuận sử dụng </nuxt-link>của Halujob</span>
                    </el-checkbox>
                  </el-form-item>
                </div>
                <el-button type="primary" @click="submitForm('signUpForm')" class="btn btn-sign-up">Đăng ký
                </el-button>
                <div class="sign-in-now">
                  <p>Bạn đã có tài khoản?
                    <nuxt-link to="/ung-vien/dang-nhap">Đăng nhập ngay</nuxt-link>
                  </p>
                </div>
              </el-tab-pane>

              <el-tab-pane label="Thông tin cá nhân" name="personalInfo">
                <div class="account-info">

                  <el-row :gutter="10">
                    <el-col :span="12">
                      <el-form-item
                        label="Giới tính"
                        prop="gender"
                      >
                        <el-select v-model="signUpForm.gender" placeholder="Chọn giới tính">
                          <el-option
                            v-for="item in genderOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item
                        label="Ngày sinh"
                        prop="dateOfBirth">
                        <el-date-picker
                          v-model="signUpForm.dateOfBirth"
                          type="date"
                          placeholder="Ngày sinh"
                          format="dd/MM/yyyy"
                        >
                        </el-date-picker>
                      </el-form-item>
                    </el-col>
                  </el-row>

                  <el-row :gutter="10">
                    <el-col :span="12">
                      <el-form-item
                        prop="address"
                        label="Địa chỉ">
                        <div class="form-input">
                          <el-input
                            v-model="signUpForm.address"
                            auto-complete="off"
                            placeHolder="Vui lòng nhập địa chỉ">
                          </el-input>
                        </div>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item
                        label="Tình trạng hôn nhân"
                        prop="marriageStatus"
                      >
                        <el-select v-model="signUpForm.marriageStatus" placeholder="Tình trạng hôn nhân">
                          <el-option
                            v-for="item in marriageStatusOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                  </el-row>

                </div>

                <div class="sign-up-form-continue">
                  <el-button type="primary" @click="submitForm('signUpForm')" class="btn btn-continue">Tiếp tục
                  </el-button>
                  <p>
                    <nuxt-link to="/">Để sau</nuxt-link>
                  </p>
                </div>
              </el-tab-pane>

              <el-tab-pane label="Công việc mong muốn" name="desiredJob">
                <div class="account-info">

                  <el-row :gutter="10">
                    <el-col :span="12">
                      <el-form-item
                        label="Bạn mong muốn làm việc ở đâu?"
                        prop="workAddresses"
                      >
                        <el-select v-model="signUpForm.workAddresses" multiple
                                   placeholder="Vui lòng chọn tối đa 3 địa điểm">
                          <el-option
                            v-for="item in workAddressOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item
                        label="Bạn mong muốn làm việc trong lĩnh vực nào?"
                        prop="jobTypes"
                      >
                        <el-select v-model="signUpForm.jobTypes" multiple placeholder="Vui lòng chọn tối đa 3 lĩnh vực">
                          <el-option
                            v-for="item in jobOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                  </el-row>

                  <el-row :gutter="10">
                    <el-col :span="12">
                      <el-form-item
                        label="Cấp bậc mong muốn"
                        prop="jobTitle"
                      >
                        <el-select v-model="signUpForm.jobTitle" placeholder="Chọn cấp bậc mong muốn">
                          <el-option
                            v-for="item in jobTitleOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item
                        label="Mức lương mong muốn"
                        prop="desiredSalary"
                      >
                        <el-select v-model="signUpForm.salary" placeholder="Chọn mức lương mong muốn">
                          <el-option
                            v-for="item in desiredSalaryOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                  </el-row>

                  <el-form-item
                    label="Loại hình công việc bạn muốn tham gia?"
                    prop="professions"
                  >
                    <el-select v-model="signUpForm.professions" placeholder="Chọn loại hình công việc bạn muốn">
                      <el-option
                        v-for="item in jobTypeOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>

                  <el-form-item
                    label="Mục tiêu nghề nghiệp"
                    prop="jobGoals"
                  >
                    <el-checkbox-group v-model="signUpForm.jobGoals">
                      <el-row :gutter="10">
                        <el-col :span="12">
                          <el-checkbox label="Mong muốn tìm được chỗ làm ổn định lâu dài"></el-checkbox>
                          <el-checkbox label="Mong muốn tìm được chỗ làm có cơ hội thăng tiến tốt"></el-checkbox>
                        </el-col>
                        <el-col :span="12">
                          <el-checkbox label="Mong muốn tìm được chỗ làm có mức lương tốt"></el-checkbox>
                          <el-checkbox label="Mong muốn tìm được nơi có cơ hội thăng tiến tốt"></el-checkbox>
                        </el-col>
                      </el-row>


                    </el-checkbox-group>
                  </el-form-item>
                </div>

                <div class="sign-up-form-continue">
                  <el-button type="primary" @click="submitForm('signUpForm')" class="btn btn-continue">Tiếp tục
                  </el-button>
                  <p>
                    <nuxt-link to="/">Để sau</nuxt-link>
                  </p>
                </div>
              </el-tab-pane>
            </el-tabs>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {JobOption} from '~/assets/js/data-options';

  export default {
    head() {
      return {
        title: this.title
      };
    },
    layout: 'candidate',
    data() {


      const validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Vui lòng nhập mật khẩu của bạn'));
        } else {
          if (this.signUpForm.checkPassword !== '') {
            this.$refs.signUpForm.validateField('checkPassword');
          }
          callback();
        }
      };
      const validateCheckPassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Vui lòng nhập lại mật khẩu của bạn'));
        } else if (value !== this.signUpForm.password) {
          callback(new Error('Mật khẩu nhập lại không khớp'));
        } else {
          callback();
        }
      };
      const {
        jobTitles,
        jobs,
        workAddresses,
        jobTypes,
        desiredSalaries,
        genders,
        marriageStatuses
      } = JobOption;

      return {
        title: 'Đăng ký ứng viên',
        signUpForm: {
          email: '',
          password: '',
          checkPassword: '',
          contact: '',
          phoneNumber: '',
          hasCheckedRules: '',
          address: '',
          gender: '',
          marriageStatus: '',
          dateOfBirth: '',
          workAddresses: [],
          professions: [],
          jobTypes: '',
          jobTitle: '',
          salary: '',
          jobGoals: [],
        },
        activeTab: 'account',
        rules: {
          email: [
            {required: true, message: 'Vui lòng nhập email', trigger: 'blur'},
            {type: 'email', message: 'Email không đúng định dạng', trigger: ['blur', 'change']}
          ],
          password: [
            {required: true, validator: validatePassword, trigger: 'blur'},
            {min: 6, message: 'Độ  dài mật khẩu phải có ít nhất 6 ký tự', trigger: 'blur'}
          ],
          checkPassword: [
            {required: true, validator: validateCheckPassword, trigger: 'blur'}
          ],
          contact: [
            {required: true, message: 'Vui lòng nhập họ tên người liên hệ', trigger: 'blur'},
            {min: 1, message: 'Độ dài tên phải có ít nhất 1 ký tự', trigger: 'blur'}
          ],
          phoneNumber: [
            {
              required: true, message: 'Vui lòng nhập số điện thoại', trigger: 'blur'
            }
          ],
          hasCheckedRules: [
            {
              required: true,
              message: 'Vui lòng chọn đồng ý với các quy định bảo mật & thỏa thuận sử dụng của Halujob',
              trigger: 'change'
            }
          ],
          address: [
            {required: true, message: 'Vui lòng nhập địa chỉ', trigger: 'blur'}
          ],
          gender: [
            {required: true, message: 'Vui lòng chọn giới tính', trigger: 'blur'}
          ],
          marriageStatus: [
            {required: true, message: 'Vui lòng chọn tình trạng quan hệ hôn nhân', trigger: 'blur'}
          ],
          dateOfBirth: [
            {required: true, message: 'Vui lòng chọn ngày sinh', trigger: 'blur'}
          ],
          workAddresses: [
            {required: true, message: 'Vui lòng chọn địa điểm bạn muốn làm việc', trigger: 'blur'},
          ],
          professions: [
            {required: true, message: 'Vui lòng chọn lĩnh vực bạn muốn làm việc', trigger: 'blur'},
          ],
          jobTypes: [
            {required: true, message: 'Vui lòng chọn loại hình công việc', trigger: 'blur'}
          ],
          jobTitle: [
            {required: true, message: 'Vui lòng chọn cấp bậc mong muốn', trigger: 'blur'}
          ],
          salary: [
            {required: true, message: 'Vui lòng chọn mức lương mong muốn', trigger: 'blur'}
          ],
          jobGoals: [
            {required: true, message: 'Vui lòng mục tiêu nghề nghiệp', trigger: 'blur'}
          ],
        },
        workAddressOptions: workAddresses,
        marriageStatusOptions: marriageStatuses,
        genderOptions: genders,
        jobOptions: jobs,
        jobTypeOptions: jobTypes,
        jobTitleOptions: jobTitles,
        desiredSalaryOptions: desiredSalaries,
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
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs-variables";

  .sign-up-container {
    width: $page-width;
    margin: 15vh auto !important;
  }

  .sign-up-form {
    border: 1px solid $color-border;
    border-radius: $br-5;
    background-color: $color-white;
    padding: $padding-border-box-15;
  }

  .account-info {
    margin-bottom: 5px;
    border: 1px solid $color-border;
    border-radius: $br-3;
    background-color: $bc-border-box;
    padding: $padding-border-box-10;
  }

  .sign-up-form p {
    margin: 10px 0;
  }

  .account-info h4 {
    margin-bottom: 10px;
  }

  .el-select, .el-date-editor {
    width: 100%;
  }

  .sign-up-form-continue {
    text-align: center;
  }

  .sign-up-form-continue p:hover {
    cursor: pointer;
  }

  .btn {
    background-color: $color-primary;
    color: $color-white;
    font-weight: $fw-big-700;
    margin: 5px 0;
    width: 100%;
  }

  .btn-sign-up {
    background-color: $color-pink;
    font-size: $fs-large-18;
  }

  .btn-sign-up:hover {
    box-shadow: 0 0 5px $color-pink;
    opacity: 0.8;
  }

  .btn-sign-up:active {
    box-shadow: 0 0 0 transparent;
    opacity: 1;
    transition: none;
  }

  .btn-continue {
    background-color: $color-primary;
    font-size: $fs-large-18;
  }

  .btn-continue:hover {
    background-color: $color-secondary;
    box-shadow: 0 0 5px $color-secondary;
  }

  .btn-continue:active {
    box-shadow: 0 0 0 transparent;
    background-color: $color-primary;
    transition: none;
  }

  .form-input {
    position: relative;
  }

  .icon {
    position: absolute;
    color: $color-icon;
    top: 10px;
    font-size: $fs-large-18;
    z-index: 3;
    right: 10px;
  }

  .job-goal-1 {
    margin-left: 30px;
  }

  .sign-in-now p span {
    color: $color-primary;
    font-weight: $fw-base-500;
  }

  .sign-in-now p span:hover {
    cursor: pointer;
    color: $color-secondary;
  }

  .sign-in-now p span:active {
    cursor: pointer;
    color: $color-primary;
  }

  .box-left {
    color: $color-white;
    margin-top: 10vh;
  }

  .box-left h2 {
    font-size: 45px;
    font-weight: 500;
    line-height: 60px;
  }

  .box-left p {
    line-height: 40px;
    font-size: $fs-large-18;
    display: flex;
    align-items: center;
  }

  .box-left p svg {
    font-size: 25px;
    border: 1px solid $color-white;
    border-radius: 50%;
    padding: 5px;
    margin-right: 5px;
  }

  .el-form-item {
    margin-bottom: 15px !important;
  }

  .el-checkbox + .el-checkbox {
    margin-left: 0 !important;
  }

</style>

<style lang="scss">
  @import "~assets/css/halujobs-variables";

  .el-col-12 .el-checkbox__label {
    font-size: 12px !important;
    font-weight: $fw-base-500 !important;
  }
</style>




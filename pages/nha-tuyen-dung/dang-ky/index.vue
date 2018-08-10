<template>
  <div class="sign-up-container">
    <el-row :gutter="10">
      <el-col :span="12">
        <p>Col 1</p>
      </el-col>
      <el-col :span="12">
        <div class="sign-up-form">
          <h3 class="sign-up-form__title">
            <font-awesome-icon icon="user-tie"/>
            Đăng ký tài khoản nhà tuyển dụng
          </h3>

          <el-form :model="signUpForm" :rules="rules" ref="signUpForm" label-width="120px" class="demo-dynamic" label-position="top">
            <div class="account-info">
              <!--<h4>Tài khoản</h4>-->

              <el-form-item
                prop="email"
                label="Email">
                <div class="form-input">
                  <font-awesome-icon :icon="['far', 'envelope']" class="icon"/>
                  <el-input type="email" v-model="signUpForm.email" auto-complete="off" suffix-icon="el-icon-dai"
                            placeHolder="Vui lòng nhập email"></el-input>
                </div>
              </el-form-item>

              <el-form-item
                prop="password"
                label="Mật khẩu">
                <div class="form-input">
                  <font-awesome-icon icon="lock" class="icon"/>
                  <el-input type="password" v-model="signUpForm.password" auto-complete="off" suffix-icon="el-icon-dai"
                            placeHolder="Vui lòng nhập mật khẩu"></el-input>
                </div>
              </el-form-item>
            </div>

            <div class="company-info">
              <!--<h4>Thông tin công ty</h4>-->
              <el-form-item
                prop="name"
                label="Họ và tên">
                <div class="form-input">
                  <font-awesome-icon icon="user-tie" class="icon"/>
                  <el-input v-model="signUpForm.contact" auto-complete="off" suffix-icon="el-icon-dai"
                            placeHolder="Vui lòng nhập họ tên"></el-input>
                </div>
              </el-form-item>

              <el-row :gutter="10">
                <el-col :span="12">
                  <el-form-item
                    prop="phoneNumber"
                    label="Số điện thoại">
                    <div class="form-input">
                      <font-awesome-icon icon="phone" class="icon"/>
                      <el-input v-model="signUpForm.phoneNumber" auto-complete="off" suffix-icon="el-icon-dai"
                                placeHolder="Vui lòng nhập số điện thoại"></el-input>
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item
                    prop="companyName"
                    label="Tên công ty">
                    <div class="form-input">
                      <font-awesome-icon :icon="['far', 'building']" class="icon"/>
                      <el-input v-model="signUpForm.companyName" auto-complete="off" suffix-icon="el-icon-dai"
                                placeHolder="Vui lòng nhập tên công ty"></el-input>
                    </div>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row :gutter="10">
                <el-col :span="12">
                  <el-form-item
                    prop="companyAddress"
                    label="Địa chỉ công ty">
                    <div class="form-input">
                      <font-awesome-icon icon="map-marker-alt" class="icon"/>
                      <el-input v-model="signUpForm.companyAddress" auto-complete="off" suffix-icon="el-icon-dai"
                                placeHolder="Vui lòng nhập địa chỉ công ty"></el-input>
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item
                    label="Tỉnh/thành phố"
                    prop="city"
                  >
                    <el-select v-model="signUpForm.city" placeholder="Vui lòng chọn tỉnh/thành phố">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-form-item
                prop="hasCheckedRule">
                <el-checkbox label="" name="hasCheckedRule" v-model="signUpForm.hasCheckedRule">
                  <span>Đồng ý với các <nuxt-link to="/quy-dinh-bao-mat">Quy định bảo mật</nuxt-link> & <nuxt-link to="/thoa-thuan-su-dung">Thỏa thuận sử dụng </nuxt-link>của Halujob</span>
                </el-checkbox>
              </el-form-item>
            </div>
            <el-button type="primary" @click="submitForm('signUpForm')">Đăng ký nhà tuyển dụng</el-button>
            <div>
              <p>Bạn đã có tài khoản? <nuxt-link to="/nha-tuyen-dung/dang-nhap">Đăng nhập ngay</nuxt-link></p>
            </div>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  import {JobOption} from '~/assets/js/data-options';
  import io from 'socket.io-client';

  export default {
    head() {
      return {
        title: this.title
      };
    },
    layout: 'employer',
    data() {
      const {
        workAddresses
      } = JobOption;
      return {
        title: 'Đăng ký nhà tuyển dụng',
        signUpForm: {
          email: '',
          password: '',
          contact: '',
          phoneNumber: '',
          companyName: '',
          companyAddress: '',
          city: '',
          hasCheckedRule: ''
        },
        rules: {
          email: [
            {required: true, message: 'Vui lòng nhập email', trigger: 'blur'},
            {type: 'email', message: 'Email không đúng định dạng', trigger: ['blur', 'change']}
          ],
          password: [
            {required: true, message: 'Vui lòng nhập mật khẩu', trigger: 'blur'},
            {min: 6, message: 'Độ  dài mật khẩu phải có ít nhất 6 ký tự', trigger: 'blur'}
          ],
          contact: [
            {required: true, message: 'Vui lòng nhập họ tên người liên hệ', trigger: 'blur'},
            {min: 1, message: 'Độ dài tên phải có ít nhất 1 ký tự', trigger: 'blur'}
          ],
          phoneNumber: [
            {required: true, message: 'Vui lòng nhập số điện thoại', trigger: 'blur'}
          ],
          companyName: [
            {required: true, message: 'Vui lòng nhập tên công ty', trigger: 'blur'}
          ],
          companyAddress: [
            {required: true, message: 'Vui lòng nhập địa chỉ công ty', trigger: 'blur'}
          ],
          hasCheckedRule: [
            { required: true, message: 'Vui lòng chọn đồng ý với các quy định bảo mật & thỏa thuận sử dụng của Halujob', trigger: 'blur' }
          ],
          city: [
            {required: true, message: 'Vui lòng chọn tỉnh/thành phố', trigger: 'blur'}
          ],
        },
        options: workAddresses,
        socket : io('http://192.168.1.109:3003')
      }
    },
    methods: {
      _listen: function () {
        // const socket = io.connect('http://192.168.1.109:3003');
        const Channel = {
          EventRep: (data) => {
            console.log(data);
          }
        };
        this.socket.on('Response/SignUpResponse', (resData) => {
          console.log(resData);
        })
      },
      submitForm(formName) {

        this.$refs[formName].validate((valid) => {
          if (valid && this.signUpForm.hasCheckedRule) {
            alert('submit!');
            console.log(this.signUpForm);
            this.socket.emit('Request/SignUpAsEmployer', this.signUpForm);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
    beforeMount: function () {
      this._listen();
    },
  }

</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs-variables";

  .sign-up-container {
    width: $page-width;
    margin: 10vh auto !important;
  }

</style>

<style lang="scss" scoped>
  @import "~assets/css/halujobs-variables";

  .sign-up-form {
    border: 1px solid $color-border;
    border-radius: $br-5;
    background-color: $color-white;
    padding: $padding-border-box-15;
  }

  .account-info, .company-info {
    margin: 10px auto;
    border: 1px solid $color-border;
    border-radius: $br-3;
    background-color: $bc-border-box;
    padding: $padding-border-box-10;
  }

  .sign-up-form__title {

  }

  .sign-up-form p {
    margin-top: 10px;
  }

  .company-info h4, .account-info h4 {
    margin-bottom: 10px;
  }

  .el-select {
    width: 100%;
  }

  .el-button {
    background-color: $color-primary;
    color: $color-white;
    font-weight: $fw-big-700;
    width: 100%;
  }

  .el-button:hover {
    background-color: $color-secondary;
    box-shadow: 0 0 5px $color-secondary;
  }

  .el-button:active {
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

  .el-form-item {
    margin-bottom: 15px !important;
  }

</style>

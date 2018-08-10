<template>
  <div class="sign-in-form">
    <h3>
      <font-awesome-icon icon="user-tie"/>
      {{ formTitle }}
    </h3>
    <el-form :model="signInForm" :rules="rules" ref="signInForm" label-width="120px" label-position="top" class="demo-dynamic">
      <div class="account-info">
        <el-form-item
          prop="email"
          label="Nhập email">
          <div class="form-input">
            <font-awesome-icon :icon="['far', 'envelope']" class="icon"/>
            <el-input type="email" v-model="signInForm.email" auto-complete="off" prefix-icon="el-icon-dai"
                      placeHolder="Vui lòng nhập email"></el-input>
          </div>
        </el-form-item>

        <el-form-item
          prop="password"
          label="Nhập mật khẩu">
          <div class="form-input">
            <font-awesome-icon icon="lock" class="icon"/>
            <el-input type="password" v-model="signInForm.password" auto-complete="off" prefix-icon="el-icon-dai"
                      placeHolder="Vui lòng nhập mật khẩu"></el-input>
          </div>
        </el-form-item>
      </div>
      <div>
        <el-button type="primary" @click="submitForm('signInForm')">Đăng nhập</el-button>
      </div>
      <el-row v-if="userType === 'employer'" class="forgot-pass">
        <el-col :span="12"><nuxt-link to="/quen-mat-khau">Quên mật khẩu?</nuxt-link></el-col>
        <el-col :span="12" class="sign-up-navigation"><nuxt-link to="/nha-tuyen-dung/dang-ky">Đăng ký</nuxt-link></el-col>
      </el-row>
      <div v-if="userType === 'candidate'" class="svo-sign-in">
        <div class="text-or">
          <hr>
          <p>Hoặc</p>

        </div>
        <div>
          <el-button type="primary">Đăng nhập qua SVOnline</el-button>
        </div>
        <div>
          <p>Bạn chưa có tài khoản <nuxt-link to="/ung-vien/dang-ky">Đăng ký</nuxt-link></p>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>

  export default {
    props: {
      formTitle: String,
      userType: String
    },
    components: {
    },
    data() {

      return {
        signInForm: {
          email: '',
          password: '',
        },
        rules: {
          email: [
            {required: true, message: 'Vui lòng nhập email', trigger: 'blur'},
            {type: 'email', message: 'Email không đúng định dạng', trigger: ['blur', 'change']}
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
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs-variables";

  .sign-in-form {
    border: 1px solid $color-border;
    border-radius: $br-5;
    background-color: $color-white;
    padding: $padding-border-box-15;
    margin-top: 50px;
  }

  .account-info {
    margin: 10px auto;
    border: 1px solid $color-border;
    border-radius: 3px;
    background-color: $bc-border-box;
    padding: $padding-border-box-10;
  }


  .el-button {
    background-color: $color-primary;
    color: $color-white;
    font-weight: $fw-big-700;
    margin: 5px 0;
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

  a:hover {
    cursor: pointer;
  }

  .svo-sign-in {
    text-align: center;
  }

  .text-or {
    margin: 10px auto;
    display: flex;
    position: relative;
    align-items: center;
    opacity: 0.5;
  }

  .text-or p {
    font-weight: $fw-big-700;
    margin: 0 auto;
    z-index: 3;
    background-color: $color-white;
  }

  .text-or hr {
    position: absolute;
    background-color: $color-black;
    width: 100%;
    bottom: 8px;
  }

  .form-input {
    position: relative;
  }

  .icon {
    color: $color-icon;
    position: absolute;
    top: 10px;
    font-size: $fs-large-18;
    z-index: 3;
    left: 10px;
  }

  .forgot-pass {
    color: $color-primary;
  }

  .forgot-pass div:hover {
    color: $color-secondary;
  }

  .forgot-pass div:active {
    color: $color-primary;
  }

  .sign-up-navigation a {
    float: right;
  }


</style>

<style lang="">

</style>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="content">

        <div id="box-left" ref="left" class="">
          <div class="description box" :style="{height: boxLeftHeight + 'px'}">
            <h3>Lorem Ipsum</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
          </div>

        </div>

        <div id="box-right" ref="right">
          <div class="box">
            <div class="btn-options " id="btn-options">
              <p v-if="!activeBtn">Bạn đang muốn? </p>

              <div :class="btnAfter" class="mg-top-15">

                <transition name="fade-in-up">
                  <el-button
                    @click.once="handleOnFirstClickLeftBtn"
                    @click="handleOnClickLeftButton"
                    class="button button--wapasha"
                    :class="{active: activeBtn === 'timungvien'}"
                  >
                    {{(activeBtn === 'timvieclam' || activeBtn === 'timungvien') ? 'Nhà tuyển dụng' : 'Tìm ứng viên'}}
                  </el-button>
                </transition>

                <transition name="fade-in-up">
                  <el-button
                    @click.once="handleOnFirstClickRightBtn"
                    @click="handleOnClickRightButton"
                    class="button button--wapasha"
                    :class="{active: activeBtn === 'timvieclam'}"
                  >
                    {{(activeBtn === 'timvieclam' || activeBtn === 'timungvien') ? 'Ứng viên' : 'Tìm việc làm'}}
                  </el-button>
                </transition>

              </div>
            </div>

            <transition name="fade-in-up">
              <div v-if="activeBtn === 'timungvien'" class="input-container">
                <el-form
                  :model="employerForm"
                  :rules="rules"
                  ref="employerForm"
                  label-position="top"
                >

                  <transition name="fade-in-up">
                    <el-form-item
                      prop="name"
                      label="Nhập họ và tên"
                      class="mg-top-15"
                    >
                      <el-input
                        v-model="employerForm.name"
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
                        v-model="employerForm.phoneNumber"
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
                        v-model="employerForm.companyName"
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
                        @click="submitForm('employerForm')"
                        class="mg-top-15 button button--wapasha done-btn"
                      >
                        Xong
                      </el-button>
                    </el-form-item>
                  </transition>

                </el-form>
              </div>
            </transition>

            <transition name="fade-in-up">
              <div v-if="activeBtn === 'timvieclam'" class="input-container">

                <el-form
                  :model="candidateForm"
                  :rules="rules"
                  ref="candidateForm"
                  label-position="top"
                >
                  <transition name="fade-in-up">
                    <el-form-item
                      prop="name"
                      label="Nhập họ và tên"
                      class="mg-top-15"
                    >
                      <el-input
                        v-model="candidateForm.name"
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
                        v-model="candidateForm.phoneNumber"
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
                      <el-select v-model="candidateForm.professions" placeholder="Chọn lĩnh vực muốn làm việc...">
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
                    <el-form-item v-if="hasChangeCandidateProfessionInput">
                      <el-button
                        @click="submitForm('candidateForm')"
                        class="mg-top-15 button button--wapasha done-btn"
                      >
                        Xong
                      </el-button>
                    </el-form-item>
                  </transition>

                </el-form>
              </div>
            </transition>
          </div>
        </div>


      </div>
    </div>

    <el-dialog
      title="Xác nhận thông tin"
      :visible.sync="confirmInfoDialogVisible"
      width="35%"
      center>
      <p>Thông tin {{activeBtn === 'timvieclam' ? 'Ứng viên' : 'Nhà tuyển dụng'}}: </p>
      <p>Họ tên: {{activeBtn === 'timvieclam' ? candidateForm.name : employerForm.name}}</p>
      <p>Số điện thoại: {{activeBtn === 'timvieclam' ? candidateForm.phoneNumber : employerForm.phoneNumber}}</p>
      <p v-if="activeBtn === 'timungvien'">Tên công ty: {{employerForm.companyName}}</p>
      <p v-if="activeBtn === 'timvieclam'">Lĩnh vực muốn làm việc: {{candidateForm.professions}}</p>
      <p>Bạn có chắc chắn thông tin đã cung cấp là xác thực?</p>

      <el-dialog
        title="Hoàn thành đăng ký"
        :visible.sync="doneRegisterDialogVisible"
        width="35%"
        center
        append-to-body
      >
        <p>Bộ phận chăm sóc khách hàng của HaluJobs sẽ liên hệ với quý khách trong vòng 5 phút!</p>
        <div slot="footer" class="dialog-footer">
          <nuxt-link to="/" style="color: #ffffff">
            <el-button @click="doneRegisterDialogVisible = false" type="primary">
              Đi đến trang chủ
            </el-button>
          </nuxt-link>
        </div>
      </el-dialog>

      <div slot="footer" class="dialog-footer">
        <el-button @click="confirmInfoDialogVisible = false">Huỷ bỏ</el-button>
        <el-button type="primary" @click="onConfirmInformation">Xác nhận</el-button>
      </div>
    </el-dialog>


  </div>
</template>

<script>
  import anime from 'animejs';
  import {JobOption} from '~/assets/js/data-options';

  export default {
    components: {},
    head() {
      return {
        title: this.title
      }
    },
    layout: 'login',
    data() {
      const {
        jobs
      } = JobOption;
      return {
        title: 'Đăng nhập',
        hasFocusLeftForm: true,
        activeBtn: '',
        btnAfter: '',
        boxLeftHeight: 250,
        windowHeight: '',
        flagUrl: require('~/assets/images/Flag_of_Vietnam.png'),
        hasChangeCompanyPhoneNumberInput: false,
        hasChangeEmployerNameInput: false,
        hasChangeCompanyNameInput: false,
        hasChangeCandidatePhoneNumberInput: false,
        hasChangeCandidateNameInput: false,
        hasChangeCandidateProfessionInput: false,
        confirmInfoDialogVisible: false,
        doneRegisterDialogVisible: false,
        candidateForm: {
          name: '',
          phoneNumber: '',
          professions: ''
        },
        employerForm: {
          name: '',
          phoneNumber: '',
          companyName: ''
        },
        professionOptions: jobs,
        rules: {
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
        },
      }
    },
    watch: {
      employerForm: {
        handler(newValue, oldValue) {
          console.log(newValue);
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
      candidateForm: {
        handler(newValue, oldValue) {
          console.log(newValue);
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
      handleOnFirstClickLeftBtn() {
        //Donn't run anime.timeline when it has played by clicking right button
        if (this.activeBtn === 'timvieclam') return;

        anime.timeline()
          .add({
            targets: ['#box-left, #box-right'],
            width: '50%',
            duration: 100,
            update: () => {
              this.boxLeftHeight = 0.5 * this.windowHeight;
            }
          })
          .add({
            targets: ['#box-right'],
            offset: '-=50',
            opacity: 0.3,
            translateX: {
              value: '100%',
              duration: 1000
            },
            translateY: {
              value: -(this.boxLeftHeight + 120),
              duration: 800,
              delay: 150,
            },
            easing: 'easeInOutQuart',
            complete: (anime) => {
              this.activeBtn = 'timungvien';
              this.btnAfter = 'btn-after';
            }
          })
          .add({
            targets: ['#box-right'],
            opacity: 1,
            easing: 'easeInOutQuart',
            // duration: 100,
          })

      },
      handleOnFirstClickRightBtn() {
        if (this.activeBtn === 'timungvien') return;

        anime.timeline()
          .add({
            targets: ['#box-left, #box-right'],
            width: '50%',
            duration: 100,
            update: () => {
              this.boxLeftHeight = 0.5 * this.windowHeight;
            }
          })
          .add({
            targets: ['#box-right'],
            offset: '-=50',
            translateX: {
              value: '100%',
              duration: 1000
            },
            translateY: {
              value: -(this.boxLeftHeight + 120),
              duration: 800,
              delay: 150,
            },
            easing: 'easeInOutQuart',
            complete: (anime) => {
              this.activeBtn = 'timvieclam';
              this.btnAfter = 'btn-after';
            }
          })
      },
      handleOnClickLeftButton() {
        if (this.activeBtn) {
          this.activeBtn = 'timungvien';
        }

      },
      handleOnClickRightButton() {
        console.log("handleOnClickRightButton");
        if (this.activeBtn) {
          console.log(this.activeBtn);
          this.activeBtn = 'timvieclam';

          console.log(this.activeBtn);
        }
      },
      onConfirmInformation() {
        console.log(this.doneRegisterDialogVisible);
        this.confirmInfoDialogVisible = false;
        this.doneRegisterDialogVisible = true;
        console.log(this.doneRegisterDialogVisible);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.confirmInfoDialogVisible = true;
            console.log("Done");
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    },
    mounted() {
      console.log('Mounted');

      this.windowHeight = window.innerHeight;
      this.boxLeftHeight = 0.3 * this.windowHeight;
    },

  }
</script>

<style lang="scss" scoped>
  @import '~assets/css/halujobs_variables';

  .wrapper {
    width: 90%;
    margin: 0 auto;
  }

  .container {
    text-align: left;
    padding-top: 150px;
    width: 100%;
  }

  .content {
    position: relative;
  }

  .box {
    border: 1px solid transparent;
    /*background-color: rgba(0, 0, 0, 0.5);*/
    background-color: rgba(15, 33, 33, .4);
    padding: $padding-border-box-15;
  }

  #box-left {
    color: $color-white;
    font-size: 30px;
    transition: all .8s ease-in;
    margin-bottom: 100px;
    padding: 10px;
    display: inline-block;
    max-width: 100%;
    width: 100%;

    .description {

    }
  }

  #box-right {
    padding: 10px;
    max-width: 100%;
    width: 100%;
    display: block;
    transition: width .8s ease-in;

    .btn-options {
      p {
        font-size: 30px;
        color: $color-white;
        display: inline;
      }
    }

    .done-btn {
      margin: 20px auto 0;
      display: block;
    }
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

  .button--wapasha {
    width: 180px;
    border: 1px solid $color-white;
    background: none;
    position: relative;
    outline: none;
    z-index: 1;
    -webkit-backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    background: transparent;
    border-radius: 0 !important;
    color: #fff;
    -webkit-transition: all 0.3s ease-in-out, background-color 0.3s, color 0.3s;
    transition: all 0.3s ease-in-out, background-color 0.3s, color 0.3s;

    &:hover {
      background-color: transparent;
      color: #ffffff;
      border: none;
    }

    &:focus {
      border: 1px solid $color-white;
      outline: none;
    }
  }

  .button--wapasha::before {
    content: '';
    position: absolute;
    outline: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid $color-white;
    z-index: -1;
    opacity: 0;
    -webkit-transform: scale3d(0.6, 0.6, 1);
    transform: scale3d(0.6, 0.6, 1);
    -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
    transition: transform 0.3s, opacity 0.3s;
    -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
  }

  .button--wapasha:hover::before {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    opacity: 1;

  }

  .button--wapasha:active::before {
    transform: scale3d(0, 0, 0);
    border: 1px solid $color-white;
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    transition: transform 0.3s, opacity 0.3s;
  }

  .btn-after {
    display: flex !important;
    justify-content: center;
    align-items: center;
    transition: all 1s ease-in-out;

    .active {
      border: 2px solid $color-white !important;
      outline: none;
      background-color: rgba(255, 255, 255, 0.7);
      font-weight: $fw-big-700;
      color: $color-black;
      text-shadow: rgba(0, 0, 0, 0.4) 0 1px 1px;
      transform: inherit;

    }

    .button {
      height: 70px;
      width: 50%;
      font-size: 30px;
    }
  }


</style>

<style lang="scss">
  .el-input__inner {
    /*height: 35px !important;*/
    border-radius: 0 !important;
    font-size: 16px !important;
    padding: 10px !important;
    background: transparent !important;
    color: #ffffff !important;
  }

  .el-select {
    width: 100% !important;
    .el-input--suffix .el-input__inner {
      padding: 10px !important;
    }
  }

  .el-form-item__label {
    color: #ffffff !important;
    font-size: 20px;
    margin-left: -5px;

    &:before {
      content: '' !important;
    }
  }

  .el-input-group__append, .el-input-group__prepend {
    background-color: transparent;
    border-radius: 0 !important;
    color: #ffffff;
    padding: 0 10px;
  }
</style>




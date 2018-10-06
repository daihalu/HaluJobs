<template>
  <div>
    <NavBar
      id="scroll-target"
      :activeMenuItem="activeMenuItem"
      @on_click_account_text_on_nav_bar="handleOnClickAccountTextOnNavBar"
    />
    <nuxt class="main"/>
    <Footer class="mg-top-15"/>

    <div class="fixed-contact-box">
      <font-awesome-icon :icon="['fab', 'facebook-f']" @click="dialogFacebookVisible = true"/>
      <font-awesome-icon :icon="['fas', 'phone']" @click="dialogPhoneVisible = true"/>
      <font-awesome-icon :icon="['far', 'envelope']" @click="dialogMailVisible = true"/>
    </div>

    <el-dialog title="Theo dõi HaluJobs qua MXH" :visible.sync="dialogFacebookVisible">
      <el-row :gutter="10" class="box-container padding-15">
        <el-col :span="10" class="description">
          <p>Bạn muốn nhận các tin tức việc làm và tuyển dụng mới nhất từ HaluJobs?</p>
          <p>Hãy nhấn nút "Thích" để nhận thông tin cập nhật liên tục từ chúng tôi trên Facebook.</p>
        </el-col>
        <el-col :span="14" class="ta-center">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhalujobs%2F&tabs=timeline&width=400&height=450&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
            width="400"
            height="350"
            style="border:none;overflow:hidden"
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
          >
          </iframe>
        </el-col>
      </el-row>
    </el-dialog>

    <el-dialog :visible.sync="dialogPhoneVisible">
      <el-row class="box-container hot-line-container">
        <div class="header">
          <h2>HOTLINE TƯ VẤN DÀNH CHO NHÀ TUYỂN DỤNG</h2>
        </div>

        <div class="hot-line-box">
          <h3>KHU VỰC <span>MIỀN BẮC</span> HOTLINE
            <nuxt-link to="/tel:">(024) 888 88888</nuxt-link>
          </h3>
          <h3>KHU VỰC <span>MIỀN TRUNG</span> HOTLINE
            <nuxt-link to="/tel:">(024) 888 88888</nuxt-link>
          </h3>
          <h3>KHU VỰC <span>MIỀN NAM</span> HOTLINE
            <nuxt-link to="/tel:">(024) 888 88888</nuxt-link>
          </h3>
        </div>
      </el-row>

      <el-row class="box-container hot-line-container">
        <div class="header">
          <h2>HOTLINE TƯ VẤN DÀNH CHO NGUỜI TÌM VIỆC</h2>
        </div>
        <div class="hot-line-box">
          <h3>TOÀN QUỐC:
            <nuxt-link to="/tel:">(024) 888 88888</nuxt-link>
          </h3>
        </div>

      </el-row>
    </el-dialog>

    <el-dialog :visible.sync="dialogMailVisible">
      <div class="box-container dialog-mail-container">
        <p>
          Nếu Quý khách có bất kỳ thắc mắc nào về dịch vụ của HaluJobs, vui lòng gửi email tới địa chỉ tư vấn của chúng
          tôi:
        </p>

        <div>
          <nuxt-link to="mailto:hotro@halutech.com.vn">
            <font-awesome-icon :icon="['far', 'envelope']" @click="dialogMailVisible = true"/>
            hotro@halutech.com.vn
          </nuxt-link>
        </div>
        <p>Chân thành cảm ơn!</p>

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
          <div v-if="signUpInfo.userType">
            <sign-up-form
              v-if="signUpFormVisible"
              @on_click_sign_in_text="handleOnClickSignInText"
              @on_submit_sign_up_form="handleOnSubmitSignUpForm"
            />

            <sign-in-form
              v-if="signInFormVisible"
              @on_click_sign_up_text="handleOnClickSignUpText"
              @on_submit_sign_in_form="handleOnSubmitSignInForm"
            />
          </div>
        </el-carousel-item>
      </el-carousel>

      <el-dialog
        width="30%"
        :visible.sync="innerCloseDialogVisible"
        append-to-body
        :close-on-press-escape="false"
        :close-on-click-modal="false"
        :before-close="handleOnCancelCloseSignUpDialog"
        style="margin-top: 25vh;"
      >
        <div
          class="mg-bottom-15"
          style="font-size: 18px"
        >
          Quý khách có chắc chắn là muốn huỷ {{signUpFormVisible ? 'đăng ký' : 'đăng nhập'}} tài khoản?
        </div>
        <div class="ta-center">
          <el-button @click="handleOnCancelCloseSignUpDialog">Huỷ bỏ</el-button>
          <el-button type="primary" @click="handleOnAcceptCloseSignUpDialog">Đồng ý</el-button>
        </div>
      </el-dialog>
    </el-dialog>

    <div
      class="btn-scroll-top"
      v-if="showScrollButton"
      v-scroll-to="{el:'#scroll-target', duration: 1000, easing: 'ease-in-out'}"
    >
      <font-awesome-icon :icon="['fas', 'chevron-up']"/>
    </div>
  </div>
</template>

<script>
  import NavBar from '~/components/public-components/bars/NavBar';
  import Footer from '~/components/public-components/bars/Footer';
  import ScrollBar from '~/components/public-components/bars/ScrollBar';
  import SignInForm from '~/components/ung-vien/SignInForm';
  import SignUpForm from '~/components/ung-vien/SignUpForm';

  import {mapState, mapGetters, mapActions} from 'vuex';

  import {EventTypes} from '~/assets/js/event-types';

  export default {
    components: {
      NavBar,
      Footer,
      ScrollBar,
      SignInForm,
      SignUpForm
    },
    data() {
      return {
        showScrollButton: false,
        scrollToTop: false,
        dialogFacebookVisible: false,
        dialogPhoneVisible: false,
        dialogMailVisible: false,

        signInInfo: {
          emailOrPhoneNumber: '',
          password: ''
        },

        signUpInfo: {
          userType: '',
          emailOrPhoneNumber: '',
          password: ''
        },
        inputOfPasswordRecoveryDialog: '',
        passwordRecoveryDialogVisible: false,
        isLoading: false,
        isAnAccount: true,

        signInFormVisible: false,
        signUpFormVisible: true,

        signUpDialogVisible: false,
        innerCloseDialogVisible: false,
        signUpDialogWidth: '440px',
        signUpCarouselHeight: '200px',
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
      handleScroll() {
        this.showScrollButton = window.scrollY > 600;
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

      handleOnCancelCloseSignUpDialog() {
        this.innerCloseDialogVisible = false;
      },

      handleOnAcceptCloseSignUpDialog() {
        this.$refs.signUpCarousel.activeIndex = 0;
        this.innerCloseDialogVisible = false;
        this.signUpDialogVisible = false;
        this.signUpFormVisible = true;
        this.signInFormVisible = false;
        this.signUpInfo.userType = '';
        this.signUpCarouselHeight = '200px';
        this.signUpDialogWidth = '440px';
      },
      
      handleOnChangeCarouselItem(value) {
        if (value === 1) {
          //setTimeOut 200ms để tránh trùng event change của carousel vs focus của input
          setTimeout(() => {
            this.autoFocusInput = true;
          }, 200);
        }
      },

      handleOnClickSignInText() {
        console.log('On click sign in text', this.$refs.signUpCarousel.activeIndex);
        this.signInFormVisible = true;
        this.signUpFormVisible = false;
        this.signUpDialogWidth = '440px';
        this.signUpCarouselHeight = '440px';
      },

      handleOnClickSignUpText() {
        console.log('On click sign up text', this.$refs.signUpCarousel.activeIndex);
        this.signUpFormVisible = true;
        this.signInFormVisible = false;
        this.signUpDialogWidth = "750px";
        this.signUpCarouselHeight = '440px';
      },

      handleOnClickAccountTextOnNavBar() {
        this.signUpDialogVisible = true;
        this.signUpCarouselHeight = '200px';
        this.signUpDialogWidth = '440px';
      },

      handleOnSubmitSignUpForm(signUpInfo) {
        this.signUpInfo.emailOrPhoneNumber = signUpInfo.emailOrPhoneNumber;
        this.signUpInfo.password = signUpInfo.password;
        console.log("Sign Up info: ", this.signUpInfo);
      },

      handleOnSubmitSignInForm(signInInfo) {
        this.signInInfo.emailOrPhoneNumber = signInInfo.emailOrPhoneNumber;
        this.signInInfo.password = signInInfo.password;
        console.log("Sign In info: ", this.signInInfo);
      }

    },
    beforeMount() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>


<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .main {
    margin-top: $mg-top-nav-bar-60;
    min-height: 100vh;
  }

  .fixed-contact-box {
    background-color: $color-white;
    border: 1px solid $color-primary;
    position: fixed;
    top: 330px;
    right: 30px;
    z-index: $index-top-1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 $padding-border-box-10;
    border-radius: $br-3;

    svg {
      color: $color-primary;
      font-size: 20px;
      height: 35px;

      &:hover {
        cursor: pointer;
      }

    }
  }

  .btn-scroll-top {
    border: 1px solid $color-secondary;
    border-radius: $br-5;
    color: $color-primary;
    background-color: $color-white;
    padding: 7px 10px;
    font-size: $fs-large-18;
    position: fixed;
    bottom: 50px;
    right: 30px;
  }

  .btn-scroll-top:hover {
    cursor: pointer;
  }


  .hot-line-container {
    padding: $padding-border-box-15;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .header {
    color: $color-white;
    background-color: $color-primary;
    line-height: $line-height-50;
    border-radius: 5px 5px 0 0;
    padding: 10px;
  }

  .hot-line-box {
    padding: 10px;
    font-size: $fs-small-14;

    h3 {
      line-height: $line-height-50;
      font-size: 24px;
      font-weight: $fw-base-500;
      span, a {
        color: $color-pink;
      }
    }
  }

  .dialog-mail-container {
    padding: $padding-border-box-15;
    margin-bottom: 10px;
    margin-top: 20px;

    a {
      font-size: 20px;
      color: $color-primary;
    }

    p {
      font-size: 16px;
    }
  }

  .description {
    font-size: $fs-large-18;
  }
</style>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

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





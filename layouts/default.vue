<template>
  <div>
    <NavBar id="scroll-target" :activeMenuItem="activeMenuItem"/>
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

  import {mapState, mapGetters, mapActions} from 'vuex';

  export default {
    components: {
      NavBar,
      Footer,
      ScrollBar
    },
    data() {
      return {
        showScrollButton: false,
        scrollToTop: false,
        dialogFacebookVisible: false,
        dialogPhoneVisible: false,
        dialogMailVisible: false
      }
    },
    computed: {
      ...mapGetters({
        activeMenuItem: 'navBarStatus'
      }),

      ...mapState('home_page', {
        hasDoneFetchingData: 'hasDoneFetchingData'
      })
    },
    methods: {
      handleScroll() {
        this.showScrollButton = window.scrollY > 600;
      },

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



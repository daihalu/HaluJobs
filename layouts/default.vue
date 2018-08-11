<template>
  <div>
    <NavBar/>
    <nuxt/>
    <Footer/>
    <div class="fixed-contact-box">
      <font-awesome-icon :icon="['fab', 'facebook-f']" @click="dialogTableVisible = true"/>
      <font-awesome-icon :icon="['fas', 'phone']"/>
      <font-awesome-icon :icon="['far', 'envelope']"/>
    </div>
    <el-dialog title="Theo dõi HaluJobs qua MXH" :visible.sync="dialogTableVisible">
      <div>Bạn muốn nhận các tin tức việc làm và tuyển dụng mới nhất từ HaluJobs?
        Hãy nhấn nút "Thích" bên dưới để nhận thông tin cập nhật liên tục từ chúng tôi trên Facebook.
      </div>
      <div class="mg-top-15">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhalujobs%2F&tabs=timeline&width=760&height=450&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
          width="500"
          height="130"
          style="border:none;overflow:hidden"
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allow="encrypted-media"
        >
        </iframe>
      </div>
    </el-dialog>

    <div class="btn-scroll-top" v-if="showScrollButton" @click="scrollTop">
      <font-awesome-icon :icon="['fas', 'chevron-up']"/>
    </div>
  </div>
</template>
<script>
  import NavBar from '../components/bars/NavBar';
  import Footer from '~/components/bars/Footer';

  export default {
    components: {
      NavBar,
      Footer
    },
    data() {
      return {
        showScrollButton: false,
        scrollToTop: false,
        dialogTableVisible: false
      }
    },
    methods: {
      handleScroll() {
        this.showScrollButton = window.scrollY > 600;
      },
      scrollTop() {
        window.scrollTo(0, 0);
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


<style lang="scss">
  @import "~assets/css/halujobs_variables";

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

    }
  }

  svg:hover {
    cursor: pointer;
  }

  .mg-top-15 {
    text-align: center;
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

  .el-dialog__body {
    padding: 0px 20px 20px 20px;
  }

</style>



<template>
  <div>
    <NavBar/>
    <nuxt/>
    <Footer/>
    <div class="fixed-contact-box">
      <nuxt-link to="/"><font-awesome-icon :icon="['fab', 'facebook-f']"/></nuxt-link>
      <nuxt-link to="/"><font-awesome-icon :icon="['fas', 'phone']"/></nuxt-link>
      <nuxt-link to="/"><font-awesome-icon :icon="['far', 'envelope']"/></nuxt-link>
    </div>

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
        scrollToTop: false
      }
    },
    methods: {
      handleScroll() {
        this.showScrollButton = window.scrollY > 600;
      },
      scrollTop() {
        window.scrollTo(0,0);
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
  @import "~assets/css/halujobs-variables";

  .fixed-contact-box {
    position: fixed;
    top: 330px;
    right: 30px;
    background-color: $color-white;
    z-index: $index-top-1000;
    border: 1px solid $color-primary;
    display: flex;
    flex-direction: column;
    padding: $padding-border-box-10;
    border-radius: $br-3;
  }

  .fixed-contact-box svg {
    font-size: 20px;
  }

  .fixed-contact-box a {
    line-height: $line-height-35;
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

</style>



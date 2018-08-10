<template>
  <div>
    <NavBar/>
    <div class="overlay-container">
      <div class="overlay-inner cover-background" :style="{'background-image':'url('+backgroundUrl+');'}"></div>
      <div class="overlay-inner background-dark-5">
        <vue-particles
          color="#ffffff"
          :particleOpacity="1"
          :particlesNumber="80"
          shapeType="circle"
          :particleSize="5"
          linesColor="#ffffff"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="0.7"
          :linesDistance="150"
          :moveSpeed="3"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
          style="position:absolute; left: 0; right: 0; height: 100vh"
        >
        </vue-particles>
      </div>

    </div>
    <nuxt/>
    <Footer class="footer"/>
  </div>
</template>

<script>
  import NavBar from '../components/bars/NavBar';
  import Footer from '~/components/bars/Footer';
  /*
  * :style="{'background-image':'url('+backgroundUrl+');'}"
  backgroundUrl: require('~/assets/images/bg.jpg'),
  * */

  export default {
    components: {
      NavBar,
      Footer,
    },
    data() {
      return {
        backgroundUrl: require('~/assets/images/bg.jpg')
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

<style lang="scss" scoped>
  @import "~assets/css/halujobs-variables";

  .overlay-container {
    height: 100%;
  }

  .cover-background {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .overlay-inner {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .background-dark-5 {
    background-color: #000a1e;
    opacity: 0.3;
  }

  .footer {
    position: absolute;
    z-index: 2;
    top: 100vh;
  }


</style>

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

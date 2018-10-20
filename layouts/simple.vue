<template>
  <div>
    <NavBar/>
    <div class="overlay-container">
      <div class="overlay-inner cover-background" :style="{'background-image':'url('+backgroundUrl+');'}"></div>
      <div class="overlay-inner background-dark">
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
    <nuxt class="main"/>
    <Footer/>
  </div>
</template>

<script>
  import NavBar from '../components/public-components/bars/NavBar';
  import Footer from '~/components/public-components/bars/Footer';

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
  @import "~assets/css/halujobs_variables";

  .main {
    margin-top: $mg-top-nav-bar-60;
    min-height: 100vh;
  }

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

  .background-dark {
    background-color: #000a1e;
    opacity: 0.3;
  }
</style>

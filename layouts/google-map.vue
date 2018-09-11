<template>
  <div>
    <NavBar/>
    <nuxt class="main"/>
    <Footer/>
  </div>
</template>

<script>
  import NavBar from '../components/ban-do/NavBar';
  import Footer from '~/components/ban-do/Footer';

  export default {
    name: "google-map",
    components: {
      NavBar,
      Footer
    }
  }
</script>
<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .main {
    margin-top: $mg-top-nav-bar-60;
  }

</style>

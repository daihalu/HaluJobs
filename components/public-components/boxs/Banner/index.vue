<template>
  <el-carousel trigger="click" height="100%" indicator-position="none" class="container" :interval="5000">
    <el-carousel-item v-for="image in images" :key="image" class="item">
      <img :src="image"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    data() {
      return {
        images: [
          'https://scontent.fsgn2-4.fna.fbcdn.net/v/t31.0-8/28701335_1559638184153377_8880342999940083568_o.png?_nc_cat=0&oh=7c0dadadf128cba82a770a61595c88b4&oe=5BCAF72E',
          'https://scontent.fsgn2-4.fna.fbcdn.net/v/t31.0-8/28701590_1558752900908572_6739863597072880050_o.png?_nc_cat=0&oh=ef1ca8d5f8ccd3c9a8256ec1f87ac573&oe=5BCF1A08',
          'https://scontent.fsgn2-4.fna.fbcdn.net/v/t31.0-8/28701386_1554571581326704_2099911938117785429_o.png?_nc_cat=0&oh=2b2a1176859affe161abf141a682682f&oe=5BDFA68A',
          'https://scontent.fsgn2-4.fna.fbcdn.net/v/t31.0-8/27625190_1519017694882093_4508463275280251819_o.png?_nc_cat=0&oh=66da96af701896172a00e9934852a0dc&oe=5C117BE5'
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .container {
    padding: 0;
    height: 65vh;
  }

  .item {
    padding: 0 !important;
    border-radius: $br-5;
  }

  .item img {
    height: 100%;
    width: 100%;
    border: 10px solid $color-white;

  }

</style>

<template>
  <div class="container">
    <img :src="dynamicCandidateStampImg" height="121" width="121"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dynamicCandidateStampImg: require('@/assets/images/ung_vien_nang_dong.png')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .container {
    border: 1px solid $color-gray;
    padding: 15px;
    background-color: $color-white;
    margin-top: $mg-top-bottom-15;
    text-align: center;
    width: 100%;
  }
</style>


<template>
  <div class="container">
    <font-awesome-icon :icon="['fas', 'user']"/>
    <h4> Hồ sơ ứng viên năng động</h4>
    <hr class="hr-1"/>
    <div v-for="item in 10" :key="item">
      <CandidateCard/>
    </div>
  </div>
</template>

<script>
  import CandidateCard from '~/components/public-components/cards/CandidateCard';

  export default {
    components: {
      CandidateCard
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
    text-align: left;
    width: 100%;
  }

  .container h4 {
    line-height: 30px;
    display: inline;
  }

  hr {
    margin-bottom: 20px;
  }

  .container div {
    margin-bottom: 10px;
  }

</style>

<style lang="">

</style>

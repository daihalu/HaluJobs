<template>
  <el-row class="newest-candidate-box">
    <h4>
      <font-awesome-icon icon="user"/>
      {{jobTitle}}
    </h4>
    <div class="row" id="newest-candidate-box">
      <el-row :gutter="4">
        <el-col v-for="item in 50" v-bind:key="item">
          <NewestCandidateCard/>
        </el-col>
      </el-row>
    </div>
  </el-row>
</template>

<script>
  import NewestCandidateCard from '../../cards/NewestCandidateCard';

  export default {
    components: {
      NewestCandidateCard
    },
    props: {
      jobTitle: String
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs-variables";

  .row {
    overflow: auto;
    height: 640px;
    padding: 10px;
  }

  .newest-candidate-box {
    background-color: $color-white;
    margin: $mg-top-bottom-20 auto;
  }

  h4 {
    border-bottom: 1px solid $color-border;
    padding: 10px;
    font-size: $fs-large-18;
    font-weight: $fw-base-500;
  }

  /* width */
  #newest-candidate-box::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  #newest-candidate-box::-webkit-scrollbar-track:hover {
    background: $color-gray;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
  }

  /* Handle */
  #newest-candidate-box::-webkit-scrollbar-thumb {
    background: $color-scroll-bar;
    border-radius: 8px;
  }

  /* Handle on hover */
  #newest-candidate-box::-webkit-scrollbar-thumb:hover {
    background: $color-scroll-bar--hover;
  }

</style>



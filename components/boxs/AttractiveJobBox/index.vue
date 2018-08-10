<template>
  <el-row class="hot-job-box">
    <h4>
      <font-awesome-icon icon="briefcase"/>
      {{jobTitle}}
    </h4>
    <div class="row" id="hot-job-box">
      <el-row :gutter="4">
        <el-col :span="12" v-for="item in 50" v-bind:key="item">
          <AttractiveJobCard/>
        </el-col>
      </el-row>
    </div>
  </el-row>
</template>

<script>
  import AttractiveJobCard from '../../cards/AttractiveJobCard';

  export default {
    components: {
      AttractiveJobCard
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
    height: 670px;
    padding: 10px;
  }

  .hot-job-box {
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
  #hot-job-box::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  #hot-job-box::-webkit-scrollbar-track:hover {
    background: $color-gray;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
  }

  /* Handle */
  #hot-job-box::-webkit-scrollbar-thumb {
    background: $color-scroll-bar;
    border-radius: 8px;
  }

  /* Handle on hover */
  #hot-job-box::-webkit-scrollbar-thumb:hover {
    background: $color-scroll-bar--hover;
  }

</style>


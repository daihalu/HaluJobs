<template>
  <el-row class="new-job-box">
    <h4>
      <font-awesome-icon icon="briefcase"/>
      {{jobTitle}}
    </h4>
    <div class="row" id="new-job-box">
      <el-row :gutter="4">
        <el-col v-for="item in 50" v-bind:key="item">
          <ColorlessJobCardCol16/>
        </el-col>
      </el-row>
    </div>
  </el-row>
</template>

<script>
  import ColorlessJobCardCol16 from '../../cards/ColorlessJobCardCol16';

  export default {
    components: {
      ColorlessJobCardCol16
    },
    props: {
      jobTitle: String
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .row {
    overflow: auto;
    height: 640px;
    padding: 10px;
  }

  .new-job-box {
    background-color: $color-white;
    margin: $mg-top-bottom-15 auto;
  }

  h4 {
    border-bottom: 1px solid $color-border;
    padding: 10px;
    font-size: $fs-large-18;
    font-weight: $fw-base-500;
  }

  /* width */
  #new-job-box::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  #new-job-box::-webkit-scrollbar-track:hover {
    background: $color-gray;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
  }

  /* Handle */
  #new-job-box::-webkit-scrollbar-thumb {
    background: $color-scroll-bar;
    border-radius: 8px;
  }

  /* Handle on hover */
  #new-job-box::-webkit-scrollbar-thumb:hover {
    background: $color-scroll-bar--hover;
  }

</style>



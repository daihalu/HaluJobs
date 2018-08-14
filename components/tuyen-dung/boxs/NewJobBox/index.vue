<template>
  <el-row class="box-container">
    <h4 class="box-title">
      <font-awesome-icon icon="briefcase"/>
      {{jobBoxTitle}}
    </h4>
    <div class="scroll-box" id="new-job-box">
      <el-row :gutter="4">
        <el-col v-for="item in 50" v-bind:key="item" class="mg-bottom-10">
          <new-job-card
            :jobInfo="jobList[0]"
          />
        </el-col>
      </el-row>
    </div>
  </el-row>
</template>

<script>
  import NewJobCard from '~/components/public-components/cards/ColorlessCard16';

  export default {
    components: {
      NewJobCard
    },
    props: {
      jobBoxTitle: String,
      jobList: Array
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .scroll-box {
    overflow: auto;
    height: 640px;
    padding: 10px;
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



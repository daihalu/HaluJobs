<template>
  <el-row class="row">
    <h4>
      <font-awesome-icon icon="briefcase"/>
      {{jobTitle}}
    </h4>
    <el-carousel trigger="click" height="555px" indicator-position="outside" v-bind:interval="100000">
      <el-carousel-item v-for="item in 8" :key="item">
        <el-row :gutter="4">
          <el-col :span="8" v-for="item in 15" v-bind:key="item">
            <QuickJobCard/>
          </el-col>
        </el-row>

      </el-carousel-item>
    </el-carousel>
  </el-row>
</template>

<script>
  import QuickJobCard from '~/components/cards/QuickJobCard';

  export default {
    props: {
      jobTitle: String
    },
    components: {
      QuickJobCard
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";


  h4 {
    border-bottom: 1px solid $color-border;
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-size: $fs-large-18;
    font-weight: $fw-base-500;
  }

  .row {
    padding: 10px;
    background-color: $color-white;
    margin: 0 auto;
    height: 660px;
  }
</style>

<style>
  .el-carousel__indicators--outside button {
    background-color: #1ab394;
    opacity: 0.24;
  }

  .el-carousel__button {
    width: 15px;
    height: 15px;
    border-radius: 50%;

  }
</style>

<template>
  <el-row class="row">
    <el-carousel trigger="click" height="730px" indicator-position="outside" v-bind:interval="100000">
      <el-carousel-item v-for="item in 8" :key="item">
        <el-row :gutter="16">
          <el-col :span="8" v-for="item in 9" v-bind:key="item">
            <CompanyCard/>
          </el-col>
        </el-row>

      </el-carousel-item>
    </el-carousel>
  </el-row>
</template>

<script>
  import CompanyCard from '~/components/cards/CompanyCard';

  export default {
    props: {
      jobTitle: String
    },
    components: {
      CompanyCard
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
    margin: 20px auto;
    height: 800px;
    border-radius: $br-5;
    overflow: hidden;
  }
</style>

<style lang="scss">
  @import "~assets/css/halujobs_variables";

  .el-carousel__indicators--outside {
    left: 0;
    right: 0;
  }

  .el-carousel__indicators--outside button {
    background-color: $color-primary;
    opacity: 0.24;
  }

  .el-carousel__button {
    width: 15px;
    height: 15px;
    border-radius: 50%;

  }
</style>

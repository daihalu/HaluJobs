<template>
  <div class="box-container">
    <h4 class="box-title">
      <font-awesome-icon :icon="['far', 'building']"/>
      NHÀ TUYỂN DỤNG HÀNG ĐẦU
    </h4>
    <el-row :gutter="6" class="content">
      <el-col :span="8" v-for="employer in employers" :key="employer.companyName">
        <nuxt-link :to="employer.employerUrl" :title="employer.companyName">
          <img :src="employer.avatarUrl"/>
        </nuxt-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        props: {
          employers: Array
        }
    }
</script>

<style lang="scss" scoped>
    @import "~assets/css/halujobs_variables";

    .box-container {
      height: 100%;
    }

    a {
      display: inline-block;
      height: 125px;
    }

    img {
      width: 100%;
      height: 125px;
      border: 1px solid $color-border;
      border-radius: $br-3;
    }

    .content {
      padding: 10px;
      margin: 0 !important;
    }

</style>


<template>
  <el-row class="container box-container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="item in breadcrumbObj" :key="item.name">
        <nuxt-link :to="item.url">{{item.name}}</nuxt-link>
      </el-breadcrumb-item>

      <el-breadcrumb-item>
        <nuxt-link to="">{{title}}</nuxt-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </el-row>
</template>

<script>
    export default {
        props: {
          title: String,
          breadcrumbObj: Array
        }
    }
</script>

<style lang="scss" scoped>
    @import "~assets/css/halujobs_variables";

    .container {
      padding: 10px 0 10px 10px;
    }

    .container a {
      color: $color-primary;
    }

</style>


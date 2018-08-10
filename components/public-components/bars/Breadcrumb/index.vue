<template>
  <el-row class="navigation-bar">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="item in breadcrumbObj" :key="item.name">
        <nuxt-link :to="item.link">{{item.name}}</nuxt-link>
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
    @import "~assets/css/halujobs-variables";

    .navigation-bar {
      margin-top: $mg-top-bottom-20;
    }

    .navigation-bar a {
      color: $color-primary;
    }

</style>


<template>
  <el-row class="hot-category">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>
        <nuxt-link to="/tuyen-dung">Nhân viên kinh doanh</nuxt-link>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <nuxt-link to="/tuyen-dung">Bán hàng</nuxt-link>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <nuxt-link to="/tuyen-dung">IT phần mềm</nuxt-link>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <nuxt-link to="/tuyen-dung">IT phần cứng/mạng</nuxt-link>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <nuxt-link to="/tuyen-dung">Kế toán kiểm toán</nuxt-link>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <nuxt-link to="/tuyen-dung">Ngân hàng</nuxt-link>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <nuxt-link to="/tuyen-dung">Lái tàu</nuxt-link>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <nuxt-link to="/tuyen-dung">Cơ khí chế tạo</nuxt-link>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <nuxt-link to="/tuyen-dung">Ngành nghề khác</nuxt-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </el-row>

</template>

<script>
  export default {
    contact: "index"
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs-variables";

  .el-row {
    margin: $mg-top-bottom-20 auto;
    padding-left: 0;
  }
  a:hover {
    color: $color-primary;
  }
</style>

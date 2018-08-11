<template>
  <div class="container">
    <el-row>
      <el-col :span="8" class="icon-hover" title="In hồ sơ">
        <font-awesome-icon icon="print"/>
        <p>In hồ sơ</p>
        <p></p>
      </el-col>
      <el-col :span="8" class="icon-hover" title="Lưu hồ sơ dưới dạng PDF">
        <font-awesome-icon icon="table"/>
        <p>Lưu PDF</p>
        <p></p>
      </el-col>
      <el-col :span="8" class="icon-hover" title="Chia sẻ hồ sơ">
        <font-awesome-icon icon="share-alt"/>
        <p>Chia sẻ</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .container {
    border: 1px solid $color-gray;
    padding: 15px;
    background-color: $color-white;
    margin-top: $mg-top-bottom-15;
    text-align: center;
    width: 100%;
  }

  .icon-hover {
    cursor: pointer;
  }

  .icon-hover:hover {
    color: $color-primary;
  }

</style>

<style lang="">

</style>

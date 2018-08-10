<template>
  <div>
    <div class="form-input">
      <!--<font-awesome-icon v-if="iconPosition === 'right'" :icon="iconName" class="icon icon-right"/>-->
      <font-awesome-icon v-if="iconPosition === 'left'" :icon="iconName" class="icon icon-left"/>
      <el-input :type="type" :v-model="modelName" prefix-icon="el-icon-dai" :auto-complete="autoComplete"
                :placeholder="placeHolder"></el-input>
    </div>
    <div class="form-input">
      <font-awesome-icon v-if="iconPosition === 'right'" :icon="iconName" class="icon icon-right"/>
      <el-input :type="type" :v-model="modelName" suffix-icon="el-icon-dai" :auto-complete="autoComplete"
                :placeholder="placeHolder"></el-input>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      label: String,
      prop: String,
      iconName: String,
      modelName: String,
      iconPosition: String,
      type: String,
      autoComplete: String,
      placeHolder: String
    }
  }
</script>

<style lang="" scoped>
  .form-input {
    position: relative;

  }

  .icon {
    position: absolute;
    color: #000000;
    top: 10px;
    font-size: 16px;
    opacity: 0.5;
    z-index: 3;
  }

  .icon-left {
    left: 10px;
  }

  .icon-right {
    right: 10px;
  }

  .el-input input {
    padding-right: 30px !important;
  }
</style>

<style lang="">

</style>

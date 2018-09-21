<template>
  <div class="selection-box">
    <font-awesome-icon :icon="[`${iconPrefix}`, `${iconName}`]"/>
    <el-select
      v-model="selectedValue"
      filterable
      :placeholder="placeHolder"
      @change="handleOnChange"
    >
      <el-option
        v-for="item in options"
        :key="item.label"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
  export default {
    props: {
      options: Array,
      iconPrefix: String,
      iconName: String,
      placeHolder: String,
    },
    data() {
      return {
        selectedValue: ''
      }
    },
    methods: {
      handleOnChange() {
        console.log("Select con: ");
        console.log(this.selectedValue);

        this.$emit('on_select', this.selectedValue);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .selection-box {
    position: relative;
    display: flex;
    align-items: center;
  }

  .el-select {
    width: 100%;
    z-index: 1;
  }

  .selection-box {
    svg {
      position: absolute;
      z-index: 2;
      display: inline-block;
      width: 30px;
      font-size: 18px;
      opacity: 0.5;
    }
  }

  li {
    list-style-type: none;
    border-bottom: 1px dotted $color-primary;
  }

</style>

<style>
  .el-input--suffix .el-input__inner {
    padding-left: 28px !important;
  }

</style>


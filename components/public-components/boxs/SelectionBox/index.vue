<template>
  <div class="selection-box">
    <font-awesome-icon :icon="[`${iconPrefix}`, `${iconName}`]"/>
    <el-select
      v-model="selectedValue"
      filterable
      :placeholder="placeHolder"
      value=""
      @change="handleOnChange"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
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
    margin-bottom: 10px;
  }

  .el-select {
    width: 100%;
    z-index: 1;
  }

  .selection-box svg {
    position: absolute;
    z-index: 2;
    left: 10px;
    top: 10px;
    font-size: 18px;
    opacity: 0.5;
  }

</style>


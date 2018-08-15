<template>
  <div class="box-container">
    <h4 class="box-title">
      <font-awesome-icon :icon="['fas', 'briefcase']"/>
      {{jobBoxTitle}}
    </h4>
    <div class="item">
      <div v-for="item in keyWords" :key="item">
        <a>{{item}}</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      jobBoxTitle: String,
      keyWords: Array
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .item {
    padding: 10px 10px 5px 10px;
    div {
      display: inline-block;
      margin-bottom: 5px;
      border: 1px solid #1ab394;
      margin-right: 5px;
      border-radius: 3px;
      padding: 5px 7px;
      background-color: #d4f7e8;
      line-height: 100%;
      transition: all 0.15s ease-in-out;
    }

    div:hover {
      background-color: $color-white;
      a {
        color: $color-primary !important;
      }
    }
  }
</style>



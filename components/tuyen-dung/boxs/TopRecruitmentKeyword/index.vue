<template>
  <div class="box-container">
    <h4 class="box-title">
      <font-awesome-icon :icon="['fas', 'briefcase']"/>
      {{jobBoxTitle}}
    </h4>
    <div class="item">
      <div v-for="(item, index) in keyWords" :key="index">
        <a>{{item}}</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      jobBoxTitle: String,
    },
    data() {
      return {
        keyWords: ['Quản lý', 'Bán hàng', 'Nhân viên IT', 'Kỹ sư', 'Luật sư', 'Giáo viên', 'Thợ xây', 'Marketing',
                   'Quản lý', 'Bán hàng', 'Nhân viên IT', 'Kỹ sư', 'Luật sư', 'Giáo viên', 'Thợ xây', 'Marketing']
      }
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
      border: 1px solid $color-primary;
      margin-right: 5px;
      border-radius: 3px;
      padding: 5px 7px;
      background-color: $color-tags;
      line-height: 100%;
      font-weight: $fw-base-500;
      transition: all 0.15s ease-in-out;
    }

    div:hover {
      background-color: $color-white;
      cursor: pointer;
      a {
        color: $color-primary !important;
      }
    }
  }
</style>



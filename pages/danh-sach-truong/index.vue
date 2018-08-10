<template>
  <div>
    <div class="advanced-search-bar">
      <el-row class="field-search-bar">
        <el-row :gutter="8" class="nav-search-bar">
          <el-col
            :span="6"
            class="nav-search-bar--item"
            :class="{active: activeMenuItem === 'timvieclam'}"
          >
            <nuxt-link to="/tuyen-dung">
              <p @click="activeMenuItem = 'timvieclam'">
                <font-awesome-icon icon="briefcase"/>
                Tìm việc làm
              </p>
            </nuxt-link>
          </el-col>

          <el-col
            :span="6"
            class="nav-search-bar--item"
            :class="{active: activeMenuItem === 'timungvien' }"
          >
            <nuxt-link to="/ung-vien">
              <p @click="activeMenuItem = 'timungvien'">
                <font-awesome-icon :icon="['far', 'id-card']"/>
                Tìm ứng viên
              </p>
            </nuxt-link>
          </el-col>

          <el-col
            :span="6"
            class="nav-search-bar--item"
            :class="{active: activeMenuItem === 'timcongty' }"
          >
            <nuxt-link to="/cong-ty">
              <p @click=" activeMenuItem = 'timcongty'">
                <font-awesome-icon :icon="['far', 'building']"/>
                Tìm công ty
              </p>
            </nuxt-link>
          </el-col>

          <el-col
            :span="6"
            class="nav-search-bar--item"
            :class="{active: activeMenuItem === 'timtruong' }"
          >
            <nuxt-link to="/danh-sach-truong">
              <p @click="activeMenuItem = 'timtruong'">
                <font-awesome-icon icon="school"/>
                Tìm trường
              </p>
            </nuxt-link>
          </el-col>
        </el-row>
        <div class="search-bar">
          <el-row v-bind:gutter="20" v-if="activeMenuItem === 'timtruong'">
            <el-col :span="21">
              <div class="form-input">
                <font-awesome-icon icon="search"/>
                <el-input placeholder="Nhập tên trường cần tìm kiếm..." v-model="searchInput"
                          prefix-icon="el-icon-dai"></el-input>
              </div>
            </el-col>
            <el-col :span="3">
              <el-button>
                <font-awesome-icon icon="search"/>
                Tìm kiếm
              </el-button>
            </el-col>
          </el-row>
        </div>
      </el-row>
    </div>
    <div class="container">
      <el-row class="navigation-bar">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>
            <nuxt-link to="/">Trang chủ</nuxt-link>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            Danh sách trường
          </el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>

      <CompanyBox jobTitle="ỨNG VIÊN NĂNG ĐỘNG"/>
    </div>
  </div>

</template>

<script>
  import CompanyBox from '~/components/boxs/CompanyBox';
  import AdvanceSearchBar from '~/components/bars/AdvanceSearchBar';

  export default {
    components: {
      CompanyBox,
      AdvanceSearchBar,
    },
    data() {
      return {
        searchInput: '',
        activeMenuItem: 'timtruong'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs-variables";

  .container {
    width: $page-width;
    margin: 0 auto !important;
  }

  .navigation-bar {
    margin: $mg-top-bottom-20 auto;
    padding-left: 0;
  }

  .navigation-bar a {
    color: $color-primary;
  }

  .navigation-bar a:hover {
    color: $color-secondary;
  }

  .advanced-search-bar {
    background: url("https://halutech.com.vn/assets/images/bg.jpg");
    height: 100%;
    margin-top: 56px;
  }

  .field-search-bar {
    margin: 20px auto;
    width: $page-width;
  }

  .field-search-bar .el-row {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .nav-search-bar {
    display: flex;
    margin-top: 50px;
  }

  .search-bar {
    background-color: $color-secondary;
    color: $color-black;
    padding: 25px 20px;
    border-radius: 0 5px 5px 5px;
    margin-bottom: 30px;
    transition: all 1s ease-in-out;
  }

  .active {
    color: $color-white;
    background-color: $color-secondary;
  }

  .form-input {
    position: relative;

    padding-left: 0;
  }

  .form-input svg {
    position: absolute;
    left: 10px;
    font-size: $fs-large-18;
    z-index: 3;
    top: 10px;
    opacity: 0.5;
  }

  .el-col-21 {
    padding-left: 0 !important;
  }

  .el-col-3 {
    padding-right: 0 !important;
  }


  .el-button {
    outline: 0 none;
    transition: all 0.15s ease-in-out;
    background-color: $color-secondary;
    border: 1px solid $color-white;
    color: $color-white;
    font-size: 16px;
    height: 40px;
    width: 100%;
  }

  .el-button:hover {
    background-color: $color-primary;
    box-shadow: 0 0 10px $color-white;
    cursor: pointer;
  }

  .el-button:active {
    box-shadow: 0 0 0 transparent;
    transition: none;
    background-color: $color-secondary;
  }

  .nav-search-bar {
    width: 50%;
    text-align: center;
    margin-left: 0;
  }

  .nav-search-bar--item {
    background-color: $color-white;
    line-height: 40px;
    border-bottom: none;
    border-radius: 7px 7px 0 0;
    margin-right: 5px;
    color: $color-black;
    transition: all 0.15s ease-in-out;
  }

  .nav-search-bar--item:hover {
    cursor: pointer;
    background-color: $color-secondary;
    color: $color-white;
  }

  .nav-search-bar--item:active {
    cursor: pointer;
    background-color: $color-primary;
    color: $color-white;
    transition: none;
  }

  .active {
    color: $color-white !important;
    background-color: $color-secondary;
    cursor: default !important;
  }

  .active a {
    color: $color-white;
  }

  a {
    color: $color-black;
  }

  a:hover {
    color: $color-white;
  }

  .el-carousel__indicators--outside {
    position: static;
  }

</style>

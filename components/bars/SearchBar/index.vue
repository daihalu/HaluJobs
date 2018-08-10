<template>
  <div class="search-bar-container">
    <el-row :gutter="10" class="main-search-bar">
      <el-col :span="9" class="job-input">
        <div class="form-input">
          <font-awesome-icon icon="search"/>
          <el-input placeholder="Tiêu đề công việc, vị trí, địa điểm làm việc..." v-model="searchData.input"
                    prefix-icon="el-icon-dai"></el-input>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="selection-box">
          <font-awesome-icon :icon="['far', 'clipboard']"/>
          <el-select v-model="searchData.job" filterable placeholder="Tất cả ngành nghề">
            <el-option
              v-for="item in jobOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="selection-box">
          <font-awesome-icon icon="map-marker-alt"/>
          <el-select v-model="searchData.location" filterable placeholder="Tất cả địa điểm">
            <el-option
              v-for="item in workAddressOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="3">
        <el-button class="search-button">
          <font-awesome-icon icon="search"/>
          Tìm kiếm
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  import {JobOption} from '~/assets/js/data-options';

  export default {
    props: {
      type: String,
      size: Number
    },
    data() {
      const {
        jobs,
        workAddresses,
      } = JobOption;
      return {
        searchData: {
          input: '',
          job: '',
          location: '',
        },
        jobOptions: jobs,
        workAddressOptions: workAddresses,
      }
    },
    methods: {
      submitForm(formName) {
        this.activeBtn = true;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs-variables";

  .search-bar-container {
    width: 100%;
    margin-top: 56px;
    background-color: $color-secondary;
    padding: 10px 0;
  }

  .el-row {
    margin: 0 auto !important;
    padding: 5px 0;
    width: $page-width;
  }


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
    font-size: $fs-base-16;
    color: $color-black;
    opacity: 0.5;
  }

  .search-button {
    width: 100%;
    outline: 0 none;
    transition: all 0.15s ease-in-out;
    background-color: $color-secondary;
    border: 1px solid $color-white;
    color: $color-white;
    font-size: 16px;
    height: 40px;
    padding: 11px 15px;
  }

  .search-button:hover {
    background-color: $color-primary;
    box-shadow: 0 0 10px $color-white;
    cursor: pointer;
  }

  .search-button:active {
    box-shadow: 0 0 0 transparent;
    transition: none;
    background-color: $color-secondary;
  }


  .form-input {
    position: relative;
    margin-bottom: 10px;
    padding-left: 0;
  }

  .form-input svg {
    position: absolute;
    left: 10px;
    font-size: $fs-base-16;
    z-index: 3;
    top: 10px;
    opacity: 0.5;
  }

  .main-search-bar {
    margin-top: 10px !important;
  }

  .job-input {
    padding-left: 0 !important;
  }

  .el-col-3 {
    padding-right: 0 !important;
  }
</style>

<style>
  .el-input--suffix .el-input__inner,
  .el-input--prefix .el-input__inner {
    padding-left: 35px;
  }
</style>

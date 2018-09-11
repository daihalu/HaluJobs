<template>
  <div class="container">
    <el-row :gutter="10" class="search-bar">

      <el-col :span="9" class="job-input padding-left-0">
          <font-awesome-icon :icon="['fas', 'search']" class="svg-icon"/>
          <el-input
            placeholder="Tiêu đề công việc, vị trí, địa điểm làm việc..."
            v-model="searchData.input"
            prefix-icon="el-icon-dai"
          >
          </el-input>
      </el-col>

      <el-col :span="6" class="selection-box">
        <selection-box
          :options="jobOptions"
          iconPrefix="far"
          iconName="clipboard"
          placeHolder="Tất cả ngành nghề"
          @on_select="handleOnSelectJobOptions"
        />

      </el-col>

      <el-col :span="6" class="selection-box">
        <selection-box
          :options="workAddressOptions"
          iconPrefix="fas"
          iconName="map-marker-alt"
          placeHolder="Tất cả địa điểm"
          @on_select="handleOnSelectWorkAddress"
        />
      </el-col>

      <el-col :span="3" class="padding-right-0">
        <el-button
          class="search-button"

        >
          <font-awesome-icon :icon="['fas', 'search']"/>
          Tìm kiếm
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import SelectionBox from '~/components/public-components/boxs/SelectionBox';

  import {JobOption} from '~/assets/js/data-options';

  export default {
    components: {
      SelectionBox
    },
    data() {
      const {
        jobs,
        workAddresses,
      } = JobOption;
      return {
        searchData: {
          input: '',
          jobInput: '',
          workAddress: '',
        },
        jobOptions: jobs,
        workAddressOptions: workAddresses,
      }
    },
    methods: {
      handleOnSelectJobOptions(value) {
        this.searchData.jobInput = value;
      },
      handleOnSelectWorkAddress(value) {
        this.searchData.workAddress = value;
      },

    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .container {
    background-color: $color-secondary;
    padding: 15px 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .search-bar {
    width: $page-width;
  }

  .job-input {
    position: relative;
    svg {
      left: 8px;
    }
  }

  .selection-box {
    position: relative;
  }

  .el-select {
    width: 100%;
  }

  .svg-icon {
    position: absolute;
    z-index: 2;
    left: 12px;
    height: 40px;
    opacity: 0.5;
  }

  .search-button {
    width: 100%;
    background-color: $color-secondary;
    border: 1px solid $color-white;
    color: $color-white;
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

</style>

<style>


  .search-bar .el-input .el-input__inner,
  .search-bar .el-select .el-input__inner {
    border: none;
    font-weight: 300;
  }
</style>

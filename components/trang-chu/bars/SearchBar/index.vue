<template>
  <div class="container">
    <el-row :gutter="10" class="search-bar">

      <el-col :span="9" class="job-input padding-left-0">
        <font-awesome-icon :icon="['fas', 'search']" class="svg-icon"/>

        <el-autocomplete
          class="inline-input"
          v-model="searchData.input"
          :fetch-suggestions="querySearch"
          placeholder="Nhập tiêu đề công việc, vị trí, địa điểm làm việc..."
          :trigger-on-focus="false"
          @select="handleSelectSearchInput"
          prefix-icon="el-icon-dai"
        ></el-autocomplete>
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
          @click="handleOnClickSearch"
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

  import {ChangeAlias} from '~/assets/js/functions';
  import {JobOption} from '~/assets/js/data-options';

  export default {
    components: {
      SelectionBox
    },
    data() {
      const {
        jobs,
        workAddresses,
        jobTitles,
        workExperience,
        jobTypes,
        foreignLanguages,
        desiredSalaries,
        genders,
        qualifications,
        marriageStatuses
      } = JobOption;
      return {
        searchData: {
          input: '',
          jobInput: '',
          workAddress: '',
        },
        searchInputOptions: [],
        jobOptions: jobs,
        workAddressOptions: workAddresses,
        links: [],
      }
    },
    methods: {
      handleOnSelectJobOptions(value) {
        this.searchData.jobInput = value;
      },
      handleOnSelectWorkAddress(value) {
        this.searchData.workAddress = value;
      },
      handleSelectSearchInput(value) {
        this.searchData.input = value.value;
        console.log(value.value);
      },
      handleOnClickSearch() {
        console.log("Click");
        console.log(this.searchData);
      },

      querySearch(queryString, cb) {
        let job = this.jobOptions;
        let searchInput = ChangeAlias(queryString);
        console.log(searchInput);

        let results = searchInput ? job.filter(this.createFilter(searchInput)) : this.jobOptions.value;
        // call callback function to return suggestions
        cb(results);
      },
      createFilter(queryString) {
        return (job) => {
          let aliasJob = ChangeAlias(job.value);
          return (aliasJob.indexOf(queryString) === 0);
        };
      },

    },
    mounted() {
      // console.log('Created');
      this.searchInputOptions = this.jobOptions.concat(this.workAddressOptions);
      // console.log(this.searchInputOptions)
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

  .el-select,
  .el-autocomplete {
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

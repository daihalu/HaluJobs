<template>
  <div class="advanced-search-bar">
    <el-row class="field-search-bar">
      <nav-search-bar class="advanced-search-bar__nav"/>

      <div class="search-bar">
        <div>
          <el-row :gutter="10" class="main-search-bar">

            <el-col :span="9" class="job-input">
              <div class="search-input">
                <font-awesome-icon icon="search"/>
                <el-input
                  placeholder="Tiêu đề công việc, vị trí, địa điểm làm việc..."
                  v-model="searchData.jobInput"
                  prefix-icon="el-icon-halujobs"
                >
                </el-input>
              </div>
            </el-col>

            <el-col :span="6">
              <selection-box
                :options="jobOptions"
                iconPrefix="far"
                iconName="clipboard"
                placeHolder="Tất cả ngành nghề"
                @on_select="handleOnSelectJobOptions"
              />
            </el-col>

            <el-col :span="6">
              <selection-box
                :options="workAddressOptions"
                iconPrefix="fas"
                iconName="map-marker-alt"
                placeHolder="Tất cả địa điểm"
                @on_select="handleOnSelectWorkAddress"
              />
            </el-col>

            <el-col :span="3">
              <el-button class="search-button" @click="handleOnClickSearchButton">
                <font-awesome-icon icon="search"/>
                Tìm kiếm
              </el-button>
            </el-col>

          </el-row>

          <div class="advance-search-selections">
            <p class="advance-search--result">Tìm thấy 200000 kết quả</p>
            <p class="advance-search-bar--text" @click="handleOnClickShowAdvanceSearch"
               v-if="showAdvanceSearch == false">
              <font-awesome-icon icon="chevron-down"/>
              Chọn tìm kiếm nâng cao
            </p>
            <p class="advance-search-bar--text" @click="handleOnClickShowAdvanceSearch"
               v-if="showAdvanceSearch == true">
              <font-awesome-icon icon="chevron-up"/>
              Ẩn tìm kiếm nâng cao
            </p>
          </div>

          <transition name="advances-search-fade">
            <div v-if="showAdvanceSearch" class="advance-search-selections--options">
              <el-row :gutter="10">

                <el-col :span="8">
                  <selection-box
                    :options="jobTitleOptions"
                    iconPrefix="fas"
                    iconName="user"
                    placeHolder="Cấp bậc"
                    @on_select="handleOnSelectJobTitle"
                  />
                </el-col>

                <el-col :span="8">
                  <selection-box
                    :options="desiredSalaryOptions"
                    iconPrefix="fas"
                    iconName="dollar-sign"
                    placeHolder="Mức lương"
                    @on_select="handleOnSelectSalary"
                  />
                </el-col>

                <el-col :span="8">
                  <selection-box
                    :options="workExperienceOptions"
                    iconPrefix="fas"
                    iconName="user-clock"
                    placeHolder="Kinh nghiệm"
                    @on_select="handleOnSelectWorkExperience"
                  />
                </el-col>

              </el-row>
              <el-row :gutter="10" class="mg-top-10" style="margin-bottom: 5px">

                <el-col :span="8">
                  <selection-box
                    :options="jobTypeOptions"
                    iconPrefix="fas"
                    iconName="hotel"
                    placeHolder="Loại hình công việc"
                    @on_select="handleOnSelectJobType"
                  />
                </el-col>

                <el-col :span="8">
                  <selection-box
                    :options="genderOptions"
                    iconPrefix="fas"
                    iconName="transgender"
                    placeHolder="Giới tính"
                    @on_select="handleOnSelectGender"
                  />
                </el-col>

                <!--<el-col :span="8">-->
                <!--<selection-box-->
                <!--:options="foreignLanguageOptions"-->
                <!--iconPrefix="fas"-->
                <!--iconName="globe-asia"-->
                <!--placeHolder="Trình độ ngoại ngữ"-->
                <!--@on_select="handleOnSelectForeignLanguage"-->
                <!--/>-->
                <!--</el-col>-->
              </el-row>
            </div>
          </transition>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
  import SelectionBox from '~/components/public-components/boxs/SelectionBox';
  import NavSearchBar from '~/components/public-components/bars/NavSearchBar';

  import {JobOption} from '~/assets/js/data-options';

  export default {
    components: {
      SelectionBox,
      NavSearchBar
    },
    data() {
      const {
        jobTitles,
        jobs,
        workAddresses,
        workExperience,
        jobTypes,
        foreignLanguages,
        desiredSalaries,
        genders,
        qualifications,
      } = JobOption;
      return {
        searchData: {
          jobInput: '',
          workAddress: '',
          jobTitle: '',
          salary: '',
          workExperience: '',
          jobType: '',
          gender: '',
          foreignLanguage: ''
        },
        advancedSearchData: {
          job: '',
          workAddress: '',
          jobTitle: '',
          workExperience: '',
          jobType: '',

        },
        showAdvanceSearch: false,
        jobOptions: jobs,
        workAddressOptions: workAddresses,
        workExperienceOptions: workExperience,
        jobTitleOptions: jobTitles,
        jobTypeOptions: jobTypes,
        foreignLanguageOptions: foreignLanguages,
        desiredSalaryOptions: desiredSalaries,
        genderOptions: genders,
        qualificationOption: qualifications,
        numberJobShown: 5
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOnClickShowAdvanceSearch() {
        this.showAdvanceSearch = !this.showAdvanceSearch;
      },
      handleOnClickSearchButton() {
        console.log("Child: ");
        console.log(this.searchData);

        this.$emit("on_click_search_button", this.searchData);
      },
      handleOnSelectJobOptions(value) {
        this.searchData.jobInput = value;
      },
      handleOnSelectWorkAddress(value) {
        this.searchData.workAddress = value;
      },
      handleOnSelectJobTitle(value) {
        this.searchData.jobTitle = value;
      },
      handleOnSelectSalary(value) {
        this.searchData.salary = value;
        console.log(value);
      },
      handleOnSelectWorkExperience(value) {
        this.searchData.workExperience = value;
      },
      handleOnSelectJobType(value) {
        this.searchData.jobType = value;
      },
      handleOnSelectGender(value) {
        this.searchData.gender = value;
      },
      handleOnSelectForeignLanguage(value) {
        this.searchData.foreignLanguage = value;
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

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

  .advanced-search-bar__nav {
    margin-top: 50px;
  }

  .search-bar {
    background-color: $color-secondary;
    color: $color-black;
    padding: 5px;
    border-radius: 0 $br-5 $br-5 $br-5;
    margin-bottom: 30px;
    transition: all 1s ease-in-out;
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

  .advance-search-selections {
    margin-bottom: 10px;
    p {
      display: inline;
    }
    .advance-search--result {
      padding-left: 10px;
      color: $color-white;
    }
    .advance-search-bar--text {
      float: right;
      padding-right: 10px;
      color: $color-white;
    }
    .advance-search-bar--text:hover {
      cursor: pointer;
    }
  }
  
  .search-input {
    position: relative;
    margin-left: 5px;
    margin-bottom: 10px;
    padding-left: 0;
    svg {
      position: absolute;
      left: 10px;
      font-size: $fs-base-16;
      z-index: 3;
      top: 10px;
      opacity: 0.5;
    }
  }

  .main-search-bar {
    margin-top: 10px;
  }

  .job-input {
    padding-left: 0 !important;
  }


  .advances-search-fade-enter-active {
    transition: all .2s ease;
  }

  .advances-search-fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .advances-search-fade-enter, .advances-search-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }

</style>

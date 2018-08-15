<template>
  <div>
    <advanced-search @on_click_search_button="handleOnClickSearchButton"/>

    <div class="container">

      <breadcrumb :breadcrumbArr="breadcrumb" title="Danh sách ứng viên" class="mg-top-15"/>

      <active-candidate-box
        jobBoxTitle="Ứng viên năng động"
        :candidateList="activeCandidateList"
        @on_click_card="handleOnClickActiveCandidateCard"
        class="mg-top-15"
      />

      <el-row :gutter="20">
        <el-col :span="16">
          <NewestCandidateBox jobTitle="HỒ SƠ ỨNG VIÊN MỚI NHẤT"/>
        </el-col>
        <el-col :span="8">

          <div class="job-list">
            <h4>
              <font-awesome-icon :icon="['fas', 'briefcase']"/>
              ỨNG VIÊN THEO NGÀNH NGHỀ
            </h4>
            <ul v-for="index in numberJobShown" :key="index">
              <nuxt-link to="/ung-vien">
                <li>{{jobOptions[index].value}}</li>
              </nuxt-link>
            </ul>

            <div class="more-job">
              <div v-if="numberJobShown == 5" @click="numberJobShown = jobOptions.length - 1">
                <font-awesome-icon :icon="['fas', 'chevron-down']"/>
                Xem thêm
              </div>

              <div v-if="numberJobShown != 5" @click="numberJobShown = 5">
                <font-awesome-icon :icon="['fas', 'chevron-up']"/>
                Thu gọn
              </div>

            </div>
          </div>

          <!--advanced search bar-->
        </el-col>
      </el-row>

      <statistical-box class="mg-top-15"/>
    </div>
  </div>

</template>

<script>

  import AttractiveJobCard from '~/components/cards/AttractiveJobCard';
  import NewestCandidateBox from '~/components/boxs/NewestCandidateBox';
  import {JobOption} from '~/assets/js/data-options';

  import AdvancedSearch from '~/components/ung-vien/bar/AdvancedSearch';
  import Breadcrumb from '~/components/public-components/bars/Breadcrumb';
  import ActiveCandidateBox from '~/components/ung-vien/boxs/ActiveCandidateBox';

  import StatisticalBox from '~/components/public-components/boxs/StatisticalBox';

  export default {
    components: {

      AttractiveJobCard,
      NewestCandidateBox,

      AdvancedSearch,
      Breadcrumb,
      ActiveCandidateBox,
      StatisticalBox
    },
    head() {
      return {
        title: this.title
      };
    },
    layout: 'simple',
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
        qualifications
      } = JobOption;

      return {
        title: 'Tìm kiếm ứng viên chất lượng cao',
        breadcrumb: [
          {
            name: 'Trang chủ',
            url: '/'
          },
        ],
        searchData: {
          input: '',
          job: '',
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
        activeMenuItem: 'timungvien',
        showAdvanceSearch: false,
        activeBtn: '',
        jobOptions: jobs,
        workAddressOptions: workAddresses,
        workExperienceOptions: workExperience,
        jobTitleOptions: jobTitles,
        jobTypeOptions: jobTypes,
        foreignLanguageOptions: foreignLanguages,
        desiredSalaryOptions: desiredSalaries,
        genderOptions: genders,
        qualificationOptions: qualifications,
        numberJobShown: 5,
        activeCandidateList: [
          {
            seen: false,
            position: 'Nhân viên kinh doanh',
            candidateName: 'Nguyễn Văn Đại',
            workExperience: '9 năm',
            profileUrl: '/ho-so',
            avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Shahter-Reak_M_2015_cropped_%2818%29.jpg/200px-Shahter-Reak_M_2015_cropped_%2818%29.jpg'
          },
        ]
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOnClickShowAdvanceSearch() {
        this.showAdvanceSearch = !this.showAdvanceSearch;
      },
      handleOnClickActiveCandidateCard(value) {
        console.log("Ứng viên");
        console.log(value);
        this.activeCandidateList.seen = true;
      }
    },
    created() {

    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .container {
    width: $page-width;
    margin: 0 auto;
  }

  .navigation-bar {
    margin: $mg-top-bottom-15 auto;
    padding-left: 0;
  }

  .navigation-bar a {
    color: $color-primary;
  }

  .navigation-bar a:hover {
    color: $color-secondary;
  }

  .advanced-search-box,
  .banner-box,
  .job-list {
    padding: $padding-border-box-10;
    background-color: $color-white;
    margin: $mg-top-bottom-15 auto;
  }

  h4 {
    border-bottom: 1px solid $color-border;
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-size: $fs-large-18;
    font-weight: $fw-base-500;
  }

  ul {
    list-style-type: none;
    padding-left: 5px;
  }

  ul li {
    line-height: $line-height-30;
    border-bottom: 1px dotted $color-primary;
  }

  .job-list ul a li {
    color: $color-primary;
  }

  .job-list ul a li:hover {
    color: $color-secondary;
  }

  .banner-box img {
    width: 100%;
  }

  .statistical-box {
    background-color: $color-pink;
    padding: 20px;
    color: $color-white;
    border-radius: $br-5;
    margin-bottom: 20px;
  }

  .statistical-box .el-col {
    text-align: center;
  }

  .statistical-box .el-col h3 {
    font-weight: $fw-base-500;
    font-size: 30px;
    line-height: $line-height-50;
  }

  .box-right {
    text-align: center;
  }

  .search-button {
    width: 100%;
    outline: 0 none;
    transition: all 0.15s ease-in-out;
    background-color: $color-secondary;
    border: 1px solid $color-white;
    color: $color-white;
    height: 40px;
    font-size: 16px;
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

  .advanced-search-button {
    font-size: $fs-base-16;
    outline: 0 none;
    transition: all 0.15s ease-in-out;
    background-color: $color-primary;
    color: $color-white;
    font-weight: $fw-base-500;
  }

  .advanced-search-button:hover {
    background-color: $color-white;
    color: $color-primary;
    border-color: $color-primary;
    box-shadow: 0 0 5px $color-secondary;
    cursor: pointer;
  }

  .advanced-search-button:active {
    box-shadow: 0 0 0 transparent;
    transition: none;
    background-color: $color-primary;
    color: $color-white;
  }

  .job-list div {
    text-align: right;
  }

  .more-job {
    color: $color-primary;
    margin-top: 10px;
    margin-bottom: 5px;
    width: 100%;
  }

  .more-job:hover {
    cursor: pointer;
    color: $color-secondary;
  }

  .more-job:active {
    cursor: pointer;
    color: $color-primary;
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

  .search-bar {
    background-color: $color-secondary;
    color: $color-black;
    padding: 5px;
    border-radius: 0 $br-5 $br-5 $br-5;
    margin-bottom: 30px;
    transition: all 1s ease-in-out;
  }

  .advance-search-selections {
    margin-bottom: 10px;
  }

  .advance-search-selections p {
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

  .form-input {
    position: relative;
    margin-left: 5px;
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

  .nav-search-bar {
    display: flex;
    margin-top: 50px;
    width: 50%;
    text-align: center;
    margin-left: 0;
  }

  .nav-search-bar--item {
    background-color: $color-white;
    line-height: 40px;
    border-bottom: none;
    border-radius: $br-5 $br-5 0 0;
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
    background-color: $color-secondary;
    color: $color-white;
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

</style>

<style>
  .el-input--suffix .el-input__inner,
  .el-input--prefix .el-input__inner {
    padding-left: 35px;
  }
</style>




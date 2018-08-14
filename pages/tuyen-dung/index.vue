<template>
  <div>
    <advanced-search @on_click_search_button="handleOnClickSearchButton"/>

    <div class="container">

      <breadcrumb :breadcrumbArr="breadcrumb" title="Tuyển dụng" class="mg-top-15"/>

      <quick-job-box
        jobBoxTitle="Tuyển dụng nhanh"
        :jobList="quickJobList"
        class="mg-top-15"
      />

      <el-row :gutter="20">
        <el-col :span="16">

          <hot-job-box
            jobBoxTitle="Tuyển dụng tiêu điểm"
            :jobList="hotJobList"
            class="mg-top-15"
          />

          <new-job-box
            jobBoxTitle="Việc làm mới"
            :jobList="newJobList"
            class="mg-top-15"
          />
        </el-col>
        <el-col :span="8">
          <div class="attractive-job-box">
            <h4>
              <font-awesome-icon :icon="['fas', 'briefcase']"/>
              VIỆC LÀM HẤP DẪN
            </h4>
            <div v-for="item in 5" :key="item">
              <AttractiveJobCard/>
            </div>
          </div>

          <!--<div class="banner-box-container">-->
          <!--<nuxt-link to="/">-->
          <!--<img-->
          <!--src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/27459795_1516131271837402_799174223676649307_n.png?_nc_cat=0&oh=8de849a451cb5afc9918e09de0cc6407&oe=5BE0F15C"/>-->
          <!--</nuxt-link>-->
          <!--</div>-->

          <div class="top-key-word-box">
            <h4>
              <font-awesome-icon :icon="['fas', 'briefcase']"/>
              TOP TỪ KHÓA TUYỂN DỤNG
            </h4>
            <div v-for="item in 13" :key="item">
              <p class="top-key-words">
                <a>Quản lý</a>
              </p>
            </div>
          </div>

          <!--Tim kiem nang cao-->
        </el-col>
      </el-row>
      <el-row class="statistical-box">
        <el-col :span="6">
          <h3>4.000.000</h3>
          <p>Ứng viên</p>
        </el-col>
        <el-col :span="6">
          <h3>2.000.000</h3>
          <p>Việc làm</p>
        </el-col>
        <el-col :span="6">
          <h3>100.000</h3>
          <p>Nhà tuyển dụng</p>
        </el-col>
        <el-col :span="6">
          <h3>9.000.000</h3>
          <p>Lượt ứng tuyển</p>
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script>
  import TheUrgentJobBox from '~/components/boxs/TheUrgentJobBox';
  import AdvanceSearchBar from '~/components/bars/AdvanceSearchBar';
  import HighSalaryJobBox from '~/components/boxs/HighSalaryJobBox';
  import AttractiveJobCard from '~/components/cards/AttractiveJobCard';
  import ColorlessNewJobBoxCol16 from '~/components/boxs/ColorlessNewJobBoxCol16';

  import AdvancedSearch from '~/components/tuyen-dung/bar/AdvancedSearch';
  import Breadcrumb from '~/components/public-components/bars/Breadcrumb';
  import QuickJobBox from '~/components/public-components/boxs/MainJobBox';
  import HotJobBox from '~/components/tuyen-dung/boxs/HotJobBox';
  import NewJobBox from '~/components/tuyen-dung/boxs/NewJobBox';

  import {JobOption} from '~/assets/js/data-options';


  export default {
    components: {
      TheUrgentJobBox,
      AdvanceSearchBar,
      HighSalaryJobBox,
      AttractiveJobCard,
      ColorlessNewJobBoxCol16,

      AdvancedSearch,
      Breadcrumb,
      QuickJobBox,
      HotJobBox,
      NewJobBox
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
      } = JobOption;
      return {
        title: 'Tuyển dụng thần tốc | Tuyển dụng uy tín',
        breadcrumb: [
          {
            name: 'Trang chủ',
            url: '/'
          },
        ],
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
        activeMenuItem: 'timvieclam',
        jobOptions: jobs,
        workAddressOptions: workAddresses,
        workExperienceOptions: workExperience,
        jobTitleOptions: jobTitles,
        jobTypeOptions: jobTypes,
        numberJobShown: 5,
        quickJobList: [
          {
            position: 'Nhân Viên Kinh Doanh Thiết',
            companyName: 'Công ty cổ phần Hoàng Kim',
            salary: '10 - 20 triệu',
            deadline: '13/7/2018',
            jobUrl: '/tuyen-dung/viec-lam',
            avatarUrl: 'https://www.codyhub.com/wp-content/uploads/2017/07/i2.jpg'
          },
        ],
        hotJobList: [
          {
            position: 'Nhân Viên Marketing Online - Được Đào Tạo Từ A-Z',
            companyName: 'Công Ty Cổ Phần Tư Vấn Bất Động Sản Phương Đông',
            salary: '10 triệu - 20 triệu',
            deadline: '13/7/2018',
            workAddress: 'Hà Nội',
            jobUrl: '/tuyen-dung/viec-lam',
            avatarUrl: 'http://www.spulsa.info/wp-content/uploads/photo-logos-free-online-logo-maker-design-a-custom-logo-canva.png'
          }
        ],
        newJobList: [
          {
            position: 'Nhân Viên Marketing Online - Được Đào Tạo Từ A-Z',
            companyName: 'Công Ty Cổ Phần Tư Vấn Bất Động Sản Phương Đông',
            salary: '10 triệu - 20 triệu',
            expiryDate: '13/7/2018',
            location: 'Hà Nội',
            jobUrl: '/tuyen-dung/viec-lam',
          }
        ]
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOnClickSearchButton(value) {
        this.searchData = value;
        console.log("Parent");
        console.log(this.searchData)
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .container {
    width: $page-width;
    margin: 0 auto;
  }

  .attractive-job-box,
  .advanced-search-box,
  .banner-box,
  .top-key-word-box,
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

  .top-key-word-box div {
    display: inline-block;
    margin-bottom: 12px;
  }

  .top-key-words > a {
    border: 1px solid #1ab394;
    margin-right: 5px;
    border-radius: 3px;
    padding: 2px;
    background-color: #d4f7e8;
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

  .job-list ul a li {
    color: $color-primary;
  }

  .job-list ul a li:hover {
    color: $color-secondary;
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

  .el-carousel__indicators--outside {
    position: static;
  }

</style>

<style>

</style>

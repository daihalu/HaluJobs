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
              <p @click="activeMenuItem = 'timcongty'">
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
          <div>
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
                  <el-select v-model="searchData.workAddress" filterable placeholder="Tất cả địa điểm">
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
                    <div class="selection-box">
                      <font-awesome-icon :icon="['fas', 'user']"/>
                      <el-select v-model="searchData.jobTitle" filterable placeholder="Cấp bậc">
                        <el-option
                          v-for="item in jobTitleOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </el-col>
                  <el-col :span="8">

                    <div class="selection-box">
                      <font-awesome-icon icon="dollar-sign"/>
                      <el-select v-model="searchData.salary" filterable placeholder="Mức lương">
                        <el-option
                          v-for="item in desiredSalaryOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </el-col>
                  <el-col :span="8">

                    <div class="selection-box">
                      <font-awesome-icon icon="user-clock"/>
                      <el-select v-model="searchData.workExperience" filterable placeholder="Kinh nghiệm">
                        <el-option
                          v-for="item in workExperienceOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="10">
                  <el-col :span="8">
                    <div class="selection-box">
                      <font-awesome-icon icon="hotel"/>
                      <el-select v-model="searchData.jobType" filterable placeholder="Loại hình công việc">
                        <el-option
                          v-for="item in jobTypeOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="selection-box">
                      <font-awesome-icon icon="transgender"/>
                      <el-select v-model="searchData.gender" filterable placeholder="Giới tính">
                        <el-option
                          v-for="item in genderOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </el-col>
                  <!--<el-col :span="8">-->

                    <!--<div class="selection-box-container">-->
                      <!--<font-awesome-icon icon="globe-asia"/>-->
                      <!--<el-select v-model="searchData.foreignLanguage" filterable placeholder="Trình độ ngoại ngữ">-->
                        <!--<el-option-->
                          <!--v-for="item in foreignLanguageOptions"-->
                          <!--:key="item.value"-->
                          <!--:label="item.label"-->
                          <!--:value="item.value">-->
                        <!--</el-option>-->
                      <!--</el-select>-->
                    <!--</div>-->
                  <!--</el-col>-->
                </el-row>
              </div>
            </transition>
          </div>
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
            Tuyển dụng
          </el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>

      <TheUrgentJobBox jobTitle="TUYỂN DỤNG NHANH"/>

      <el-row :gutter="20">
        <el-col :span="16">
          <HighSalaryJobBox jobTitle="TUYỂN DỤNG TIÊU ĐIỂM"/>
          <ColorlessNewJobBoxCol16 jobTitle="VIỆC LÀM MỚI"/>
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

          <div class="advanced-search-box">
            <h4>
              <font-awesome-icon :icon="['fas', 'briefcase']"/>
              TÌM KIẾM NÂNG CAO
            </h4>
            <div class="box-right">
              <div class="selection-box">
                <font-awesome-icon :icon="['far', 'clipboard']"/>
                <el-select v-model="advancedSearchData.job" filterable placeholder="Ngành nghề">
                  <el-option
                    v-for="item in jobOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>

              <div class="selection-box">
                <font-awesome-icon icon="map-marker-alt"/>
                <el-select v-model="advancedSearchData.workAddress" filterable placeholder="Vị trí">
                  <el-option
                    v-for="item in workAddressOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>

              <div class="selection-box">
                <font-awesome-icon icon="user-clock"/>
                <el-select v-model="advancedSearchData.workExperience" filterable placeholder="Năm kinh nghiệm">
                  <el-option
                    v-for="item in workExperienceOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>

              <div class="selection-box">
                <font-awesome-icon icon="user-tie"/>
                <el-select v-model="advancedSearchData.jobTitle" filterable placeholder="Cấp bậc">
                  <el-option
                    v-for="item in jobTitleOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>

              <div class="selection-box">
                <font-awesome-icon icon="hotel"/>
                <el-select v-model="advancedSearchData.jobType" filterable placeholder="Loại hình công việc">
                  <el-option
                    v-for="item in jobTypeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>

              <el-button
                size="medium"
                class="advanced-search-button">
                <font-awesome-icon icon="search"/>
                Tìm kiếm
              </el-button>

            </div>
          </div>
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

  import {JobOption} from '~/assets/js/data-options';


  export default {
    components: {
      TheUrgentJobBox,
      AdvanceSearchBar,
      HighSalaryJobBox,
      AttractiveJobCard,
      ColorlessNewJobBoxCol16
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
        activeMenuItem: 'timvieclam',
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
      hello() {
        alert("Hello");
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .container {
    width: $page-width;
    margin: 0 auto !important;
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

  .advanced-search-button:hover{
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
  .el-input--suffix .el-input__inner,
  .el-input--prefix .el-input__inner {
    padding-left: 35px;
  }
</style>

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

      <el-row :gutter="15">
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

          <attractive-job-box
            jobBoxTitle="Việc làm hấp dẫn"
            :jobList="attractiveJobList"
            class="mg-top-15"
          />

          <!--<div class="banner-box-container">-->
          <!--<nuxt-link to="/">-->
          <!--<img-->
          <!--src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/27459795_1516131271837402_799174223676649307_n.png?_nc_cat=0&oh=8de849a451cb5afc9918e09de0cc6407&oe=5BE0F15C"/>-->
          <!--</nuxt-link>-->
          <!--</div>-->

          <top-recruitment-keyword
            jobBoxTitle="Top từ khoá tuyển dụng"
            v-bind:keyWords="keyWords"
            class="mg-top-15"
          />

        </el-col>
      </el-row>

      <statistical-box class="mg-top-15"/>
    </div>
  </div>

</template>

<script>
  import AdvancedSearch from '~/components/tuyen-dung/bar/AdvancedSearch';
  import Breadcrumb from '~/components/public-components/bars/Breadcrumb';
  import QuickJobBox from '~/components/public-components/boxs/MainJobBox';
  import HotJobBox from '~/components/tuyen-dung/boxs/HotJobBox';
  import NewJobBox from '~/components/tuyen-dung/boxs/NewJobBox';
  import AttractiveJobBox from '~/components/tuyen-dung/boxs/AttractiveJobBox';
  import TopRecruitmentKeyword from '~/components/tuyen-dung/boxs/TopRecruitmentKeyword';
  import StatisticalBox from '~/components/public-components/boxs/StatisticalBox';

  import {JobOption} from '~/assets/js/data-options';

  export default {
    components: {
      AdvancedSearch,
      Breadcrumb,
      QuickJobBox,
      HotJobBox,
      NewJobBox,
      AttractiveJobBox,
      TopRecruitmentKeyword,
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
        ],
        attractiveJobList: [
          {
            position: "Giám đốc điều hành nhân sự",
            companyName: "Công ty cổ phần Đại Nam",
            salary: "15 - 22 triệu",
            deadline: "30/7/2018",
            workAddress: "Sài Gòn",
            avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_V7avrT3e0yZsQ_lVZgrMaE_fUA-8RX04mDkxTPO2SgoGU-Jjg",
            jobUrl: "/tuyen-dung/viec-lam",
          }
        ],
        keyWords: ['Quản lý', 'Bán hàng', 'Nhân viên IT', 'Kỹ sư', 'Luật sư', 'Giáo viên', 'Thợ xây', 'Marketing']
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
</style>


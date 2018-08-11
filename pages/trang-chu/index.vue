<template>
  <div>
    <search-bar/>
    <div class="home-container">
      <breadcrumb :breadcrumbObj="hotJobList" class="mg-top-15"/>

      <banner class="mg-top-15"/>

      <new-job-box class="mg-top-15"/>

      <function-box class="mg-top-15"/>

      <main-job-box
        jobTitle="VIỆC LÀM TUYỂN GẤP"
        class="mg-top-15"
      />

      <banner class="mg-top-15"/>

      <el-row :gutter="16">
        <el-col :span="16">
          <attractive-job-box
            jobTitle="VIỆC LÀM HẤP DẪN"
            class="mg-top-15"
          />

          <HighSalaryJobBox
            jobTitle="VIỆC LÀM LƯƠNG CAO"
            class="mg-top-15"
          />
        </el-col>
        <el-col :span="8">
          <top-employers
            :employers="employers"
            class="mg-top-15"
          />

          <email-subscriber-box class="mg-top-15"/>

          <div class="banner-box">
            <nuxt-link to="/">
              <img src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/27459795_1516131271837402_799174223676649307_n.png?_nc_cat=0&oh=8de849a451cb5afc9918e09de0cc6407&oe=5BE0F15C"/>
            </nuxt-link>
          </div>

          <job-searching-box
            :jobList="jobList"
            class="mg-top-15"
          />
        </el-col>
      </el-row>

      <hot-line-box class="mg-top-15"/>

      <location-job-box class="mg-top-15"/>

      <statistical-box class="mg-top-15"/>
    </div>

  </div>
</template>

<script>
  import SearchBar from '~/components/public-components/bars/SearchBar';
  import Breadcrumb from '~/components/public-components/bars/Breadcrumb';
  import Banner from '~/components/trang-chu/boxs/Banner';
  import NewJobBox from '~/components/trang-chu/boxs/NewJobBox';
  import FunctionBox from '~/components/trang-chu/boxs/FunctionBox';
  import MainJobBox from '~/components/public-components/boxs/MainJobBox';
  import AttractiveJobBox from '~/components/trang-chu/boxs/AttractiveJobBox';
  import HighSalaryJobBox from '~/components/trang-chu/boxs/HighSalaryJobBox';
  import TopEmployers from '~/components/trang-chu/boxs/TopEmployers';
  import EmailSubscriberBox from '~/components/trang-chu/boxs/EmailSubscriberBox';
  import JobSearchingBox from '~/components/trang-chu/boxs/JobSearchingBox';
  import HotLineBox from '~/components/trang-chu/boxs/HotLineBox';
  import LocationJobBox from '~/components/trang-chu/boxs/LocationJobBox';
  import StatisticalBox from '~/components/trang-chu/boxs/StatisticalBox';

  import {JobOption} from '~/assets/js/data-options';


  export default {
    components: {
      SearchBar,
      Breadcrumb,
      FunctionBox,
      Banner,
      NewJobBox,
      MainJobBox,
      AttractiveJobBox,
      HighSalaryJobBox,
      TopEmployers,
      EmailSubscriberBox,
      JobSearchingBox,
      HotLineBox,
      LocationJobBox,
      StatisticalBox
    },
    head() {
      return {
        title: this.title
      }
    },
    layout: 'default',
    data() {
      const {jobs} = JobOption;
      return {
        title: 'HaluJobs - Tuyển dụng thần tốc',
        employers: [
          {
            companyName: 'Công ty cổ phần đầu tư bất động sản Thiên Đường',
            avatarUrl: 'https://t3.ftcdn.net/jpg/01/97/43/68/500_F_197436858_tA3mc2cKkeQbn0jk9ZVScv7alCp92w8m.jpg',
            employerUrl: '/nha-tuyen-dung'
          },
          {
            companyName: 'Công ty cổ phần Paragon',
            avatarUrl: 'http://www.gostudiorama.com/wp-content/uploads/2018/06/affordable-logo-designs-logo-design-contests-29-affordable-custom-logo-design-online-in-music-logo.png',
            employerUrl: '/nha-tuyen-dung'
          },
          {
            companyName: 'Công ty TNHH Kostroma',
            avatarUrl: 'https://i.pinimg.com/736x/82/d7/88/82d788d2dae8879c903d16a3b6d68001--sun-logo-book-logo.jpg',
            employerUrl: '/nha-tuyen-dung'
          },
          {
            companyName: 'Công ty cổ phần đầu tư bất động sản Capitals',
            avatarUrl: 'http://www.gostudiorama.com/wp-content/uploads/2018/06/logo-design-ideas-free-download-29-best-property-company-logo-images-on-pinterest-company-logo-free-logo-maker.jpg',
            employerUrl: '/nha-tuyen-dung'
          },
          {
            companyName: 'Công ty cổ phần đầu tư bất động sản Thiên Đường 2',
            avatarUrl: 'https://t3.ftcdn.net/jpg/01/97/43/68/500_F_197436858_tA3mc2cKkeQbn0jk9ZVScv7alCp92w8m.jpg',
            employerUrl: '/nha-tuyen-dung'
          },
          {
            companyName: 'Công ty cổ phần đầu tư bất động sản Thiên Đường 33',
            avatarUrl: 'http://www.gostudiorama.com/wp-content/uploads/2018/06/logo-design-ideas-free-download-29-best-property-company-logo-images-on-pinterest-company-logo-free-logo-maker.jpg',
            employerUrl: '/nha-tuyen-dung'
          },
          {
            companyName: 'Công ty cổ phần đầu tư bất động sản Thiên Đường 4',
            avatarUrl: 'https://t3.ftcdn.net/jpg/01/97/43/68/500_F_197436858_tA3mc2cKkeQbn0jk9ZVScv7alCp92w8m.jpg',
            employerUrl: '/nha-tuyen-dung'
          },
          {
            companyName: 'Công ty cổ phần đầu tư bất động sản Thiên Đường 5',
            avatarUrl: 'http://www.gostudiorama.com/wp-content/uploads/2018/06/logo-design-ideas-free-download-29-best-property-company-logo-images-on-pinterest-company-logo-free-logo-maker.jpg',
            employerUrl: '/nha-tuyen-dung'
          },
          {
            companyName: 'Công ty cổ phần đầu tư bất động sản Thiên Đường 6',
            avatarUrl: 'https://t3.ftcdn.net/jpg/01/97/43/68/500_F_197436858_tA3mc2cKkeQbn0jk9ZVScv7alCp92w8m.jpg',
            employerUrl: '/nha-tuyen-dung'
          }
        ],
        jobList: jobs,
        hotJobList: [
          {
            name: 'Nhân viên kinh doanh',
            url: '/'
          },
          {
            name: 'Bán hàng',
            url: '/'
          },
          {
            name: 'IT phần mềm',
            url: '/'
          },
          {
            name: 'IT phần cứng/mạng',
            url: '/'
          },
          {
            name: 'Kế toán kiểm toán',
            url: '/'
          },
          {
            name: 'Ngân hàng',
            url: '/'
          },
          {
            name: 'Lái tàu',
            url: '/'
          },
          {
            name: 'Dược sĩ',
            url: '/'
          },
          {
            name: 'Cơ khí chế tạo',
            url: '/'
          },
          {
            name: 'Ngành nghề khác',
            url: '/'
          },
        ]
      }
    },
    methods: {
      submitForm(formName) {
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
  @import "~assets/css/halujobs_variables";

  .home-container {
    width: $page-width;
    margin: 0 auto !important;
  }

  .banner-box img {
    width: 100%;
    padding: $padding-border-box-10;
    background-color: $color-white;
    margin-top: 15px;
    border-radius: $br-5;
  }
</style>


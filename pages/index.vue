<template>
  <div>
    <search-bar/>
    <div class="home-container">
      <hot-job-bar class="mg-top-15"/>

      <banner class="mg-top-15"/>

      <new-job-bar class="mg-top-15"/>

      <function-box class="mg-top-15"/>

      <urgent-job-box
        jobBoxTitle="Việc làm tuyển gấp"
        class="mg-top-15"
      />

      <banner class="mg-top-15"/>

      <el-row :gutter="15">
        <el-col :span="16">
          <attractive-job-box
            jobBoxTitle="Việc làm hấp dẫn"
            :jobs="jobs"
            class="mg-top-15"
          />

          <high-salary-job-box
            jobBoxTitle="Việc làm lương cao"
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
              <img
                src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/27459795_1516131271837402_799174223676649307_n.png?_nc_cat=0&oh=8de849a451cb5afc9918e09de0cc6407&oe=5BE0F15C"/>
            </nuxt-link>
          </div>

          <job-searching-box
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
  import NavBar from '~/components/public-components/bars/NavBar';
  import SearchBar from '~/components/trang-chu/bars/SearchBar';
  import HotJobBar from '~/components/trang-chu/bars/HotJobBar';
  import Banner from '~/components/trang-chu/boxs/Banner';
  import NewJobBar from '~/components/trang-chu/bars/NewJobBar';
  import FunctionBox from '~/components/trang-chu/boxs/FunctionBox';
  import UrgentJobBox from '~/components/trang-chu/boxs/UrgentJobBox';
  import AttractiveJobBox from '~/components/trang-chu/boxs/AttractiveJobBox';
  import HighSalaryJobBox from '~/components/trang-chu/boxs/HighSalaryJobBox';
  import TopEmployers from '~/components/trang-chu/boxs/TopEmployers';
  import EmailSubscriberBox from '~/components/trang-chu/boxs/EmailSubscriberBox';
  import JobSearchingBox from '~/components/trang-chu/boxs/JobSearchingBox';
  import HotLineBox from '~/components/trang-chu/boxs/HotLineBox';
  import LocationJobBox from '~/components/trang-chu/boxs/LocationJobBox';
  import StatisticalBox from '~/components/public-components/boxs/StatisticalBox';

  import {mapState, mapGetters, mapActions} from 'vuex';
  import axios from 'axios';

  export default {
    components: {
      NavBar,
      SearchBar,
      HotJobBar,
      FunctionBox,
      Banner,
      NewJobBar,
      UrgentJobBox,
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
    async asyncData() {
      let {data} = await axios.get('https://halujobs.herokuapp.com/jobs?size=50');

      return {
        jobs: data.jobs,
      };
    },
    data() {
      return {
        title: 'HaluJobs - Tuyển dụng thần tốc',
        hasDoneGettingData: false,
        loading: true,
        employers: [
          {
            companyName: 'Công ty cổ phần đầu tư bất động sản Thiên Đường',
            avatarUrl: 'https://t3.ftcdn.net/jpg/01/97/43/68/500_F_197436858_tA3mc2cKkeQbn0jk9ZVScv7alCp92w8m.jpg',
            employerUrl: '/nha-tuyen-dung'
          },
          {
            companyName: 'Công ty cổ phần Paragon',
            avatarUrl: 'https://www.logogarden.com/wp-content/uploads/lg-logo-samples/Construction-Handyman-Logo-2.png',
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

      }
    },
    computed: {
      ...mapGetters({
        activeMenuItem: 'navBarStatus'
      }),
    },

    methods: {
      ...mapActions({
        updateCurrentRouteName: 'updateCurrentRouteName'
      })
    },
    created() {
      const currentRouteName = this.$route.name;
      this.updateCurrentRouteName(currentRouteName);
    },
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

  .loading {

  }
</style>


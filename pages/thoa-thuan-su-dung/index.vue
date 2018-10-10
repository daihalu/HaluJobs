<template>
  <div>
    <search-bar/>
    <div class="home-container">
      <div class="box-container mg-top-15">
        <h3 class="box-title">Thoả thuận sử dụng</h3>
        <div>

        </div>
      </div>



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
    data() {
      return {
        title: 'Thoả thuận sử dụng',

      }
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


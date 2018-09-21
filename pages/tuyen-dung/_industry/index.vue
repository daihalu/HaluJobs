<template>
  <div>
    <advanced-search/>

    <div class="container">

      <breadcrumb :breadcrumbArr="breadcrumb.breadcrumbArr" :title="breadcrumb.title" class="mg-top-15"/>

      <quick-job-box
        :jobBoxTitle="'Tuyển dụng nhanh ' + searchingContent"
        class="mg-top-15"
      />

      <el-row :gutter="15">
        <el-col :span="16">

          <hot-job-box
            jobBoxTitle="Tuyển dụng tiêu điểm"
            class="mg-top-15"
          />

          <new-job-box
            jobBoxTitle="Việc làm mới"
            class="mg-top-15"
          />
        </el-col>
        <el-col :span="8">

          <attractive-job-box
            jobBoxTitle="Việc làm hấp dẫn"
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
            class="mg-top-15"
          />

        </el-col>
      </el-row>

      <statistical-box class="mg-top-15"/>
    </div>
  </div>

</template>

<script>
  import NavBar from '~/components/public-components/bars/NavBar';
  import AdvancedSearch from '~/components/tuyen-dung/bar/AdvancedSearch';
  import Breadcrumb from '~/components/public-components/bars/Breadcrumb';
  import QuickJobBox from '~/components/tuyen-dung/boxs/QuickJobBox';
  import HotJobBox from '~/components/tuyen-dung/boxs/HotJobBox';
  import NewJobBox from '~/components/tuyen-dung/boxs/NewJobBox';
  import AttractiveJobBox from '~/components/tuyen-dung/boxs/AttractiveJobBox';
  import TopRecruitmentKeyword from '~/components/tuyen-dung/boxs/TopRecruitmentKeyword';
  import StatisticalBox from '~/components/public-components/boxs/StatisticalBox';

  import {mapState, mapGetters, mapActions} from 'vuex';


  export default {
    name: '_industry',
    components: {
      NavBar,
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
    // layout: 'simple',
    layout: 'default',
    data() {
      return {
        title: 'Tuyển dụng thần tốc | Tuyển dụng uy tín',
        advancedSearchData: {
          job: '',
          workAddress: '',
          jobTitle: '',
          workExperience: '',
          jobType: '',
        },
      }
    },
    computed: {
      ...mapState({
        breadcrumb: 'breadcrumb',
        searchingContent: 'searchingContent'
      }),

    },
    methods: {
      ...mapActions({
        updateBreadcrumb: 'updateBreadcrumb',
        updateCurrentRouteName: 'updateCurrentRouteName'
      }),
    },
    created() {
      console.log("Created", this.$route.name);
      const currentRouteName = this.$route.name;
      const breadcrumb = this.searchingContent ? {
          breadcrumbArr: [
            {
              name: 'Trang chủ',
              url: '/'
            },
            {
              name: 'Tuyển dụng',
              url: '/tuyen-dung'
            }
          ],
          title: this.searchingContent
        }
        :
        {
          breadcrumbArr: [
            {
              name: 'Trang chủ',
              url: '/'
            }
          ],
          title: 'Tuyển dụng'
        };
      this.updateBreadcrumb(breadcrumb);
      this.updateCurrentRouteName(currentRouteName);
      this.title = 'Việc làm ' + this.searchingContent;
    }


  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .container {
    width: $page-width;
    margin: 0 auto;
  }
</style>


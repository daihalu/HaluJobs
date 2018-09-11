<template>
  <div>
    <advanced-search
      @on_click_search_button="handleOnClickSearchButton"
    />

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
          <newest-candidate-box
            jobBoxTitle="HỒ SƠ ỨNG VIÊN MỚI NHẤT"
            :candidateList="newestCandidateList"
            @on_click_card="handleOnClickNewestCandidateCard"
            class="mg-top-15"
          />
        </el-col>

        <el-col :span="8" class="mg-top-15">
          <div class="box-container">
            <h4 class="box-title">
              <font-awesome-icon :icon="['fas', 'briefcase']"/>
              ỨNG VIÊN THEO NGÀNH NGHỀ
            </h4>
            <div class="job-list">
              <ul v-for="index in numberJobShown" :key="index">
                <nuxt-link to="/ung-vien">
                  <li>{{jobOptions[index].value}}</li>
                </nuxt-link>
              </ul>

              <div class="more-job">
                <div v-if="numberJobShown === 5" @click="numberJobShown = jobOptions.length - 1">
                  <font-awesome-icon :icon="['fas', 'chevron-down']"/>
                  Xem thêm
                </div>

                <div v-if="numberJobShown !== 5" @click="numberJobShown = 5">
                  <font-awesome-icon :icon="['fas', 'chevron-up']"/>
                  Thu gọn
                </div>
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
  import NavBar from '~/components/public-components/bars/NavBar';
  import AttractiveJobCard from '~/components/cards/AttractiveJobCard';
  // import NewestCandidateBox from '~/components/boxs/NewestCandidateBox';
  import {JobOption} from '~/assets/js/data-options';

  import AdvancedSearch from '~/components/ung-vien/bar/AdvancedSearch';
  import Breadcrumb from '~/components/public-components/bars/Breadcrumb';
  import ActiveCandidateBox from '~/components/ung-vien/boxs/ActiveCandidateBox';
  import NewestCandidateBox from '~/components/ung-vien/boxs/NewestCandidateBox';

  import StatisticalBox from '~/components/public-components/boxs/StatisticalBox';

  import {mapState, mapGetters, mapActions} from 'vuex';

  export default {
    components: {
      NavBar,
      AttractiveJobCard,

      AdvancedSearch,
      Breadcrumb,
      ActiveCandidateBox,
      StatisticalBox,
      NewestCandidateBox
    },
    head() {
      return {
        title: this.title
      };
    },
    // layout: 'simple',
    layout: 'default',
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
        // activeMenuItem: 'timungvien',
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
        ],
        newestCandidateList: [
          {
            seenCard: false,
            position: 'Nhân Viên Marketing Online',
            candidateName: 'Nguyễn Văn Hà',
            workExperience: '10 năm',
            location: 'Hà Nội',
            profileUrl: '/ho-so',
            updatedDate: '16/8/2018'
          }
        ]
      }
    },
    computed: {
      ...mapGetters({
        activeMenuItem: 'navBarStatus'
      })
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
      },
      handleOnClickSearchButton(value) {
        this.searchData = value;
        console.log("Parent");
        console.log(this.searchData)
      },
      handleOnClickNewestCandidateCard(value) {
        this.newestCandidateList.seen = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .container {
    width: $page-width;
    margin: 0 auto;
  }

  .job-list {
    padding: $padding-border-box-10;
    background-color: $color-white;

    ul {
      list-style-type: none;
      padding-left: 5px;

      a li:hover {
        color: $color-secondary;
      }

      li {
        color: $color-primary;
        line-height: $line-height-30;
        border-bottom: 1px dotted $color-primary;
      }
    }

    .more-job {
      color: $color-primary;
      margin-top: 10px;
      margin-bottom: 5px;
      width: 100%;
      text-align: right;

      :hover {
        cursor: pointer;
        color: $color-secondary;
      }

      :active {
        cursor: pointer;
        color: $color-primary;
      }
    }

  }
</style>





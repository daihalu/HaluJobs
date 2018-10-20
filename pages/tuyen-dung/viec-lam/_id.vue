<!--TODO: fix save job btn at fix bar and job cover-->
<template>
  <div>
    <fix-bar-action
      v-if="scrolled"
      :title="jobInfo.title"
      :salary="jobInfo.salary.long_label"
      :deadline="jobInfo.deadline"
      :isSaveJobBtnActive="isSaveJobBtnActive"
      @on_click_save_job_btn="handleOnClickSaveJobBtn"
      @on_click_view_apply_now_btn="handleOnClickApplyNowBtn"
    />

    <search-bar/>

    <el-row class="container">
      <breadcrumb
        :title="jobInfo.title"
        :breadcrumbArr="breadcrumbArr"
        class="mg-top-15"
      />

      <!--<banner class="mg-top-15"/>-->

      <job-cover
        :title="jobInfo.title"
        :companyName="jobInfo.employer.name"
        :salary="jobInfo.salary.long_label"
        :deadline="jobInfo.deadline"
        :workAddresses="jobInfo.locations"
        :logoUrl="jobInfo.employer._logo"
        :createdAt="jobInfo._created_at"
        :views="jobInfo._views"
        :isSaveJobBtnActive="isSaveJobBtnActive"
        @on_click_save_job_btn="handleOnClickSaveJobBtn"
        class="mg-top-15"
      />

      <el-row :gutter="20">
        <el-col :span="16">
          <quick-info
            :yearsOfExperience="jobInfo.requirements.experience"
            qualification="Đại học"
            :quantity="jobInfo.quantity"
            :professions="jobInfo.industries"
            :position="jobInfo.position"
            :gender="jobInfo.requirements.gender"
            :jobType="jobInfo.work_type"
            class="mg-top-15"
          />

          <job-description
            :description="jobInfo.description"
            class="mg-top-15"
          />

          <job-benefit
            :benefit="jobInfo.benefit"
            class="mg-top-15"
          />

          <job-requirements
            :requirements="jobInfo.requirements"
            class="mg-top-15"
          />

          <profile-requirements
            :requirements="jobInfo.requirements"
            class="mg-top-15"
          />

          <contact-info
            :jobInfo="jobInfo"
            @on_click_send_message_btn="handleOnClickSendMessageBtn"
            @on_click_apply_now_btn="handleOnClickApplyNowBtn"
            class="mg-top-15"
          />

        </el-col>
        <el-col :span="8">

          <company-box
            :companyName="jobInfo.employer.name"
            :workAddresses="jobInfo.employer.address"
            companySize="100"
            :logoUrl="jobInfo.employer._logo"
            @on_click_send_message_btn="handleOnClickSendMessageBtn"
            class="mg-top-15"
          />

          <company-jobs
            :name="jobInfo.employer.name"
            :companyJobs="companyJobs"
          />

          <advanced-search/>
        </el-col>
      </el-row>

      <same-job-box
        :sameJobs="sameJobs"
        class="mg-top-15"
      />

    </el-row>

    <div v-if="signUpDialogVisible">
      <sign-up-sign-in-dialog
        @on_accept_close_sign_up_dialog="handleOnAcceptCloseSignUpDialog"
      />
    </div>

    <el-dialog
      :title="dialogTitle"
      :visible.sync="sendMessageDialogVisible"
      class="dialog-container"
    >
      <el-form
        ref="message"
        :rules="rules"
        :model="message"
        label-position="top"
      >
        <el-form-item label="Nhập tiêu đề: " prop="title">
          <el-input
            v-model="message.title"
            placeholder="Nhập tiêu đề"
          >
          </el-input>
        </el-form-item>

        <el-form-item label="Nhập tiêu nội dung tin nhắn: " prop="content">
          <el-input
            type="textarea"
            :rows="5"
            v-model="message.content"
            placeholder="Nhập nội dung tin nhắn"
          >
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="send-message" @click="handleOnSendMessage('message')">
            Gửi tin nhắn
          </el-button>
        </el-form-item>

      </el-form>
    </el-dialog>

  </div>
</template>

<script>
  import SearchBar from '~/components/bars/SearchBar';
  import CompanyBox from '~/components/tuyen-dung/viec-lam/boxs/CompanyBox';

  import Breadcrumb from '~/components/public-components/bars/Breadcrumb';
  import Banner from '~/components/public-components/boxs/Banner';
  import FixBarAction from '~/components/tuyen-dung/viec-lam/boxs/FixBarAction';
  import AdvancedSearch from '~/components/public-components/boxs/AdvancedSearch';
  import CompanyJobs from '~/components/tuyen-dung/viec-lam/boxs/CompanyJobs';
  import SameJobBox from '~/components/tuyen-dung/viec-lam/boxs/SameJobs';

  import JobCover from '~/components/tuyen-dung/viec-lam/job-info/JobCover';
  import JobDescription from '~/components/tuyen-dung/viec-lam/job-info/JobDescription';
  import JobBenefit from '~/components/tuyen-dung/viec-lam/job-info/JobBenefit';
  import JobRequirements from '~/components/tuyen-dung/viec-lam/job-info/JobRequirements';
  import QuickInfo from '~/components/tuyen-dung/viec-lam/job-info/QuickInfo';
  import ProfileRequirements from '~/components/tuyen-dung/viec-lam/job-info/ProfileRequirements';
  import ContactInfo from '~/components/tuyen-dung/viec-lam/job-info/ContactInfo';

  import SignUpSignInDialog from '~/components/tuyen-dung/viec-lam/dialogs/SignUpSignInDialog';

  import axios from 'axios';
  import {mapState, mapGetters, mapActions} from 'vuex';


  export default {
    components: {
      SearchBar,
      Breadcrumb,
      Banner,
      JobCover,
      JobDescription,
      JobBenefit,
      JobRequirements,
      ProfileRequirements,
      ContactInfo,

      AdvancedSearch,
      CompanyBox,
      FixBarAction,
      CompanyJobs,
      SameJobBox,
      QuickInfo,
      SignUpSignInDialog
    },
    head() {
      return {
        title: `Tuyển ${this.jobInfo.title} - ${this.jobInfo.employer.name}`
      };
    },
    layout: 'default',

    async asyncData({route}) {
      let [jobInfo, companyJobs, sameJobs] = await Promise.all([
        axios.get(`https://halujobs.herokuapp.com/jobs/${route.params.slug}`),
        axios.get('https://halujobs.herokuapp.com/jobs?size=5'),
        axios.get('https://halujobs.herokuapp.com/jobs?size=15')
      ]);
      console.log("Route", route);

      return {
        jobInfo: jobInfo.data.job,
        companyJobs: companyJobs.data.jobs,
        sameJobs: sameJobs.data.jobs
      };
    },

    data() {
      return {
        isUser: false,
        signUpDialogVisible: false,
        sendMessageDialogVisible: false,

        jobInfo: {},

        isSaveJobBtnActive: false,
        dialogTitle: '',
        message: {
          title: '',
          content: ''
        },
        rules: {
          title: [{required: true, message: 'Vui lòng nhập tiêu đề tin nhắn', trigger: 'blur'}],
          content: [{required: true, message: 'Vui lòng nhập nội dung tin nhắn', trigger: 'blur'}],
        },
        breadcrumbArr: [
          {name: 'Trang chủ', url: '/'},
          {name: 'Tuyển dụng', url: '/tuyen-dung'},
          {name: 'Bắc Cạn', url: '/tuyen-dung/dia-diem'},
        ],
        scrolled: false
      }
    },

    methods: {
      ...mapActions('JOB', {
        fetchJobInfo: 'fetchJobInfo'
      }),

      handleOnScroll() {
        this.scrolled = window.scrollY > 800 && window.scrollY < 3500;
      },

      handleOnClickViewContactBtn() {
        this.signUpDialogVisible = true;
      },

      handleOnClickSaveJobBtn(saveJobBtnStatus) {
        this.isSaveJobBtnActive = saveJobBtnStatus;
      },

      handleOnClickApplyNowBtn() {
        this.signUpDialogVisible = true;
      },
      handleOnAcceptCloseSignUpDialog() {
        this.signUpDialogVisible = false;
      },

      handleOnClickSendMessageBtn() {
        this.sendMessageDialogVisible = true;
      },

      handleOnSendMessage(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$notify({
              title: 'Thông báo',
              message: 'Tin nhắn đã được gửi thành công!',
              type: 'success'
            });
            this.sendMessageDialogVisible = false;
          } else {
            this.$notify({
              title: 'Thông báo',
              message: 'Vui lòng nhập tiêu đề và nội dung tin nhắn!',
              type: 'warning'
            });
            return false;
          }
        });
      },
    },
    created: async function () {
      console.log("Created");
      let slug = this.$route.params.slug;
      // const {data} = await axios.get(`https://halujobs.herokuapp.com/jobs/${slug}`);
      //
      // this.jobInfo = data.job;
      // console.log("jobInfo", this.jobInfo.benefit);
      // console.log("route props", this.$route);
      this.dialogTitle = 'Gửi tin nhắn cho ' + this.jobInfo.employer.name;
      // axios.get('https://halujobs.herokuapp.com/jobs/5b95ebe173b25010e1277064');
    },

    beforeMount: async function () {
      window.addEventListener('scroll', this.handleOnScroll);
      // let slug = this.$route.params.slug;
      // const {data} = await axios.get(`https://halujobs.herokuapp.com/jobs/${slug}`);
      // console.log("beforeMount", data)
    },

    beforeDestroy() {
      window.removeEventListener('scroll', this.handleOnScroll);
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .container {
    width: $page-width;
    margin: 0 auto;
  }

  .box-right {
    border: 1px solid $color-gray;
    padding: 15px;
    background-color: $color-white;
    margin-top: $mg-top-bottom-15;
    text-align: center;
  }

  .icon-hover {
    cursor: pointer;
  }

  .companyRecruitment {
    text-align: left;
  }

  .companyRecruitment h3 {
    line-height: 30px;
  }

  .companyRecruitment hr {
    margin-bottom: 20px;
    opacity: 0.5;
  }

  .companyRecruitment div {
    margin-bottom: 10px;
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

  .advanced-search-box {
    padding: $padding-border-box-15;
    background-color: $color-white;
    margin: $mg-top-bottom-15 auto;
  }

  .advanced-search-box--container {
    text-align: center;
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

</style>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .fixed-top-job-bar {
    position: fixed;
    background-color: $color-primary;
    padding: 10px;
    top: 0;
    color: $color-white;
    z-index: $index-popper-2000;
    margin: 0 auto !important;
    left: 0;
    right: 0;
  }

  .fixed-top-job-bar--container {

    top: 0;
    width: $page-width;
    margin: 0 auto !important;
  }

  .fixed-top-job-bar--info p span {
    font-weight: $fw-base-500;
  }

  .btn-options {
    float: right;
  }

  .fixed-top-job-bar--btn {
    height: 46px;
    padding: 10px 20px;
    outline: 0 none;
    transition: all 0.15s ease-in-out;
    font-weight: $fw-base-500;
    font-size: $fs-base-16;
  }

  .fixed-top-job-bar--btn:active {
    box-shadow: 0 0 0 transparent;
    transition: none;
  }

  .apply-now {
    background-color: $color-pink;
    border: 1px solid $color-pink;
    color: $color-white;
  }

  .save-job {
    background-color: $color-white;
    border: 1px solid $color-primary;
    color: $color-primary;
  }

  .slide-fade-enter-active {
    transition: opacity .3s;
  }

  .slide-fade-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter {
    opacity: 0;
  }

  .slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }


</style>

<style>
  .el-input--suffix .el-input__inner,
  .el-input--prefix .el-input__inner {
    padding-left: 35px;
  }
</style>



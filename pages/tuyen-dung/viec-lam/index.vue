<template>
  <div>
    <fix-bar-action
      :title="job.jobInfo.title"
      :salary="job.jobInfo.salary"
      :deadline="job.jobInfo.deadline"
    />

    <search-bar/>

    <el-row class="container">
      <breadcrumb
        title="Nhân Viên Văn Phòng Phụ Trách Kinh Doanh Khai Thác Sự Kiện"
        :breadcrumbObj="breadcrumbObj"
      />
      <banner/>
      <job-cover/>
      <el-row :gutter="20">
        <el-col :span="16">
          <quick-info
            :yearsOfExperience="job.jobRequirements.yearsOfExperience"
            :qualification="job.jobRequirements.qualification"
            :numberOfRecruits="job.jobDetails.numberOfRecruits"
            :professions="job.jobDetails.professions"
            :position="job.jobDetails.position"
            :gender="job.jobRequirements.gender"
            :jobType="job.jobDetails.jobType"
          />

        </el-col>
        <el-col :span="8">

            <company-box
              :name="job.employerInfo.companyName"
              :address="job.employerInfo.companyAddress"
              :size="job.employerInfo.companySize"
            />


          <company-recruitment
            :name="job.employerInfo.companyName"
            :attractiveJobs="attractiveJobs"
          />

          <advanced-search/>
        </el-col>
      </el-row>

      <same-jobs
        :attractiveJobs="attractiveJobs"
      />

    </el-row>
  </div>
</template>

<script>
  import SearchBar from '~/components/bars/SearchBar';
  import AttractiveJobCard from '~/components/cards/AttractiveJobCard';
  import Banner from '~/components/categories/Banner';
  import CompanyBox from '~/components/tuyen-dung/viec-lam/boxs/CompanyBox';

  import Breadcrumb from '~/components/public-components/bars/Breadcrumb';
  import FixBarAction from '~/components/tuyen-dung/viec-lam/boxs/FixBarAction';
  import AdvancedSearch from '~/components/public-components/boxs/AdvancedSearch';
  import CompanyRecruitment from '~/components/tuyen-dung/viec-lam/boxs/CompanyRecruitment';
  import SameJobs from '~/components/tuyen-dung/viec-lam/boxs/SameJobs';

  import JobCover from '~/components/tuyen-dung/viec-lam/job-info/JobCover';
  import QuickInfo from '~/components/tuyen-dung/viec-lam/job-info/QuickInfo';


  export default {
    components: {
      SearchBar,
      Breadcrumb,
      Banner,
      JobCover,
      AttractiveJobCard,
      AdvancedSearch,
      CompanyBox,
      FixBarAction,
      CompanyRecruitment,
      SameJobs,
      QuickInfo
    },
    data() {
      return {
        job: {
          jobInfo: {
            title: 'Nhân viên hành chính nhân sự',
            workAddresses: ['Bắc Cạn'],
            salary: '8 triệu - 15 triệu',
            isBonus: true,
            deadline: '10/08/2018 '
          },
          jobDetails: {
            jobType: 'Toàn thời gian cố định',
            numberOfRecruits: '2',
            position: 'Nhân viên',
            professions: ['Hành chính văn phòng', 'Lương cao', 'Nhân sự'],
            description: [
              'Thực hiện các công việc hành chính',
              'Giải quyết các công việc liên quan Tiền lương, bảo hiểm',
              'Thực hiện các công việc khác theo sự chỉ đạo của cấp trên'
            ],
            benefit: [
              'Thu nhập: 8 – 15 triệu/tháng',
              'Được tham gia BHXH đầy đủ',
              'Làm việc trong môi trường lớn và ổn định, chuyên nghiệp, có khả năng thăng tiến cao.',
              'Được tham gia các hoạt động, phong trào du lịch hàng năm.'
            ]
          },
          jobRequirements: {
            yearsOfExperience: '3',
            qualification: 'Đại học',
            gender: 'Nam',
            language: 'Tiếng Việt',
            jobRequirements: [
              'Am hiểu kiến thức Tiền Lương nhân sự, Bảo hiểm',
              'Có thể đi công tác',
              'Nhanh nhẹn, nhiệt tình, chăm chỉ trong công việc',
              'Chỉ tuyển Nam'
            ],
            resumeRequirements: [
              'Đơn xin việc.',
              'Sơ yếu lý lịch.',
              'Hộ khẩu, chứng minh nhân dân và giấy khám sức khỏe.',
              'Các bằng cấp có liên quan.'
            ]
          },
          contactInfo: {
            contact: 'Mrs. Biền',
            email: 'employer@gmail.com',
            phoneNumber: '0123456789',
          },
          employerInfo: {
            _id: '',
            companyName: 'Công ty cổ phần tập đoàn công nghiệp An Khang',
            companyAddress: 'Số 280, Tổ 13, Phường Sông Cầu, TP Bắc Cạn, Tỉnh Bắc Cạn',
            companySize: 'Hơn 10000 người',
            _logoUrl: '~/assets/images/logo.png'
          },
          _updatedDate: '18/05/2018'
        },
        attractiveJobs: [
          {
            title: "Giám đốc tài chính 1",
            companyName: 'Công ty THHH AK 1',
            salary: '15 - 20 triệu',
            deadline: '25/9/2018',
            workAddress: 'Sài Gòn',
            logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_V7avrT3e0yZsQ_lVZgrMaE_fUA-8RX04mDkxTPO2SgoGU-Jjg'
          },
          {
            title: "Giám đốc tài chính 2",
            companyName: 'Công ty THHH AK 2',
            salary: '15 - 20 triệu',
            deadline: '25/9/2018',
            workAddress: 'Sài Gòn',
            logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_V7avrT3e0yZsQ_lVZgrMaE_fUA-8RX04mDkxTPO2SgoGU-Jjg'
          },
          {
            title: "Giám đốc tài chính 3",
            companyName: 'Công ty THHH AK 3',
            salary: '15 - 20 triệu',
            deadline: '25/9/2018',
            workAddress: 'Sài Gòn',
            logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_V7avrT3e0yZsQ_lVZgrMaE_fUA-8RX04mDkxTPO2SgoGU-Jjg'
          },
          {
            title: "Giám đốc tài chính 4",
            companyName: 'Công ty THHH AK 4',
            salary: '15 - 20 triệu',
            deadline: '25/9/2018',
            workAddress: 'Sài Gòn',
            logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_V7avrT3e0yZsQ_lVZgrMaE_fUA-8RX04mDkxTPO2SgoGU-Jjg'
          },
          {
            title: "Giám đốc tài chính 5",
            companyName: 'Công ty THHH AK 5',
            salary: '15 - 20 triệu',
            deadline: '25/9/2018',
            workAddress: 'Sài Gòn',
            logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_V7avrT3e0yZsQ_lVZgrMaE_fUA-8RX04mDkxTPO2SgoGU-Jjg'
          },
          {
            title: "Giám đốc tài chính 6",
            companyName: 'Công ty THHH AK 6',
            salary: '15 - 20 triệu',
            deadline: '25/9/2018',
            workAddress: 'Sài Gòn',
            logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_V7avrT3e0yZsQ_lVZgrMaE_fUA-8RX04mDkxTPO2SgoGU-Jjg'
          }
        ],
        breadcrumbObj:
          [
            {name: 'Trang chủ', link: '/'},
            {name: 'Tuyển dụng', link: '/tuyen-dung'},
            {name: 'Bắc Cạn', link: '/tuyen-dung/dia-diem'},
          ],
      }
    }
    ,
    methods: {
      handleScroll() {
        this.scrolled = window.scrollY > 600 && window.scrollY < 3500;
      }
    }
    ,
    beforeMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
    ,
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
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



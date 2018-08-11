<template>
  <div>
    <search-bar/>
    <div class="home-container">
      <breadcrumb :breadcrumbObj="hotJobList" class="mg-top-15"/>

      <banner class="mg-top-15"/>

      <new-job-box class="mg-top-15"/>

      <function-box class="mg-top-15"/>

      <main-job-box jobTitle="VIỆC LÀM TUYỂN GẤP"/>

      <banner class="mg-top-15"/>

      <el-row :gutter="16">
        <el-col :span="16">
          <attractive-job-box jobTitle="VIỆC LÀM HẤP DẪN" class="mg-top-15"/>
          <HighSalaryJobBox jobTitle="VIỆC LÀM LƯƠNG CAO"/>
        </el-col>
        <el-col :span="8">
          <div class="top-ranked-employer">
            <h4>
              <font-awesome-icon :icon="['far', 'building']"/>
              NHÀ TUYỂN DỤNG HÀNG ĐẦU
            </h4>
            <el-row :gutter="6">
              <el-col :span="8" v-for="employer in employers" :key="employer.contact">
                <nuxt-link to="/nha-tuyen-dung" :title="employer.contact">
                  <img :src="employer.avatar"/>
                </nuxt-link>
              </el-col>
            </el-row>
          </div>

          <div class="email-subscriber-box">
            <h4>
              <font-awesome-icon :icon="['far', 'envelope']"/>
              NHẬN BẢN TIN VIỆC LÀM
            </h4>

            <el-input
              type="email"
              v-model="emailSubscriber"
              auto-complete="off"
              placeHolder="Vui lòng nhập email"
            >
            </el-input>

            <el-button type="submit">Gửi</el-button>

          </div>

          <div class="banner-box">
            <nuxt-link to="/">
              <img
                src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/27459795_1516131271837402_799174223676649307_n.png?_nc_cat=0&oh=8de849a451cb5afc9918e09de0cc6407&oe=5BE0F15C"/>
            </nuxt-link>
          </div>

          <div class="job-searching-box">
            <h4>
              <font-awesome-icon :icon="['far', 'clipboard']"/>
              TÌM KIẾM VIỆC LÀM THEO NGÀNH NGHỀ
            </h4>

            <el-input
              type="email"
              v-model="emailSubscriber.email"
              auto-complete="off"
              placeHolder="Vui lòng nhập ngành nghề">
            </el-input>
            <div class="job-searching-box--list">
              <ul v-for="job in jobList" :key="job.value">
                <nuxt-link to="/tuyen-dung">
                  <li>{{job.value}}</li>
                </nuxt-link>

              </ul>
            </div>
          </div>
        </el-col>
      </el-row>
      <HotLineBox/>
      <LocationJobBox/>
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
  import SearchBar from '~/components/public-components/bars/SearchBar';


  import TheBestEmployerBox from '~/components/boxs/TheBestEmployerBox';

  import HotLineBox from '~/components/boxs/HotLineBox';
  import LocationJobBox from '~/components/boxs/LocationJobBox';


  import Breadcrumb from '~/components/public-components/bars/Breadcrumb';
  import Banner from '~/components/trang-chu/boxs/Banner';
  import NewJobBox from '~/components/trang-chu/boxs/NewJobBox';
  import FunctionBox from '~/components/trang-chu/boxs/FunctionBox';
  import MainJobBox from '~/components/public-components/boxs/MainJobBox';
  import AttractiveJobBox from '~/components/boxs/AttractiveJobBox';
  import HighSalaryJobBox from '~/components/trang-chu/boxs/HighSalaryJobBox';



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
      TheBestEmployerBox,
      HighSalaryJobBox,
      HotLineBox,
      LocationJobBox
    },
    head() {
      return {
        title: this.title
      }
    },
    layout: 'default',
    data() {
      const {
        jobs
      } = JobOption;
      return {
        title: 'HaluJobs - Tuyển dụng thần tốc',
        emailSubscriber: '',
        employers: [
          {
            contact: 'Công ty cổ phần đầu tư bất động sản Thiên Đường',
            avatar: 'https://t3.ftcdn.net/jpg/01/97/43/68/500_F_197436858_tA3mc2cKkeQbn0jk9ZVScv7alCp92w8m.jpg'
          },
          {
            contact: 'Công ty cổ phần Paragon',
            avatar: 'http://www.gostudiorama.com/wp-content/uploads/2018/06/affordable-logo-designs-logo-design-contests-29-affordable-custom-logo-design-online-in-music-logo.png'
          },
          {
            contact: 'Công ty TNHH Kostroma',
            avatar: 'https://i.pinimg.com/736x/82/d7/88/82d788d2dae8879c903d16a3b6d68001--sun-logo-book-logo.jpg'
          },
          {
            contact: 'Công ty cổ phần đầu tư bất động sản Capitals',
            avatar: 'http://www.gostudiorama.com/wp-content/uploads/2018/06/logo-design-ideas-free-download-29-best-property-company-logo-images-on-pinterest-company-logo-free-logo-maker.jpg'
          },
          {
            contact: 'Công ty cổ phần đầu tư bất động sản Thiên Đường 2',
            avatar: 'https://t3.ftcdn.net/jpg/01/97/43/68/500_F_197436858_tA3mc2cKkeQbn0jk9ZVScv7alCp92w8m.jpg'
          },
          {
            contact: 'Công ty cổ phần đầu tư bất động sản Thiên Đường 33',
            avatar: 'http://www.gostudiorama.com/wp-content/uploads/2018/06/logo-design-ideas-free-download-29-best-property-company-logo-images-on-pinterest-company-logo-free-logo-maker.jpg'
          },
          {
            contact: 'Công ty cổ phần đầu tư bất động sản Thiên Đường 4',
            avatar: 'https://t3.ftcdn.net/jpg/01/97/43/68/500_F_197436858_tA3mc2cKkeQbn0jk9ZVScv7alCp92w8m.jpg'
          },
          {
            contact: 'Công ty cổ phần đầu tư bất động sản Thiên Đường 5',
            avatar: 'http://www.gostudiorama.com/wp-content/uploads/2018/06/logo-design-ideas-free-download-29-best-property-company-logo-images-on-pinterest-company-logo-free-logo-maker.jpg'
          },
          {
            contact: 'Công ty cổ phần đầu tư bất động sản Thiên Đường 6',
            avatar: 'https://t3.ftcdn.net/jpg/01/97/43/68/500_F_197436858_tA3mc2cKkeQbn0jk9ZVScv7alCp92w8m.jpg'
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

  .top-ranked-employer,
  .email-subscriber-box,
  .job-searching-box,
  .banner-box {
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

  .top-ranked-employer img {
    width: 100%;
    height: 125px;
    border: 1px solid $color-border;
    border-radius: $br-3;

  }

  .el-button {
    background-color: $color-primary;
    height: 40px;
    color: $color-white;
    font-weight: $fw-base-500;
    width: 25%;
    font-size: $fs-base-16;
  }

  .el-button:hover {
    background-color: $color-secondary;
    box-shadow: 0 0 5px $color-secondary;

  }

  .el-button:active {
    box-shadow: 0 0 0 transparent;
    background-color: $color-primary;
    transition: none;
  }

  .el-form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .el-form-item {
    margin-bottom: 0;
    width: 70%;
  }

  .job-searching-box .el-input {
    margin-bottom: 10px;
  }

  .job-searching-box--list {
    overflow: auto;
    height: 300px;
  }

  ul {
    list-style-type: none;
    padding-left: 5px;
  }

  ul li {
    line-height: $line-height-30;
    border-bottom: 1px dotted $color-primary;
  }

  /* width */
  .job-searching-box--list::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  .job-searching-box--list::-webkit-scrollbar-track:hover {
    background: $color-gray;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }

  /* Handle */
  .job-searching-box--list::-webkit-scrollbar-thumb {
    background: $color-scroll-bar;
    border-radius: 8px;
  }

  /* Handle on hover */
  .job-searching-box--list::-webkit-scrollbar-thumb:hover {
    background: $color-scroll-bar--hover;
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

  .el-carousel__indicators--outside {
    position: static;
  }

</style>


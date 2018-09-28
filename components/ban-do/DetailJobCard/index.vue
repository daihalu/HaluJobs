<template>
  <div class="card">
    <div class="avatar">
      <nuxt-link to="/" :title="jobInfo.employer.name">
        <img :src="logoUrl"/>
      </nuxt-link>
    </div>

    <div class="container">
      <el-tooltip effect="dark" :content="jobInfo.title" placement="top-start">
        <p class="job-title">
          <nuxt-link to="/">
            {{jobTitle}}
          </nuxt-link>
        </p>
      </el-tooltip>

      <p class="company item" :title="jobInfo.employer.name">
        <font-awesome-icon :icon="['far', 'building']"/>
        {{companyName}}
      </p>

      <div class="items">
        <p class="item" :title="salary">
          <font-awesome-icon :icon="['fas', 'dollar-sign']"/>
          Mức lương: <span class="salary">{{salary}}</span>
        </p>

        <p class="item" :title="closingDate">
          <font-awesome-icon :icon="['fas', 'user-clock']"/>
          Hạn nộp hồ sơ: <span class="deadline">{{closingDate}}</span>
        </p>
        <p class="item location" :title="jobInfo.workAddress">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
          Địa chỉ: {{workAddress}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import {ConvertStringToShorterString} from '~/assets/js/functions';

  export default {
    props: {
      jobInfo: Object,
    },
    data() {
      return {
        logoUrl: this.jobInfo.employer._logo,
        closingDate: this.jobInfo.closing_date,
        jobTitle: this.jobInfo.title,
        companyName: this.jobInfo.employer.name,
        workAddress: this.jobInfo.employer.address,
        salary: this.jobInfo.salary.range
      }
    },
    methods: {
      formattedDate(d) {
        let date = d.slice(0, 10).split('-');
        return date[2] + '/' + date[1] + '/' + date[0];
      },
    },
    created() {
      // this.jobTitle = ConvertStringToShorterString(this.jobTitle, 0, 32);
      // this.companyName = ConvertStringToShorterString(this.companyName, 0, 33);
      // this.workAddress = ConvertStringToShorterString(this.workAddress, 0, 5);
      this.closingDate = this.formattedDate(this.jobInfo.deadline);
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .card {
    border: none;
    padding: 5px;
    width: 100%;
    border-bottom: 1px solid $color-primary;
    border-top: 1px solid $color-primary;
    border-radius: 0;
  }

  .avatar {
    height: 100px;
  }

  img {
    border: 2px solid $color-gray;
    border-radius: $br-5;
    height: 100px;
    width: 100px;
  }

  .container {
    margin-left: 10px;
    width: 100%;
  }


  .item {
    font-size: 15px;
    line-height: 25px;
    display: block;
  }

  .job-title {
    color: $color-primary;
    font-weight: $fw-base-500;
    padding-bottom: 5px;
    font-size: 17px;
  }


  .salary,
  .deadline {
    color: $color-pink;
  }

  svg {
    font-size: 14px;
    opacity: 0.7;
    display: inline-block;
    width: 20px !important;
    text-align: left;
    height: 15px;
  }

</style>



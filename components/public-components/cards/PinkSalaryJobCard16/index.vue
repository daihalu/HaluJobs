<template>
  <div class="card">
    <div class="avatar">
      <nuxt-link :to="jobInfo.jobUrl" :title="jobInfo.companyName">
        <img :src="jobInfo.logoUrl"/>
      </nuxt-link>
    </div>

    <el-col :span="16" class="job-card--content">
      <el-tooltip class="item" effect="dark" :content="jobInfo.jobTitle" placement="top-start">
        <p class="jobTitle">
          <nuxt-link :to="jobInfo.jobUrl" :title="jobInfo.jobTitle">
            {{jobTitle}}
          </nuxt-link>
        </p>
      </el-tooltip>
      <p class="company" :title="jobInfo.companyName">
        <font-awesome-icon :icon="['far', 'building']"/>
        {{companyName}}
      </p>
    </el-col>

    <el-col :span="6" class="job-card--content--item">
      <p class="salary" :title="jobInfo.salary">
        <font-awesome-icon icon="dollar-sign"/>
        {{jobInfo.salary}}
      </p>

      <p class="deadline" :title="jobInfo.deadline">
        <font-awesome-icon icon="user-clock"/>
        {{jobInfo.deadline}}
      </p>

      <p class="workAddress" :title="jobInfo.workAddress">
        <font-awesome-icon icon="map-marker-alt"/>
        {{workAddress}}
      </p>
    </el-col>
  </div>
</template>

<script>
  import {ConvertStringToShorterString} from '~/assets/js/functions';
  
  export default {
    props: {
      jobInfo: Object
    },
    data() {
      return {
        jobTitle: this.jobInfo.jobTitle,
        companyName: this.jobInfo.companyName,
        workAddress: this.jobInfo.workAddress
      }
    },
    created() {
      this.jobTitle = ConvertStringToShorterString(this.jobTitle, 0, 53);
      this.companyName = ConvertStringToShorterString(this.companyName, 0, 50);
      this.workAddress = ConvertStringToShorterString(this.workAddress, 0, 7);
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .card {
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    align-items: center;
  }
  .avatar {
    height: 50px;
    width: 70px;
  }

  img {
    border: 2px solid $color-gray;
    border-radius: $br-5;
    width: 100%;
    height: 100%;
  }

  .job-card--content {
    margin-left: 10px;
  }

  .jobTitle {
    color: $color-primary;
    font-weight: $fw-base-500;
    padding-bottom: 5px;
  }

  .company,
  .deadline {
    opacity: 0.8;
  }

  svg {
    opacity: 0.7;
  }

  .deadline,
  .salary,
  .workAddress {
    font-size: 14px;
    line-height: 25px;
  }

  .salary {
    color: $color-pink;
  }

  .deadline,
  .workAddress {
    display: inline;
  }

  .workAddress {
    margin-left: 10px;
  }

  .deadline:hover {
    opacity: 1;
  }

</style>


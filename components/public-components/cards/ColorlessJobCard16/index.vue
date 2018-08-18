<template>
  <el-row class="card">
    <el-col :span="18" class="job-card--content">

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
    <el-col :span="6">
      <p class="salary" :title="jobInfo.salary">
        <font-awesome-icon icon="dollar-sign"/>
        {{jobInfo.salary}}
      </p>

      <p class="expiryDate" :title="jobInfo.expiryDate">
        <font-awesome-icon icon="user-clock"/>
        {{jobInfo.expiryDate}}
      </p>

      <p class="location" :title="jobInfo.workAddress">
        <font-awesome-icon icon="map-marker-alt"/>
        {{workAddress}}
      </p>
    </el-col>
  </el-row>
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
      this.jobTitle = ConvertStringToShorterString(this.jobTitle, 0, 63);
      this.companyName = ConvertStringToShorterString(this.companyName, 0, 60);
      this.workAddress = ConvertStringToShorterString(this.workAddress, 0, 7);
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  svg {
    margin-right: 3px;
    opacity: 0.7;
  }

  .jobTitle {
    color: $color-primary;
    font-weight: $fw-base-500;
    padding-bottom: 5px;
  }

  .company {
    opacity: 0.8;
  }

  .expiryDate,
  .salary,
  .location {
    font-size: $fs-small-14;
    line-height: 25px;
  }

  .expiryDate,
  .location {
    display: inline;
  }

  .expiryDate {
    opacity: 0.8;
    margin-right: 10px;
  }

  .expiryDate:hover {
    opacity: 1;
  }

</style>


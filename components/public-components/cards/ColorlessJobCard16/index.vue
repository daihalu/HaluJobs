<template>
  <el-row class="card">
    <el-col :span="16" class="job-card--content">

      <el-tooltip
        effect="dark"
        :content="jobTitle.title"
        placement="top-start"
      >
        <p class="position">
          <nuxt-link :to="jobUrl + jobId">
            {{jobTitle.value}}
          </nuxt-link>
        </p>
      </el-tooltip>

      <p class="company" :title="companyName.title">
        <font-awesome-icon :icon="['far', 'building']"/>
        <span>{{companyName.value}}</span>
      </p>
    </el-col>
    <el-col :span="8">
      <p class="salary" :title="salary">
        <font-awesome-icon :icon="['fas', 'dollar-sign']"/>
        <span>{{salary}}</span>
      </p>

      <el-row>
        <el-col :span="12">
          <p class="deadline" :title="deadline">
            <font-awesome-icon :icon="['fas', 'user-clock']"/>
            <span> {{deadline}}</span>
          </p>
        </el-col>

        <el-col :span="12">
          <p class="work-addresses " :title="workAddresses.title">
            <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
            {{workAddresses.value}}
          </p>
        </el-col>


      </el-row>
    </el-col>
  </el-row>
</template>

<script>
  import {ConvertStringToShorterString, FormattedDate} from '~/assets/js/functions';

  export default {
    props: {
      jobInfo: Object
    },
    data() {
      return {
        jobUrl: this.jobInfo.jobUrl,
        jobId: this.jobInfo._jobId,
        jobTitle: {
          title: this.jobInfo.jobTitle,
          value: this.jobInfo.jobTitle
        },
        companyName: {
          title: this.jobInfo.companyName,
          value: this.jobInfo.companyName
        },
        workAddresses: {
          title: this.jobInfo.workAddresses.join(', '),
          value: this.jobInfo.workAddresses.join(', ')
        },
        salary: this.jobInfo.salary.min + ' triệu - ' + this.jobInfo.salary.max + ' triệu',
        deadline: this.jobInfo.deadline
      }
    },
    created() {
      this.jobTitle.value = ConvertStringToShorterString(this.jobTitle.title, 0, 57);
      this.companyName.value = ConvertStringToShorterString(this.companyName.title, 0, 55);
      this.workAddresses.value = ConvertStringToShorterString(this.workAddresses.value, 0, 11);
      this.deadline = FormattedDate(this.deadline);
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .card {
    display: flex;
    flex-direction: row;
    align-items: center;
  }


  .position {
    color: $color-primary;
    font-size: $fs-base-16;
    font-weight: $fw-base-500;
    line-height: 25px;

    a {
      display: block;
      text-transform: lowercase;
      padding-left: 4px;

      &::first-letter {
        text-transform: uppercase;
      }
    }
  }

  .company {
    opacity: 0.8;
    line-height: 25px;
    text-transform: lowercase;
    display: flex;
    align-items: center;

    span {
      display: inline-block;
      &::first-letter {
        text-transform: uppercase;
      }
    }

    &:hover {
      opacity: 1;
    }
  }

  .salary,
  .work-addresses {
    font-size: 14px;
    line-height: 25px;
  }

  .salary {
    color: $color-pink;
  }

  .work-addresses {
    opacity: 0.8;
  }

  .deadline {
    line-height: 25px;
    font-size: $fs-small-14;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
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


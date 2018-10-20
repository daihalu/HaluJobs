<template>
  <div class="card">
    <div class="container">
      <el-tooltip
        effect="dark"
        :content="jobTitle.title"
        placement="top-start"
      >
        <p class="position">
          <nuxt-link to="/">
            {{jobTitle.value}}
          </nuxt-link>
        </p>
      </el-tooltip>

      <p class="company" :title="companyName.title">
        <font-awesome-icon :icon="['far', 'building']"/>
        <span>{{companyName.value}}</span>
      </p>

      <el-row class="items">
        <el-col :span="8" class="salary" :title="salary">
          <font-awesome-icon :icon="['fas', 'dollar-sign']"/>
          <span>{{salary}}</span>
        </el-col>

        <el-col :span="8" class="deadline" :title="deadline">
          <font-awesome-icon :icon="['fas', 'user-clock']"/>
          <span> {{deadline}}</span>
        </el-col>

        <el-col :span="8" class="work-addresses " :title="workAddresses.title">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
          {{workAddresses.value}}
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
  import {ConvertStringToShorterString, FormattedDate} from '~/assets/js/functions';

  export default {
    props: {
      jobInfo: Object,
      name: String
    },
    data() {
      return {
        jobUrl: this.jobInfo.jobUrl,
        jobId: this.jobInfo._jobId,
        jobTitle: {
          title: this.jobInfo.title,
          value: this.jobInfo.title
        },
        companyName: {
          title: this.name,
          value: this.name
        },
        workAddresses: {
          title: this.jobInfo.locations.join(', '),
          value: this.jobInfo.locations.join(', ')
        },
        salary: this.jobInfo.salary.long_label,
        deadline: this.jobInfo.deadline
      }
    },
    created() {
      this.jobTitle.value = ConvertStringToShorterString(this.jobTitle.title, 0, 40);
      this.companyName.value = ConvertStringToShorterString(this.companyName.title, 0, 43);
      this.workAddresses.value = ConvertStringToShorterString(this.workAddresses.value, 0, 12);

    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";
  .container {
    width: 100%;
  }

  .position {
    color: $color-primary;
    font-weight: $fw-base-500;
    padding-bottom: 5px;
    display: inline-block;

    a {
      display: block;
      text-transform: lowercase;

      &::first-letter {
        text-transform: uppercase;
      }
    }
  }

  .company {
    opacity: 0.8;
    padding-bottom: 3px;
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

  .items {
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    line-height: 25px;

    .salary,
    .work-addresses {
      color: $color-pink;
    }

    .deadline {
      opacity: 0.8;
      text-align: center;

      &:hover {
        opacity: 1;
      }
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



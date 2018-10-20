<template>
  <div class="card">
    <div class="avatar">
      <nuxt-link :to="jobUrl" :title="companyName">
        <img :src="logoUrl"/>
      </nuxt-link>
    </div>

    <div class="container">
      <el-tooltip
        effect="dark"
        :content="jobTitle"
        placement="top-start"
      >
        <p class="position">
          <nuxt-link :to="jobUrl">
            {{jobTitle}}
          </nuxt-link>
        </p>
      </el-tooltip>

      <p class="company" :title="companyName">
        <font-awesome-icon :icon="['far', 'building']"/>
        <span>{{companyName}}</span>
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

        <el-col :span="8" class="work-addresses " :title="workAddresses">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
          {{workAddresses}}
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
  import {ConvertStringToShorterString, FormattedDate} from '~/assets/js/functions';

  export default {
    props: {
      jobInfo: Object
    },
    data() {
      return {
        logoUrl: this.jobInfo.employer._logo,
        jobUrl: '/tuyen-dung/viec-lam/' + this.jobInfo._slug + '.html',
        jobId: this.jobInfo._jobId,
        jobTitle: this.jobInfo.title,
        companyName: this.jobInfo.employer.name,
        workAddresses: this.jobInfo.locations.join(", "),
        salary: this.jobInfo.salary.label,
        deadline: this.jobInfo.deadline
      }
    },


    created() {
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .avatar {
    height: 70px;
    width: 70px;
  }

  img {
    border: 2px solid $color-gray;
    border-radius: $br-5;
    height: 100%;
  }

  .container {
    margin-left: 10px;
    width: 100%;
  }

  .position {
    color: $color-primary;
    font-weight: $fw-base-500;
    padding-bottom: 5px;

    a {
      display: block;
      text-transform: lowercase;
      padding-left: 4px;
      white-space: nowrap;
      overflow: hidden;
      width: 290px;
      text-overflow: ellipsis;

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
    text-overflow:ellipsis;

    span {
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      width: 269px;
      text-overflow: ellipsis;

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

    .work-addresses {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 91px;
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



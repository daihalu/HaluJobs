<template>
  <div class="card">
    <div class="avatar" @click="handleOnClickAvatar">
      <!--<nuxt-link :to="jobUrl + jobId" :title="companyName.title">-->
        <img :src="logoUrl"/>
      <!--</nuxt-link>-->
    </div>

    <div class="container">
      <el-tooltip effect="dark" :content="jobTitle.title" placement="top-start">
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

      <div class="items">
        <p class="salary" :title="salary">
          <font-awesome-icon :icon="['fas', 'dollar-sign']"/>
          <span>{{salary}}</span>
        </p>

        <p class="deadline" :title="deadline">
          <font-awesome-icon :icon="['fas', 'user-clock']"/>
          <span> {{deadline}}</span>
        </p>
      </div>

    </div>
  </div>
</template>

<script>
  import {ConvertStringToShorterString, FormattedDate, ConvertToSentenceCase} from '~/assets/js/functions';

  export default {
    props: {
      jobInfo: Object,
    },
    data() {
      return {
        logoUrl: this.jobInfo.logoUrl,
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
        salary: this.jobInfo.salary.min + ' triệu - ' + this.jobInfo.salary.max + ' triệu',
        deadline: this.jobInfo.deadline
      }
    },
    methods: {
      handleOnClickAvatar() {
        alert("Click");
        this.$router.push('/tuyen-dung');
      }
    },

    created() {
      this.jobTitle.value = ConvertStringToShorterString(this.jobTitle.title, 0, 33);
      this.companyName.value = ConvertStringToShorterString(this.companyName.title, 0, 32);
      this.deadline = FormattedDate(this.deadline);
      // console.log(this.jobInfo);
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
    font-size: $fs-small-14;
    display: flex;
    justify-content: space-between;
    line-height: 25px;

    .salary,
    .work-addresses {
      color: $color-pink;
    }

    .deadline {
      opacity: 0.8;

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

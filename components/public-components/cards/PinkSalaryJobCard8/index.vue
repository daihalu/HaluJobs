<template>
  <div class="card">
    <div class="avatar">
      <nuxt-link :to="jobInfo.jobUrl" :title="jobInfo.companyName">
        <img :src="jobInfo.logoUrl"/>
      </nuxt-link>
    </div>

    <div class="container">
      <el-tooltip class="item" effect="dark" :content="jobInfo.jobTitle" placement="top-start">
        <p class="position">
          <nuxt-link :to="jobInfo.jobUrl" :title="jobInfo.jobTitle">
            {{jobTitle}}
          </nuxt-link>
        </p>
      </el-tooltip>

      <p class="company" :title="jobInfo.companyName">
        <font-awesome-icon :icon="['far', 'building']"/>
        {{companyName}}
      </p>

      <div class="item">
        <p class="salary" :title="jobInfo.salary">
          <font-awesome-icon :icon="['fas', 'dollar-sign']"/>
          {{jobInfo.salary}}
        </p>

        <p class="deadline" :title="jobInfo.deadline">
          <font-awesome-icon :icon="['fas', 'user-clock']"/>
          {{jobInfo.deadline}}
        </p>

        <p class="card-status" v-if="seenCard">Đã xem</p>
      </div>

    </div>
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
        seenCard: this.jobInfo.seen,
        jobTitle: this.jobInfo.jobTitle,
        companyName: this.jobInfo.companyName
      }
    },
    created() {
      this.jobTitle = ConvertStringToShorterString(this.jobTitle, 0, 30);
      this.companyName = ConvertStringToShorterString(this.companyName, 0, 28);
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
  }

  .company {
    opacity: 0.8;
    padding-bottom: 3px;
  }

  .company:hover {
    opacity: 1;
  }

  .deadline,
  .salary {
    font-size: $fs-small-14;
    line-height: 25px;
    display: inline;
  }

  .salary {
    color: $color-pink;
  }

  .deadline {

    opacity: 0.8;
  }

  .deadline:hover {
    opacity: 1;
  }

  svg {
    font-size: 14px;
    opacity: 0.7;
  }

  .card-status {
    height: 100%;
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

</style>

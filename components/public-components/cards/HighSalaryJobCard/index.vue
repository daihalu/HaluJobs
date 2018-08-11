<template>
  <div class="job-card">
    <div class="job-card--avatar">
      <nuxt-link :to="jobInfo.jobUrl" :title="jobInfo.companyName">
        <img :src="jobInfo.avatarUrl"/>
      </nuxt-link>
    </div>

    <div class="job-card--content el-col-16">
      <el-tooltip class="item" effect="dark" :content="jobInfo.position" placement="top-start">
        <p class="position">
          <nuxt-link to="/tuyen-dung/viec-lam" :title="jobInfo.position">
            {{jobInfo.position}}
          </nuxt-link>
        </p>
      </el-tooltip>
      <p class="company" :title="jobInfo.companyName">
        <font-awesome-icon :icon="['far', 'building']"/>
        {{jobInfo.companyName}}
      </p>
    </div>

    <div class="job-card--content--item el-col-5">
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
        {{jobInfo.workAddress}}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      jobInfo: Object
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .job-card {
    margin: 5px 3px;
    border: 1px solid $color-border;
    border-radius: $br-5;
    font-size: $fs-base-16;
    padding: $padding-border-box-10;
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    align-items: center;
  }
  

  .job-card--avatar img {
    border: 2px solid $color-gray;
    border-radius: $br-3;
    width: 70px;
    height: 50px;
    margin-top: 3px;
  }

  .job-card--content {
    margin-left: 20px;
  }


  .position {
    color: $color-primary;
    font-weight: $fw-base-500;
    padding-bottom: 5px;
  }

  .company {
    opacity: 0.8;

  }

  svg {
    margin-right: 3px;
    font-size: 14px;
    opacity: 0.7;
  }

  .salary {
    color: $color-pink;
  }

  .deadline, .salary, .workAddress {
    font-size: 14px;
    line-height: 25px;
    margin-right: 10px;
  }

  .deadline, .workAddress {
    display: inline;
  }

  .deadline {
    opacity: 0.8;
  }

</style>


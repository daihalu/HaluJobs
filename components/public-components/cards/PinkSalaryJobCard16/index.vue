<template>
  <div class="card">
    <div class="avatar">
      <nuxt-link :to="jobInfo.jobUrl" :title="jobInfo.companyName">
        <img :src="jobInfo.avatarUrl"/>
      </nuxt-link>
    </div>

    <el-col :span="16" class="job-card--content">
      <el-tooltip class="item" effect="dark" :content="jobInfo.position" placement="top-start">
        <p class="position">
          <nuxt-link :to="jobInfo.jobUrl" :title="jobInfo.position">
            {{jobInfo.position}}
          </nuxt-link>
        </p>
      </el-tooltip>
      <p class="company" :title="jobInfo.companyName">
        <font-awesome-icon :icon="['far', 'building']"/>
        {{jobInfo.companyName}}
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
        {{jobInfo.workAddress}}
      </p>
    </el-col>
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

  .card {
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    align-items: center;
  }
  .avatar {
    height: 70px;
    width: 50px;
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

  .position {
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
    margin-right: 10px;
  }

  .salary {
    color: $color-pink;
  }

  .deadline,
  .workAddress {
    display: inline;
  }

  .deadline:hover {
    opacity: 1;
  }

</style>


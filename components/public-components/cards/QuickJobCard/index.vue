<template>
  <div class="job-card">
    <div>
      <nuxt-link :to="jobInfo.jobUrl" :title="jobInfo.companyName">
        <img :src="jobInfo.avatarUrl"/>
      </nuxt-link>
    </div>

    <div class="container">
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

      <div class="items">
        <p class="salary" :title="jobInfo.salary">
          <font-awesome-icon :icon="['fas', 'dollar-sign']"/>
          {{jobInfo.salary}}
        </p>

        <p class="deadline" :title="jobInfo.deadline">
          <font-awesome-icon :icon="['fas', 'user-clock']"/>
          {{jobInfo.deadline}}
        </p>
      </div>

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

  img {
    border: 2px solid $color-gray;
    border-radius: $br-3;
    width: 70px;
    height: 70px;
    margin-top: 3px;
  }

  .container {
    margin-left: 10px;
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
    padding-left: 50px;
    opacity: 0.8;
  }

  .deadline:hover {
    opacity: 1;
  }

  svg {
    font-size: 14px;
    opacity: 0.7;
  }

</style>

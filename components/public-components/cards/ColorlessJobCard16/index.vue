<template>
  <el-row class="card">
    <el-col :span="18" class="job-card--content">

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
    <el-col :span="6">
      <p class="salary" :title="jobInfo.salary">
        <font-awesome-icon icon="dollar-sign"/>
        {{jobInfo.salary}}
      </p>

      <p class="expiryDate" :title="jobInfo.expiryDate">
        <font-awesome-icon icon="user-clock"/>
        {{jobInfo.expiryDate}}
      </p>

      <p class="location" :title="jobInfo.location">
        <font-awesome-icon icon="map-marker-alt"/>
        {{jobInfo.location}}
      </p>
    </el-col>
  </el-row>
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

  svg {
    margin-right: 3px;
    opacity: 0.7;
  }

  .position {
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


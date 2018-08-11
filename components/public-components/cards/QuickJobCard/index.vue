<template>
  <div class="job-card">
    <div>
      <nuxt-link :to="quickJobUrl" :title="companyName">
        <img src="https://www.codyhub.com/wp-content/uploads/2017/07/i2.jpg"/>
      </nuxt-link>
    </div>

    <div class="job-card--content">
      <el-tooltip class="item" effect="dark" :content="position" placement="top-start">
        <p class="position">
          <nuxt-link to="/tuyen-dung/viec-lam" :title="position">
            {{position}}
          </nuxt-link>
        </p>
      </el-tooltip>

      <p class="company" :title="companyName">
        <font-awesome-icon :icon="['far', 'building']"/>
        {{companyName}}
      </p>

      <div class="job-card--content--item">
        <p class="salary" :title="salary">
          <font-awesome-icon icon="dollar-sign"/>
          {{salary}}
        </p>

        <p class="deadline" :title="quickJobUrl">
          <font-awesome-icon icon="user-clock"/>
          {{deadline}}
        </p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    props: {
      position: String,
      companyName: String,
      salary: String,
      deadline: String,
      quickJobUrl: String
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

  .job-card--content {
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

  .salary {
    color: $color-pink;
  }

  .deadline,
  .salary {
    font-size: $fs-small-14;
    line-height: 25px;
    display: inline;
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

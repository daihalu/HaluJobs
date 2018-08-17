<template>
  <div class="card">
    <div class="avatar">
      <nuxt-link :to="jobInfo.jobUrl" :title="jobInfo.companyName">
        <img :src="jobInfo.avatarUrl"/>
      </nuxt-link>
    </div>

    <div class="container">
      <el-tooltip effect="dark" :content="jobInfo.position" placement="top-start">
        <p class="position">
          <nuxt-link :to="jobInfo.jobUrl" :title="jobInfo.position">
            {{position}}
          </nuxt-link>
        </p>
      </el-tooltip>

      <p class="company item" :title="jobInfo.companyName">
        <font-awesome-icon :icon="['far', 'building']"/>
        {{companyName}}
      </p>

      <div class="items">
        <p class="item salary" :title="jobInfo.salary">
          <font-awesome-icon :icon="['fas', 'dollar-sign']"/>
          {{jobInfo.salary}}
        </p>

        <p class="item deadline" :title="jobInfo.deadline">
          <font-awesome-icon :icon="['fas', 'user-clock']"/>
          {{jobInfo.deadline}}
        </p>
        <p class="item location" :title="jobInfo.workAddress">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
          {{workAddress}}
        </p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    props: {
      jobInfo: Object
    },
    data() {
      return {
        position: this.jobInfo.position,
        companyName: this.jobInfo.companyName,
        workAddress: this.jobInfo.workAddress
      }
    },
    created() {
      console.log(this.position);
      if (this.position.length > 30) {
        this.position = this.position.slice(0, 30) + '...';
        console.log(this.position);
      }

      if (this.companyName.length > 33) {
        this.companyName = this.companyName.slice(0, 33) + '...';
        console.log(this.companyName);
      }

      if (this.workAddress.length > 7) {
        this.workAddress = this.workAddress.slice(0, 5) + '...';
        console.log(this.workAddress);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .avatar {
    height: 70px;
  }

  img {
    border: 2px solid $color-gray;
    border-radius: $br-5;
    height: 70px;
    width: 70px;
  }

  .container {
    margin-left: 10px;
    width: 100%;
  }

  .items {
    display: flex;
    justify-content: space-between;
  }

  .item {
    font-size: 14px;
    line-height: 25px;
    display: inline;
  }

  .position {
    color: $color-primary;
    font-weight: $fw-base-500;
    padding-bottom: 5px;
    font-size: $fs-base-16;
  }

  .company {
    opacity: 0.8;
    padding-bottom: 3px;
  }

  .company:hover {
    opacity: 1;
  }

  .salary,
  .location {
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

</style>



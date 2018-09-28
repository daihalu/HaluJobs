<template>
  <div class="card">
    <div class="avatar">
      <nuxt-link to="/" :title="jobInfo.employer.name">
        <img :src="jobInfo.employer._logo"/>
      </nuxt-link>
    </div>

    <div class="container">

      <p class="jobTitle" :title="jobInfo.title">
        <nuxt-link to="/">
          {{jobTitle}}
        </nuxt-link>
      </p>

      <p class="company item" :title="jobInfo.employer.name">
        <font-awesome-icon :icon="['far', 'building']"/>
        {{companyName}}
      </p>

      <div class="items">
        <p class="item salary" :title="salary">
          <font-awesome-icon :icon="['fas', 'dollar-sign']"/>
          {{salary}}
        </p>

        <!--<p class="item deadline" :title="closingDate">-->
        <!--<font-awesome-icon :icon="['fas', 'user-clock']"/>-->
        <!--{{closingDate}}-->
        <!--</p>-->
        <p class="item location" :title="workAddressTitle">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
          <span> {{workAddresses}}</span>

        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import {ConvertStringToShorterString} from '~/assets/js/functions';

  export default {
    props: {
      jobInfo: Object,
    },
    data() {
      return {
        logoUrl: '/',
        closingDate: '',
        jobTitle: this.jobInfo.title,
        companyName: this.jobInfo.employer.name,
        workAddresses: this.jobInfo.locations.join(', '),
        workAddressTitle: this.jobInfo.employer.address,
        salary: this.jobInfo.salary.label
      }
    },
    methods: {
      formattedDate(d) {
        let date = d.slice(0, 10).split('-');
        return date[2] + '/' + date[1] + '/' + date[0];
      },
    },
    created() {
      this.jobTitle = ConvertStringToShorterString(this.jobTitle, 0, 35);
      this.companyName = ConvertStringToShorterString(this.companyName, 0, 33);
      this.workAddress = ConvertStringToShorterString(this.workAddress, 0, 12);
      this.closingDate = this.formattedDate(this.jobInfo.deadline);
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .card {
    border: none;
    padding: 3px;
    width: 100%;
    max-width: 860px;
  }

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

  .jobTitle {
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




<template>
  <div class="box-right companyRecruitment">
    <h4>{{name}}</h4>
    <hr class="hr-1"/>
    <div v-for="item in companyJobs" :key="item.name">
      <attractive-job-card
        :jobInfo="item"
      />
    </div>

  </div>
</template>

<script>
  import AttractiveJobCard from '~/components/public-components/cards/PinkWorkAddressSalaryJobCard8';

  export default {
    props: {
      name: String,
      companyJobs: Array
    },
    components: {
      AttractiveJobCard
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .box-right {
    border: 1px solid $color-gray;
    padding: 15px;
    background-color: $color-white;
    margin-top: $mg-top-bottom-15;
    text-align: center;
  }

  .companyRecruitment {
    text-align: left;
  }

  .companyRecruitment h4 {
    line-height: 25px;
  }

  hr {
    margin-bottom: 20px;
  }

  .companyRecruitment div {
    margin-bottom: 10px;
  }

</style>

<style lang="scss">
  @import "~assets/css/halujobs_variables";
</style>

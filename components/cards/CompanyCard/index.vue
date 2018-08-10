<template>
      <el-card shadow="hover" class="company-card" :title="companyName">
        <div class="company-card--cover">
          <img src="https://cdn1.mywork.com.vn/media/images/brand-cover/cover-4.jpg"/>
        </div>
        <a class="company-card--avatar">
          <img src="http://www.spulsa.info/wp-content/uploads/best-25-hexagon-logo-ideas-on-pinterest-geometric-logo-simple-hexagon-logos.jpg"/>
        </a>
        <div >
          <p class="company-card--name">{{ companyName }}</p>
        </div>
      </el-card>

</template>

<script>
  export default {
    props: {
      colNum: Number
    },
    data() {
      return {
        seenCard: false,
        companyName: 'Công ty Cổ phần công nghệ Halu Việt Nam'
      }
    },
    methods: {
      onClickCard: function () {
        alert("Click");
        this.seenCard = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs-variables";

  .company-card {
    font-size: 14px;
    position: relative;
    padding: 10px;
    height: 230px;
    margin-bottom: 15px;
  }

  .company-card:hover {
    cursor: pointer;
  }

  .company-card--cover img {
    height: 150px;
    width: 100%;
    border-radius: 3px;
  }

  .company-card--avatar img {
    width: 80px;
    position: absolute;
    top: 135px;
    left: 40px;
    border-radius: 3px;
  }

  .company-card--name {
    font-size: 16px;
    color: $color-primary;
    font-weight: $fw-base-500;
    display: inline;
    position: absolute;
    left: 130px;
    margin-top: 10px;
  }

</style>

<style>
  .el-card__body {
    padding: 0 !important;
  }
</style>

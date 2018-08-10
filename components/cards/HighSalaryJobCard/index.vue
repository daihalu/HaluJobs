<template>
  <div class="job-card">
    <div class="job-card--avatar">
      <nuxt-link to="/tuyen-dung/viec-lam" :title="companyName">
        <img src="http://www.spulsa.info/wp-content/uploads/photo-logos-free-online-logo-maker-design-a-custom-logo-canva.png"/>
      </nuxt-link>
    </div>
    <div class="job-card--content el-col-16">
      <el-tooltip class="item" effect="dark" :content="position" placement="top-start">
        <p class="position">
          <nuxt-link to="/tuyen-dung/viec-lam" :title="position">
            {{position}}
          </nuxt-link>
        </p>
      </el-tooltip>
      <p class="company" :title="companyName"><font-awesome-icon :icon="['far', 'building']"/>{{companyName}}</p>
    </div>
    <div class="job-card--content--item el-col-5">
      <p class="salary" :title="salary"><font-awesome-icon icon="dollar-sign"/>{{salary}}</p>
      <p class="expiryDate" :title="expiryDate"><font-awesome-icon icon="user-clock"/>{{expiryDate}}</p>
      <p class="location" :title="location"><font-awesome-icon icon="map-marker-alt"/>{{location}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      colNum: Number
    },
    data() {
      return {
        position: 'Nhân Viên Marketing Online - Được Đào Tạo Từ A-Z',
        companyName: 'Công Ty Cổ Phần Tư Vấn Bất Động Sản Phương Đông',
        salary: '10 triệu - 20 triệu',
        expiryDate: '13/7/2018',
        location: 'Hà Nội'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs-variables";

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

  .job-card:hover {
    box-shadow: 0 0 5px $color-primary;
    cursor: pointer;
  }

  .job-card:active {
    box-shadow: 0 0 0 transparent;
    transition: none;
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

  .expiryDate, .salary, .location {
    font-size: 14px;
    line-height: 25px;
    margin-right: 10px;
  }

  .expiryDate, .location {
    display: inline;
  }

  .expiryDate {
    opacity: 0.8;
  }

</style>


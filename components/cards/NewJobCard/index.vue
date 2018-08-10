<template>
    <el-card shadow="hover" class="job-card">
      <div class="el-col-16 job-card--content">
        <el-tooltip class="item" effect="dark" :content="position" placement="top">
          <p class="position">{{position}}</p>
        </el-tooltip>
        <p class="company"><font-awesome-icon :icon="['far', 'building']"/>{{companyName}}</p>
      </div>
      <div class="el-col-8">
        <p class="salary"><font-awesome-icon icon="dollar-sign"/>{{salary}}</p>
        <p class="expiryDate"><font-awesome-icon icon="clock"/>{{expiryDate}}</p>
        <p class="location"><font-awesome-icon icon="map-marker-alt"/>{{location}}</p>
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
  .job-card {
    font-size: 14px;
    position: relative;
    padding: 10px;
    margin-bottom: 5px;
  }

  .job-card:hover {
    cursor: pointer;
  }

  .job-card--avatar img {
    width: 65px;
  }


  .job-card--content p {
    /*margin-bottom: 4px;*/
    line-height: 25px;
    margin-bottom: 5px;
  }

  .el-col-8 p {
    line-height: 25px;
  }

  i {
    margin-right: 5px;
  }

  .job-content p {
    margin-bottom: 0;
    width: 100%;
    font-size: 0.8em;
  }

  .position {
    /*color: #1AB394;*/
    margin-bottom: 1%;
    font-size: 1rem;
    font-weight: 700;
  }

  .location svg {
    margin-right: 5px;
  }

  .company {
    opacity: 0.8;
  }

  .company svg {
    margin-right: 3px;
  }

  .salary {
    /*color: #FC4275;*/
    display: inline;
  }

  .salary svg {
    margin-right: 6px;
  }

  .expiryDate {

  }

  svg {
    font-size: 14px !important;
    width: 10px;
  }

</style>

<template>
  <div class="container">
      <h3>Thông tin cá nhân</h3>

      <p><strong>Họ tên: </strong>{{name}}</p>
      <p><strong>Ngày sinh: </strong>{{dateOfBirth}}</p>
      <p><strong>Giới tính: </strong>{{gender}}</p>
      <p><strong>Tình trạng hôn nhân: </strong>{{marriageStatus}}</p>
      <p><strong>Địa chỉ: </strong>{{address}}</p>
      <p><strong>Thành phố: </strong>{{city}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      name: String,
      dateOfBirth: String,
      gender: String,
      marriageStatus: String,
      address: String,
      city: String
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs-variables";

  .container {
    width: 100%;
    color: $color-black;
    border: 1px solid $color-gray;
    background-color: $color-white;
    margin-top: $mg-top-bottom-20;
    border-radius: $br-5;
    padding: $padding-border-box-15;
  }

  .container h3 {
    color: $color-primary;
    border-bottom: 1px solid $color-border;
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-size: $fs-large-18;
    font-weight: $fw-base-500;
  }

  .container hr {
    margin: 10px 0 5px 0;
  }

  .container p {
    line-height: 25px;
    margin-bottom: 3px;
  }

</style>

<style lang="">

</style>

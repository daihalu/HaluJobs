<template>
  <el-container class="container">
    <el-header class="header">
      <el-row class="nav-bar">
        <el-col :span="4" class="nav-bar--logo">
          <nuxt-link to="/">
              <img src="https://halutech.com.vn/images/logo.png"/>
          </nuxt-link>
          <p></p>
        </el-col>
        <el-col :span="20" class="nav-bar--container">
          <ul class="nav-menu">
            <li>
              <nuxt-link to="/" class="nav-item">
                <font-awesome-icon :icon="['fas', 'home']"/>
                <p>Trang chủ</p>
              </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/tuyen-dung" class="nav-item">
                <font-awesome-icon :icon="['fas', 'briefcase']"/>
                <p>Tuyển dụng</p>
              </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/ung-vien" class="nav-item">
                <font-awesome-icon :icon="['far', 'id-card']"/>
                <p>Ứng viên</p>
              </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/cong-ty" class="nav-item">
                <font-awesome-icon :icon="['far', 'building']"/>
                <p>Công ty</p>
              </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/tai-khoan" class="nav-item">
                <font-awesome-icon :icon="['fas', 'user-tie']"/>
                <p>Tài khoản</p>
              </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/toan-quoc" class="nav-item">
                <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                <p>Toàn quốc</p>
              </nuxt-link>
            </li>
          </ul>
        </el-col>
      </el-row>
    </el-header>
  </el-container>

</template>

<script>

  export default {
    data() {
      return {
        activeIndex: '1',
        activeMenuItem: 'homepage'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .container {
    background-color: $color-primary;
    position: fixed;
    z-index: $index-top-1000;
    width: 100%;
    height: 65px;
    top: 0;
    font-size: 20px;
    font-weight: $fw-small-400;
  }

  .header {
    width: 95%;
    margin: 0 auto;
    padding: 0;
    height: 100% !important;
  }

  .nav-bar {
    height: 100%;
  }

  .nav-bar--container {
    height: 100%;

    ul {
      list-style: none;
    }
  }

  .nav-menu {
    display: flex;
    height: 100%;
    float: right;

    .nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      padding: 10px 15px;
      transition: all 0.2s ease-in-out;
      color: $color-white;

      svg {
        font-size: 17px;
      }

      p {
        font-size: 16px;
        text-transform: uppercase;
      }

      &:hover {
        background-color: $color-secondary;
      }
    }

  }

  .nav-bar--logo {
    height: 100%;
    display: flex;
    align-items: center;

    a {
      display: inline-block;
      height: 80%;
      line-height: 80%;

      img {
        height: 100%;
      }
    }
  }

</style>


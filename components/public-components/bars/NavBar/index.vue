<template>
  <el-container class="container">
    <el-header class="header">
      <el-row class="nav-bar">
        <el-col :span="4" class="nav-bar--logo">
          <nuxt-link to="/">
            <img
              src="https://halutech.com.vn/images/logo.png"
              @click="handleOnClickNavBar('HOME_PAGE')"
            />
          </nuxt-link>
          <p></p>
        </el-col>
        <el-col :span="20" class="nav-bar--container">
          <ul class="nav-menu">
            <li
              @click="handleOnClickNavBar('HOME_PAGE')"
              :class="{active: activeMenuItem === 'HOME_PAGE'}"
            >
              <nuxt-link to="/" class="nav-item">
                <font-awesome-icon :icon="['fas', 'home']"/>
                <p>Trang chủ</p>
              </nuxt-link>
            </li>

            <li
              @click="handleOnClickNavBar('RECRUITMENT_PAGE')"
              :class="{active: activeMenuItem === 'RECRUITMENT_PAGE'}"
            >
              <nuxt-link to="/tuyen-dung" class="nav-item">
                <font-awesome-icon :icon="['fas', 'briefcase']"/>
                <p>Tuyển dụng</p>
              </nuxt-link>
            </li>

            <li
              @click="handleOnClickNavBar('CANDIDATE_PAGE')"
              :class="{active: activeMenuItem === 'CANDIDATE_PAGE'}"
            >
              <nuxt-link to="/ung-vien" class="nav-item">
                <font-awesome-icon :icon="['far', 'id-card']"/>
                <p>Ứng viên</p>
              </nuxt-link>
            </li>

            <li
              @click="handleOnClickNavBar('COMPANY_PAGE')"
              :class="{active: activeMenuItem === 'COMPANY_PAGE'}"
            >
              <nuxt-link to="/cong-ty" class="nav-item">
                <font-awesome-icon :icon="['far', 'building']"/>
                <p>Công ty</p>
              </nuxt-link>
            </li>

            <li
              @click="handleOnClick"
              :class="{active: activeMenuItem === 'ACCOUNT_PAGE'}"
            >
              <!--<nuxt-link to="/tai-khoan" class="nav-item">-->
              <a class="nav-item">
                <font-awesome-icon :icon="['fas', 'user-tie']"/>
                <p>Tài khoản</p>
              </a>
              <!--</nuxt-link>-->
            </li>

            <li
              @click="handleOnClickNavBar('WHOLE_COUNTRY_PAGE')"
              :class="{active: activeMenuItem === 'WHOLE_COUNTRY_PAGE'}"
            >
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
  import {mapState, mapGetters, mapActions} from 'vuex';
  import {EventTypes} from '~/assets/js/event-types';

  export default {
    props: {
      activeMenuItem: String
    },
    computed: {
      ...mapGetters({
        searchingContent: 'searchingContent'
      })
    },
    methods: {
      ...mapActions({
        updateNavBarStatus: 'updateNavBarStatus',
        updateSearchingContent: 'updateSearchingContent'
      }),
      handleOnClickNavBar(status) {
        this.updateNavBarStatus(status);
        this.updateSearchingContent('');
      },
      handleOnClick() {
        this.handleOnClickNavBar('ACCOUNT_PAGE');
        this.$emit('on_click_account_text_on_nav_bar');
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
    width: $page-width;
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
        cursor: pointer;
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

  .active {
    background-color: $color-secondary;
  }

</style>


<template>
  <el-row :gutter="8" class="container">
    <el-col
      :span="6"
      class="item"
      :class="{active: activeMenuItem === 'RECRUITMENT_PAGE'}"
      @click.native="handleOnClickNavSearchBar('RECRUITMENT_PAGE')"
    >
      <nuxt-link to="/tuyen-dung">
        <font-awesome-icon icon="briefcase"/>
        Tìm việc làm
      </nuxt-link>
    </el-col>

    <el-col
      :span="6"
      class="item"
      :class="{active: activeMenuItem === 'CANDIDATE_PAGE'}"
      @click.native="handleOnClickNavSearchBar('CANDIDATE_PAGE')"
    >
      <nuxt-link to="/ung-vien">
          <font-awesome-icon :icon="['far', 'id-card']"/>
          Tìm ứng viên
      </nuxt-link>
    </el-col>

    <el-col
      :span="6"
      class="item"
      :class="{active: activeMenuItem === 'COMPANY_PAGE'}"
      @click.native="handleOnClickNavSearchBar('COMPANY_PAGE')"
    >
      <nuxt-link to="/cong-ty">
          <font-awesome-icon :icon="['far', 'building']"/>
          Tìm công ty
      </nuxt-link>
    </el-col>

    <el-col
      :span="6"
      class="item"
      :class="{active: activeMenuItem === 'UNIVERSITY_PAGE'}"
      @click.native="handleOnClickNavSearchBar('')"
    >
      <nuxt-link to="/danh-sach-truong">
          <font-awesome-icon icon="school"/>
          Tìm trường
      </nuxt-link>
    </el-col>
  </el-row>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: "NavSearchBar",
    computed: {
      ...mapGetters({
        activeMenuItem: 'navBarStatus',
        searchingContent: 'searchingContent'
      })
    },
    methods: {
      ...mapActions({
        updateNavBarStatus: 'updateNavBarStatus',
        updateSearchingContent: 'updateSearchingContent'
      }),
      handleOnClickNavSearchBar(status) {
        this.updateNavBarStatus(status);
        this.updateSearchingContent('');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .container {
    display: flex;
    width: 50%;
    text-align: center;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .item {
    background-color: $color-white;
    line-height: 40px;
    border-bottom: none;
    border-radius: $br-5 $br-5 0 0;
    margin-right: 5px;
    color: $color-black;
    transition: all 0.15s ease-in-out;

    &:hover {
      cursor: pointer;
      background-color: $color-secondary;

      a {
        color: $color-white;
      }
    }

    &:active {
      cursor: pointer;
      background-color: $color-primary;
      color: $color-white;
      transition: none;
    }
  }

  a {
    color: $color-black;
  }


  .active {
    background-color: $color-secondary;
    color: $color-white;

    a {
      color: $color-white;
    }
  }
</style>


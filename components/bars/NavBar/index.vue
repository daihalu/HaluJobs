<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="4">
          <nuxt-link to="/">
            <div class="inline-logo">
              <img src="https://halutech.com.vn/images/logo.png"/>
            </div>
          </nuxt-link>
        </el-col>
        <el-col :span="20">
          <el-menu class="" @select="handleSelect">
            <nuxt-link to="/" class="menu-item">
              <el-menu-item
                index="1"
                @click="activeMenuItem = 'homepage'"
                :class="{active: activeMenuItem === 'homepage' }">
                <font-awesome-icon icon="home"/>
                <p>TRANG CHỦ</p>
              </el-menu-item>
            </nuxt-link>


            <nuxt-link to="/tuyen-dung">
              <el-menu-item
                index="2" class="menu-item"
                @click="activeMenuItem = 'timvieclam'"
                :class="{active: activeMenuItem === 'timvieclam' }">
                <font-awesome-icon icon="briefcase"/>
                <p>TUYỂN DỤNG</p>
              </el-menu-item>
            </nuxt-link>

            <nuxt-link to="/ung-vien">
              <el-menu-item
                index="3"
                class="menu-item"
                @click="activeMenuItem = 'timungvien'"
                :class="{active: activeMenuItem === 'timungvien' }">
                <font-awesome-icon :icon="['far', 'id-card']"/>
                <p>ỨNG VIÊN</p>
              </el-menu-item>
            </nuxt-link>

            <nuxt-link to="/cong-ty">
              <el-menu-item
                index="4"
                class="menu-item"
                @click="activeMenuItem = 'timcongty'"
                :class="{active: activeMenuItem === 'timcongty' }">
                <font-awesome-icon :icon="['far', 'building']"/>
                <p>CÔNG TY</p>
              </el-menu-item>
            </nuxt-link>

            <nuxt-link to="/bang-gia">
              <el-menu-item
                index="5"
                class="menu-item"
                @click="activeMenuItem = 'item5'"
                :class="{active: activeMenuItem === 'item5' }">
                <font-awesome-icon icon="file-invoice-dollar"/>
                <p>BẢNG GIÁ</p>
              </el-menu-item>
            </nuxt-link>

            <nuxt-link to="/tai-khoan">
              <el-menu-item
                index="6"
                class="menu-item"
                @click="activeMenuItem = 'item6'"
                :class="{active: activeMenuItem === 'item6' }">
                <font-awesome-icon icon="user-tie"/>
                <p>TÀI KHOẢN</p>
              </el-menu-item>
            </nuxt-link>

            <nuxt-link to="/toan-quoc">
              <el-menu-item
                index="7"
                class="menu-item"
                @click="activeMenuItem = 'item7'"
                :class="{active: activeMenuItem === 'item7' }">
                <font-awesome-icon icon="map-marker-alt"/>
                <p class="over-country-p">TOÀN QUỐC</p>
                <!--<i class="fas fa-chevron-down"></i>-->

              </el-menu-item>
            </nuxt-link>
            <!--<el-submenu index="7" class="menu-item" menu-trigger="click">-->
            <!--<template slot="title">-->
            <!--<i class="fa fa-map-marker-alt over-country-i"></i>-->
            <!--<p class="over-country-p">TOÀN QUỐC</p>-->
            <!--</template>-->
            <!--<el-menu-item index="7-1">Toàn quốc</el-menu-item>-->
            <!--<el-menu-item index="7-2">Miền Bắc</el-menu-item>-->
            <!--<el-menu-item index="7-3">Miền Nam</el-menu-item>-->
            <!--</el-submenu>-->

          </el-menu>
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

  .el-container {
    background-color: $color-primary;
    position: fixed;
    z-index: $index-top-1000;
    width: 100%;
    top: 0;
    font-size: 20px;
    font-weight: $fw-small-400;
  }

  .el-header {
    width: $page-width;
    margin: 0 auto;
    padding: 0;
    height: 100% !important;
  }

  .el-menu {
    display: flex;
    background-color: inherit;
    border: none;
    float: right;
  }

  .el-menu-item {
    display: flex;
    padding-top: 10px;
    justify-content: space-around;
    color: $color-white;
  }

  svg {
    position: absolute;
  }

  p {
    display: inline;
  }

  .inline-logo {

  }

  .inline-logo img {
    margin-top: 5px;
    height: 45px;
    vertical-align: middle;
  }

  .el-menu-item:hover {
    background-color: $color-secondary;
  }

  .active {
    background-color: $color-secondary;
  }

  a {
    color: $color-white;
    font-weight: $fw-small-400;
  }

  a:hover {
    color: $color-white;
  }

  a:active {
    cursor: pointer;
    color: $color-white;
  }

</style>

<style lang="scss" scoped>

  ul {
    list-style-type: none;
  }

</style>

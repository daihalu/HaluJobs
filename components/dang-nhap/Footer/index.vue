<template>
  <el-container class="container" :style="{'background-image':'url('+backgroundUrl+');'}">
    <div class="footer-container">
      <el-footer class="footer">
        <div class="logo">
          <img src="https://halutech.com.vn/images/logo.png"/>
        </div>
        <el-row>
          <el-col :span="18" class="box-left">

            <h1 class="slogan">TUYỂN DỤNG THẦN TỐC - VIỆC LÀM NHƯ Ý</h1>
            <h3 class="company-name">Đơn vị chủ quản: Công ty Cổ phần công nghệ Halu Việt Nam</h3>

            <div class="item">
              <font-awesome-icon icon="phone"/>
              <p>Điện thoại: 098 999 88988</p>
            </div>

            <div class="item">
              <font-awesome-icon :icon="['far', 'envelope']"/>
              <p>Email: halu@halutech.com.vn</p>
            </div>

            <div class="item">
              <font-awesome-icon :icon="['far', 'building']"/>
              <p>Trụ sở chính: T2, 36/7 Ngọc Khánh, Ba Đình, Hà Nội</p>
            </div>

            <div class="item">
              <font-awesome-icon icon="map-marker-alt"/>
              <p>Văn phòng miền Bắc: 210, Quang Trung, Hà Đông, Hà Nội</p>
            </div>

            <div class="item">
              <font-awesome-icon icon="book"/>
              <p>ĐKKD số 0104157213 - ĐKKD thay đổi lần 3 ngày 24/8/2017 do Sở kế hoạch và đầu tư thành phố Hà Nội
                cấp</p>
            </div>

            <div class="item">
              <font-awesome-icon icon="book"/>
              <p>Giấy phép Mạng xã hội số 300/GP-BTTTT</p>
            </div>

            <div class="item">
              <font-awesome-icon icon="book"/>
              <p>Giấy phép hoạt động dịch vụ việc làm số: 05/SLĐTBXH-GP do Sở Lao Động Thương Binh & Xã Hội TP.Hà Nội
                cấp</p>
            </div>

          </el-col>

          <el-col :span="6" class="box-right">
            <div class="navigation-box">
              <p>
                <nuxt-link to="/gioi-thieu">Giới thiệu</nuxt-link>
              </p>
              <p>
                <nuxt-link to="/thoa-thuan-su-dung">Thoả thuận sử dụng</nuxt-link>
              </p>
              <p>
                <nuxt-link to="/quy-dinh-bao-mat">Quy định bảo mật</nuxt-link>
              </p>
              <p>
                <nuxt-link to="/hop-tac">Hợp tác</nuxt-link>
              </p>
              <p>
                <nuxt-link to="/tag-ky-nang">Tag kỹ năng</nuxt-link>
              </p>
              <p>
                <nuxt-link to="/quy-che">Quy chế</nuxt-link>
              </p>
              <p>
                <nuxt-link to="/chinh-sach-bao-mat">Chính sách bảo mật</nuxt-link>
              </p>
              <p>
                <nuxt-link to="/co-che-giai-quyet-tranh-chap">Cơ chế giải quyết tranh chấp</nuxt-link>
              </p>
            </div>

            <div class="contact-us">
              <p>Theo dõi HaluJobs trên mạng xã hội</p>
              <nuxt-link to="/">
                <font-awesome-icon :icon="['fab', 'facebook-f']"/>
              </nuxt-link>
              <nuxt-link to="/">
                <font-awesome-icon :icon="['fab', 'google']"/>
              </nuxt-link>
              <nuxt-link to="/">
                <font-awesome-icon :icon="['fab', 'twitter']"/>
              </nuxt-link>
            </div>
          </el-col>
        </el-row>

      </el-footer>
      <!--<div class="tag-box">-->
        <!--<el-row class="tags">-->
          <!--<nuxt-link to="/">Tìm việc làm</nuxt-link>-->
          <!--|-->
          <!--<nuxt-link to="/">Việc làm 24h</nuxt-link>-->
          <!--|-->
          <!--<nuxt-link to="/">Tìm việc nhanh</nuxt-link>-->
          <!--|-->
          <!--<nuxt-link to="/">Việc làm</nuxt-link>-->
          <!--|-->
          <!--<nuxt-link to="/">Tuyển dụng</nuxt-link>-->
          <!--|-->
          <!--<nuxt-link to="/">Tuyển dụng nhanh</nuxt-link>-->
          <!--|-->
          <!--<nuxt-link to="/">viec lam</nuxt-link>-->
          <!--|-->
          <!--<nuxt-link to="/">viec lam ha noi</nuxt-link>-->
          <!--|-->
          <!--<nuxt-link to="/">viec lam ho chi minh</nuxt-link>-->
          <!--|-->
          <!--<nuxt-link to="/">viec lam da nang</nuxt-link>-->
        <!--</el-row>-->
      <!--</div>-->
    </div>
  </el-container>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        backgroundUrl: require('~/assets/images/world-map.png')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  $color-bg: rgba(0, 0, 0, 0.3);

  .container {
    background: #202020 no-repeat center;

    background-size: contain;
    color: $color-white;
    width: 100%;
    font-weight: $fw-small-400;
  }

  .footer-container {
    background-color: $color-bg;
    width: 100%;
  }

  .footer {
    width: 90%;
    margin: 0 auto;
    padding: 20px 0;
    height: 100% !important;
  }

  .logo {
    margin-bottom: 20px;
    height: 75px;
    img {
      height: 100%;
    }
  }

  .box-left {
    .slogan {
      font-weight: $fw-base-500;
    }

    .company-name {
      line-height: $line-height-40;
      font-weight: $fw-base-500;
    }

    .item {
      display: flex;
      line-height: $line-height-40;
      justify-content: baseline;
      align-items: center;

      svg {
        border: 1px solid $color-white;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        padding: 3px;
        background-color: rgba(0, 0, 0, 0.5);
      }

      p {
        display: inline;
        margin-left: 5px;
      }

    }
  }

  .navigation-box {
    border: 1px solid transparent;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: $br-5;
    padding: 20px;

    p {
      line-height: $line-height-30;

      a {
        color: $color-white !important;
      }
    }
  }

  .box-right {
    .contact-us {
      margin-top: 15px;

      p {
        line-height: $line-height-30;
        font-size: $fs-large-18;
        margin-bottom: 15px;
      }

      a {
        border: 1px solid transparent;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: $color-white;
        color: rgba(0, 0, 0, 0.7);
        margin-right: 20px;
        display: inline-block;
        text-align: center;
        line-height: 40px;

        svg {
          font-size: 20px;
        }
      }
    }
  }

  .tag-box {
    background-color: rgba(0, 0, 0, 0.7);
    margin: 0 auto;

    .tags {

      width: 100%;
      margin: 0 auto !important;
      padding-top: 10px;
      padding-bottom: 10px;

      a {
        color: $color-white;
        line-height: $line-height-30;
      }
    }
  }
</style>


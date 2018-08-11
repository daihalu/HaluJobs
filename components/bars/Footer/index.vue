<template>
  <el-container>
    <el-footer class="footer">
      <el-row>
        <el-col :span="18" class="footer--box-left">
          <div class="footer--logo">
            <img src="https://halutech.com.vn/images/logo.png"/>
          </div>
          <h1>HỆ SINH THÁI TUYỂN DỤNG HÀNG ĐẦU VIỆT NAM</h1>
          <h3>Đơn vị chủ quản: Công ty Cổ phần công nghệ Halu Việt Nam</h3>

          <div class="footer--item">
            <font-awesome-icon icon="phone"/>
            <p>Điện thoại: 098 999 88988</p>
          </div>

          <div class="footer--item">
            <font-awesome-icon :icon="['far', 'envelope']"/>
            <p>Email: halu@halutech.com.vn</p>
          </div>

          <div class="footer--item">
            <font-awesome-icon :icon="['far', 'building']"/>
            <p>Trụ sở chính: T2, 36/7 Ngọc Khánh, Ba Đình, Hà Nội</p>
          </div>

          <div class="footer--item">
            <font-awesome-icon icon="map-marker-alt"/>
            <p>Văn phòng miền Bắc: 210, Quang Trung, Hà Đông, Hà Nội</p>
          </div>

          <div class="footer--item">
            <font-awesome-icon icon="book"/>
            <p>ĐKKD số 0104157213 - ĐKKD thay đổi lần 3 ngày 24/8/2017 do Sở kế hoạch và đầu tư thành phố Hà Nội cấp</p>
          </div>

          <div class="footer--item">
            <font-awesome-icon icon="book"/>
            <p>Giấy phép Mạng xã hội số 300/GP-BTTTT</p>
          </div>

          <div class="footer--item">
            <font-awesome-icon icon="book"/>
            <p>Giấy phép hoạt động dịch vụ việc làm số: 05/SLĐTBXH-GP do Sở Lao Động Thương Binh & Xã Hội TP.Hà Nội cấp</p>
          </div>

        </el-col>

        <el-col :span="6" class="footer--box-right">
          <div class="navigation-box">
            <p><nuxt-link to="/gioi-thieu">Giới thiệu</nuxt-link></p>
            <p><nuxt-link to="/thoa-thuan-su-dung">Thoả thuận sử dụng</nuxt-link></p>
            <p><nuxt-link to="/quy-dinh-bao-mat">Quy định bảo mật</nuxt-link></p>
            <p><nuxt-link to="/hop-tac">Hợp tác</nuxt-link></p>
            <p><nuxt-link to="/tag-ky-nang">Tag kỹ năng</nuxt-link></p>
            <p><nuxt-link to="/quy-che">Quy chế</nuxt-link></p>
            <p><nuxt-link to="/chinh-sach-bao-mat">Chính sách bảo mật</nuxt-link></p>
            <p><nuxt-link to="/co-che-giai-quyet-tranh-chap">Cơ chế giải quyết tranh chấp</nuxt-link></p>
          </div>

          <div class="contact-us">
            <p>Theo dõi HaluJobs trên mạng xã hội</p>
            <nuxt-link to="/"><font-awesome-icon :icon="['fab', 'facebook-f']"/></nuxt-link>
            <nuxt-link to="/"><font-awesome-icon :icon="['fab', 'google']"/></nuxt-link>
            <nuxt-link to="/"><font-awesome-icon :icon="['fab', 'twitter']"/></nuxt-link>
          </div>
        </el-col>
      </el-row>
    </el-footer>
    <div class="tag-box">
      <el-row class="tags">
        <nuxt-link to="/">Tìm việc làm</nuxt-link> |
        <nuxt-link to="/">Việc làm 24h</nuxt-link> |
        <nuxt-link to="/">Tìm việc nhanh</nuxt-link> |
        <nuxt-link to="/">Việc làm</nuxt-link> |
        <nuxt-link to="/">Tuyển dụng</nuxt-link> |
        <nuxt-link to="/">Tuyển dụng nhanh</nuxt-link> |
        <nuxt-link to="/">viec lam</nuxt-link> |
        <nuxt-link to="/">viec lam ha noi</nuxt-link> |
        <nuxt-link to="/">viec lam ho chi minh</nuxt-link> |
        <nuxt-link to="/">viec lam da nang</nuxt-link>
      </el-row>
    </div>
  </el-container>
</template>

<script>
  export default {
    contact: "index"
  }
</script>

<style scoped lang="scss">
  @import "~assets/css/halujobs_variables";

  .el-container {
    background-color: $color-primary;
    color: $color-white;
    width: 100%;
    /*height: 100%;*/
    font-weight: $fw-small-400;

  }

  .el-footer {
    width: 1250px;
    margin: 0 auto;
    padding: 20px 0;
    height: 100% !important;

  }

  .footer--logo {
    margin-bottom: 15px;
  }

  .footer--box-left h1 {
    line-height: $line-height-50;
    font-weight: $fw-base-500;
  }

  .footer--box-left h3 {
    line-height: $line-height-40;
    font-weight: $fw-base-500;
  }

  .footer--item {
    display: flex;
    line-height: $line-height-40;
    justify-content: baseline;
    align-items: center;
  }

  .footer--item svg {
    border: 1px solid $color-white;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    padding: 3px;
    background-color: $color-secondary;
  }

  .footer--item p {
    display: inline;
    margin-left: 5px;
  }

  .navigation-box {
    border: 1px solid transparent;
    background-color: $color-secondary;
    border-radius: $br-5;
    padding: 20px;
    margin-top: 90px;
  }

  .navigation-box p {
    line-height: $line-height-30;
  }

  .navigation-box p a {
    color: $color-white !important;
  }

  .contact-us {
    margin-top: 15px;
  }

  .contact-us p {
    line-height: $line-height-30;
    font-size: $fs-large-18;
    margin-bottom: 15px;
  }

  .contact-us a  {
    border: 1px solid transparent;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: $color-white;
    color: $color-primary;
    margin-right: 20px;
    display: inline-block;
    text-align: center;
    line-height: 40px;
  }

  .contact-us a svg {
    font-size: 20px;
  }

  .tag-box {
    background-color: $color-secondary;
  }

  .tags {

    width: $page-width;
    margin: 0 auto !important;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .tags a {
    color: $color-white;
    line-height: $line-height-30;

  }


</style>

<style lang="scss">
  @import "~assets/css/halujobs_variables";

</style>

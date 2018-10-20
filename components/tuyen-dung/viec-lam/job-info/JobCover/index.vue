<template>
  <el-row class="container">
    <el-col :span="5">
      <div class="logo">
        <img :src="logoUrl" :alt="companyName"/>
      </div>
    </el-col>
    <el-col :span="14">
      <h2 class="job-title">{{title}}</h2>
      <p class="company-name">{{companyName}}</p>
      <p><strong>Địa điểm tuyển dụng:</strong><span> {{locations}}</span></p>
      <p><strong>Mức lương:</strong><span> {{salary}}</span></p>
      <p><strong>Hạn nộp hồ sơ:</strong><span> {{deadline}} </span></p>
      <div>
        <el-button
          class="btn apply-now"
        >
          <font-awesome-icon :icon="['far', 'clipboard']"/>
          Ứng tuyển ngay
        </el-button>
        <el-button
          @click="handleOnClickSaveJobBtn"
          :class="{active: isActive}"
          class="btn save-job"
        >
          <font-awesome-icon icon="heart"/>
          Lưu công việc
        </el-button>
      </div>
    </el-col>
    <el-col :span="5" class="box-right">
      <div class="hot-job">
        <font-awesome-icon :icon="['fas', 'star']"/>
        <font-awesome-icon :icon="['fas', 'star']"/>
        <font-awesome-icon :icon="['fas', 'star']"/>
        <p>Tin hấp dẫn</p>
      </div>
      <p><strong>Lượt xem:</strong><span> {{views}}</span></p>
      <p><strong>Ngày duyệt:</strong><span> {{createdDate}}</span></p>
      <hr class="hr-1">
      <div class="icon-container">
        <p title="Chia sẻ tới bạn bè qua Facebook" @click="handleOnClickFacebookBtn('google.com')">
          <font-awesome-icon class="icon-facebook" :icon="['fab', 'facebook-f']"/>
        </p>

        <p title="Chia sẻ tới bạn bè qua Twitter" @click="handleOnClickTwitterBtn('google.com', 'Share')">
          <font-awesome-icon class="icon-twitter" :icon="['fab', 'twitter']"/>
        </p>

        <p title="Chia sẻ tới bạn bè qua Linked In" @click="handleOnClickLinkedinBtn('google.com')">
          <font-awesome-icon class="icon-linkedin" :icon="['fab', 'linkedin-in']"/>
        </p>
      </div>

    </el-col>
  </el-row>
</template>

<script>
  import {FormattedDate} from '~/assets/js/functions';

  export default {
    name: 'JobCover',
    props: {
      title: String,
      companyName: String,
      salary: String,
      deadline: String,
      workAddresses: Array,
      logoUrl: String,
      createdAt: String,
      views: Number,
      isSaveJobBtnActive: Boolean
    },
    data() {
      return {
        isActive: this.isSaveJobBtnActive,
        locations: this.workAddresses.join(', '),
        createdDate: this.createdAt
      }
    },

    methods: {
      objectToGetParams(object) {
        return (
          '?' +
          Object.keys(object)
            .filter(key => !!object[key])
            .map(key => `${key}=${encodeURIComponent(object[key])}`)
            .join('&')
        );
      },

      handleOnClickFacebookBtn(url) {
        window.open(
          `https://www.facebook.com/sharer/sharer.php` +
          this.objectToGetParams({
            u: url
          }),
          '__blank'
        );
      },

      handleOnClickTwitterBtn(url, { title }) {
        window.open(
          'https://www.twitter.com/share' +
          this.objectToGetParams({
            url: url,
            text: title
          }),
          '__blank'
        );
      },

      handleOnClickLinkedinBtn(url) {
        window.open(
          'https://linkedin.com/shareArticle' +
          this.objectToGetParams({
            mini: true,
            url: url
          }),
          '__blank'
        );
      },

      handleOnClickSaveJobBtn() {
        this.isActive = !this.isActive;
        this.$emit('on_click_save_job_btn', this.isActive);
      }
    },

    created() {
      // console.log(this.$route);
      this.createdDate = FormattedDate(this.createdAt);
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .container {
    width: 100%;
    border: 1px solid $color-gray;
    padding: 20px 20px 20px 3px;
    background-color: $color-white;
    border-radius: 2px;
    display: flex;
    align-items: center;

    .logo {
      text-align: center;
      width: 214px;
      height: 214px;
      display: block;
      margin: 0 auto;

      img {
        width: 100%;
        border: 2px solid $color-gray;
        border-radius: 2px;
      }
    }
  }

  .job-title {
    font-weight: 600;
  }

  .company-name {
    color: $color-primary;
    font-weight: $fw-base-500;
    font-size: 20px;
    text-transform: uppercase;
  }

  p {
    line-height: 30px;

    span {
      color: $color-pink;
    }
  }

  .btn {
    padding: 10px 20px;
    margin-top: 10px;
  }

  .save-job {
    background-color: $color-white;
    border: 1px solid $color-pink;
    color: $color-pink;

    &:hover {
      background-color: $color-pink;
      color: $color-white;
      border-color: $color-pink;
      cursor: pointer;
    }

    &:active {
      background-color: $color-pink;
      color: $color-white;
    }
  }

  .apply-now {
    background-color: $color-white;
    border: 1px solid $color-primary;
    color: $color-primary;

    &:hover {
      background-color: $color-primary;
      color: $color-white;
    }

    &:active {
      background-color: $color-white;
      color: $color-primary;
    }
  }

  .active {
    background-color: $color-pink;
    color: $color-white;
    border-color: $color-pink;
  }

  .box-right {
    text-align: center;
    font-size: $fs-base-16;

    .hot-job {
      border: 1px solid $color-pink;
      background-color: $color-pink;
      color: $color-white;
      border-radius: 30px;
      width: 50%;
      margin: 20px auto;

      svg {
        margin-right: 5px;
      }
      p {
        line-height: 20px;
      }
    }

    hr {
      margin: 10px auto;
      opacity: 0.5;
      width: 80%;
    }

    .icon-container {
      margin-top: 15px;

      p {
        display: inline;
      }

      svg {
        border-radius: 2px;
        width: 40px;
        height: 40px;
        padding: 8px;
        transition: all 200ms ease-in-out;

        &:hover {
          cursor: pointer;
          color: $color-white;
        }
      }

      .icon-facebook {
        color: #3b5998;
        border: 1px solid #3b5998;
        margin-right: 20px;

        &:hover {
          background-color: #3b5998;
        }
      }

      .icon-twitter {
        color: #1da1f2;
        border: 1px solid #1da1f2;

        &:hover {
          background-color: #1da1f2;
        }
      }

      .icon-linkedin {
        color: #0077b5;
        border: 1px solid #0077b5;
        margin-left: 20px;

        &:hover {
          background-color: #0077b5;
        }
      }
    }
  }
</style>

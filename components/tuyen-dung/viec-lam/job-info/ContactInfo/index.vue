<template>
  <div class="box-container">
    <h3 class="box-title">Thông tin liên hệ</h3>

    <div class="container">
      <el-row>
        <el-col :span="5" class="box-left">
          <p>Người liên hệ</p>
          <p>Địa chỉ công ty</p>
          <p>Hạn nộp hồ sơ</p>
          <p>Ngôn ngữ hồ sơ</p>
        </el-col>
        <el-col :span="1" class="box-center">
          <p>:</p>
          <p>:</p>
          <p>:</p>
          <p>:</p>
        </el-col>
        <el-col :span="18" class="box-right">
          <p>{{jobInfo.contact_info.name}}</p>
          <p>{{jobInfo.employer.address}}, {{jobInfo.employer.city}}</p>
          <p>{{jobInfo.deadline}}</p>
          <p>{{foreignLanguages}}</p>
        </el-col>
      </el-row>

      <div class="btn-options">
        <el-button class="send-message" @click="handleOnClickSendMessageBtn">
          <font-awesome-icon :icon="['fas', 'comment']"/>
          Gửi tin nhắn
        </el-button>

        <el-button class="apply-now" @click="handleOnClickApplyNowBtn">
          <font-awesome-icon :icon="['far', 'clipboard']"/>
          Ứng tuyển ngay
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      jobInfo: Object
    },
    data() {
      return {
        foreignLanguages: ''
      }
    },

    methods: {
      handleOnClickSendMessageBtn() {
        this.$emit('on_click_send_message_btn');
      },

      handleOnClickApplyNowBtn() {
        this.$emit('on_click_apply_now_btn');
      }
    },

    created() {
      this.foreignLanguages = this.jobInfo.requirements.foreign_languages.length !== 0 ? this.jobInfo.requirements.foreign_languages.join(", ") : 'Tiếng Việt'
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .container {
    padding: 5px 15px 15px 15px;
  }

  h3 {
    color: $color-primary;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100px;
      bottom: 0;
      border-bottom: 2px solid $color-primary;
    }
  }

  .box-left,
  .box-center {
    p {
      font-weight: $fw-base-500;
      line-height: 25px;

    }
  }

  .box-right {
    p {
      line-height: 25px;
    }
  }

  .btn-options {
    text-align: center;
  }

  .send-message {
    background-color: $color-white;
    border: 1px solid $color-primary;
    color: $color-primary;
    padding: 10px 20px;
    margin-top: 10px;

    &:hover {
      background-color: $color-primary;
      color: $color-white;
    }

    &:active {
      background-color: $color-white;
      color: $color-primary;
    }
  }

  .apply-now {
    background-color: $color-pink;
    border: 1px solid $color-pink;
    color: $color-white;
    padding: 10px 20px;
    margin-top: 10px;

    &:hover {
      color: $color-pink;
      background-color: $color-white;
    }

    &:active {
      color: $color-white;
      background-color: $color-pink;
    }
  }

</style>

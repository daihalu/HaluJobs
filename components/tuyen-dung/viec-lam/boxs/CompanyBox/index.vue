<template>
  <div>
    <div class="box-container">
      <img :src="logoUrl" :alt="companyName">
      <p class="company-name mg-top-15">{{companyName}}</p>
      <p><strong>Địa chỉ:</strong> {{workAddresses}}</p>
      <p><strong>Quy mô công ty:</strong> {{companySize}}</p>
      <div class="btn-options">
        <el-button class="send-message" @click="handleOnClickSendMessageBtn">
          <font-awesome-icon :icon="['fas', 'comment']"/>
          Gửi tin nhắn
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      companyName: String,
      workAddresses: String,
      companySize: String,
      logoUrl: String
    },
    data() {
      return {}
    },
    methods: {
      handleOnClickSendMessageBtn() {
        this.$emit('on_click_send_message_btn');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .box-container {
    text-align: center;
    padding: $padding-border-box-15;
  }

  img {
    width: 300px;
    height: 300px;
    border: $br-3 solid $color-gray;
  }

  .company-name {
    color: $color-primary;
    font-weight: $fw-base-500;
    font-size: $fs-large-18;
    text-transform: uppercase;
  }

  .company-box p {
    line-height: $line-height-30;
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

  .dialog-container {
    text-align: left;
  }

</style>

<style lang="scss">
  .el-form-item.is-required {
    .el-form-item__label {
      font-size: 15px;
      padding-bottom: 5px !important;
      &:before {
        display: none !important;
      }
    }
  }
</style>


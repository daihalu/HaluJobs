<template>
  <div>
    <div class="box-container">
      <img :src="logoUrl" :alt="companyName">
      <p class="company-name">{{companyName}}</p>
      <p><strong>Địa chỉ:</strong> {{workAddresses}}</p>
      <p><strong>Quy mô công ty:</strong> {{companySize}}</p>
      <div class="btn-options">
        <el-button class="send-message" @click="dialogSendMessageVisible = true">
          <font-awesome-icon :icon="['fas', 'comment']"/>
          Gửi tin nhắn
        </el-button>
      </div>
    </div>

    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogSendMessageVisible"
      class="dialog-container"
    >
      <el-form
        ref="message"
        :rules="rules"
        :model="message"
        label-position="top"
      >
        <el-form-item label="Nhập tiêu đề: " prop="title">
          <el-input
            v-model="message.title"
            placeholder="Nhập tiêu đề"
          >
          </el-input>
        </el-form-item>

        <el-form-item label="Nhập tiêu nội dung tin nhắn: " prop="content">
          <el-input
            type="textarea"
            :rows="5"
            v-model="message.content"
            placeholder="Nhập nội dung tin nhắn"
          >
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button class="send-message" @click="showMessage">
            Gửi tin nhắn
          </el-button>
        </el-form-item>

      </el-form>
    </el-dialog>
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
      return {
        dialogSendMessageVisible: false,
        dialogTitle: 'Gửi tin nhắn cho ' + this.companyName,
        message: {
          title: '',
          content: ''
        },
        rules: {
          title: [{required: true, message: 'Vui lòng nhập tiêu đề tin nhắn', trigger: 'blur'}],
          content: [{required: true, message: 'Vui lòng nhập nội dung tin nhắn', trigger: 'blur'}],
        }
      }
    },
    methods: {
      showMessage() {
        console.log(this.message);
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
  }

  .send-message:hover {
    background-color: $color-primary;
    color: $color-white;
  }

  .send-message:active {
    background-color: $color-white;
    color: $color-primary;
  }

  .dialog-container {
    text-align: left;
  }

</style>


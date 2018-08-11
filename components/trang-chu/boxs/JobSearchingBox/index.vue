<template>
  <div class="box-container">
    <h4 class="box-title">
      <font-awesome-icon :icon="['far', 'clipboard']"/>
      TÌM KIẾM VIỆC LÀM THEO NGÀNH NGHỀ
    </h4>

    <div class="content">
      <el-input
        type="email"
        v-model="searchInput"
        auto-complete="off"
        placeHolder="Vui lòng nhập ngành nghề"
        class="input"
      >
      </el-input>
      <div class="job-searching-box--list">
        <ul v-for="job in jobList" :key="job.value">
          <nuxt-link to="/tuyen-dung">
            <li>{{job.value}}</li>
          </nuxt-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      jobList: Array
    },
    data() {
      return {
        searchInput: ''
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .content {
    padding: $padding-border-box-10;
  }

  .input{
    margin-bottom: 5px;
  }

  .job-searching-box--list {
    overflow: auto;
    height: 300px;
  }

  ul {
    list-style-type: none;
    padding-left: 5px;
  }

  ul li {
    line-height: $line-height-30;
    border-bottom: 1px dotted $color-primary;
  }

  /* width */
  .job-searching-box--list::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  .job-searching-box--list::-webkit-scrollbar-track:hover {
    background: $color-gray;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }

  /* Handle */
  .job-searching-box--list::-webkit-scrollbar-thumb {
    background: $color-scroll-bar;
    border-radius: 8px;
  }

  /* Handle on hover */
  .job-searching-box--list::-webkit-scrollbar-thumb:hover {
    background: $color-scroll-bar--hover;
  }

</style>


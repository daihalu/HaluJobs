<template>
  <transition name="slide-fade">
    <div class="fixed-top-candidate-bar" v-if="scrolled">
      <el-row class="fixed-top-candidate-bar--container">
        <el-col :span="16" class="fixed-top-candidate-bar--info">
            <h3>{{title}}</h3>
            <p>
              Mức lương: <span>{{salary}}</span> | Hạn nộp hồ sơ: <span>{{deadline}}</span>
            </p>
        </el-col>

        <el-col :span="8">
          <div class="btn-options">

            <el-button class="fixed-top-job-bar--btn  apply-now" @click="handleOnClickApplyNowBtn">
              <font-awesome-icon :icon="['far', 'clipboard']"/>
              Ứng tuyển ngay
            </el-button>

            <el-button class="fixed-top-job-bar--btn save-job" @click="handleOnClickSaveJobBtn" :class="{active: isActive}">
              <font-awesome-icon :icon="['fas', 'heart']"/>
              Lưu công việc
            </el-button>


          </div>
        </el-col>
      </el-row>
    </div>
  </transition>
</template>

<script>

  import {JobOption} from '~/assets/js/data-options';
  import {FormattedDate} from '~/assets/js/functions';

  export default {
    props: {
      title: String,
      salary: String,
      deadline: String,
      isSaveJobBtnActive: Boolean
    },
    data() {
      return {
        scrolled: false,
        isActive: this.isSaveJobBtnActive,
      }
    },
    methods: {
      handleScroll() {
        this.scrolled = window.scrollY > 550 && window.scrollY < 3500;
      },

      handleOnClickSaveJobBtn() {
        this.isActive = !this.isActive;
        this.$emit('on_click_save_job_btn', this.isActive);
      },

      handleOnClickApplyNowBtn() {
        this.$emit('on_click_view_apply_now_btn');
      }
    },
    beforeMount() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },

  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  /*=========================FIXED-TOP BOX================================*/

  .fixed-top-candidate-bar {
    position: fixed;
    background-color: $color-primary;
    padding: 10px;
    top: 0;
    color: $color-white;
    z-index: $index-popper-2000;
    margin: 0 auto !important;
    left: 0;
    right: 0;
  }

  .fixed-top-candidate-bar--container {
    top: 0;
    width: $page-width;
    margin: 0 auto !important;
  }

  .fixed-top-candidate-bar--info p span {
    font-weight: $fw-base-500;

  }

  .fixed-top-candidate-bar .btn-options {
    float: right;
  }

  .fixed-top-job-bar--btn {
    height: 46px;
    padding: 10px 20px;
    outline: 0 none;
    transition: all 0.15s ease-in-out;
    font-weight: $fw-base-500;
    font-size: $fs-base-16;
  }

  .fixed-top-job-bar--btn:active {
    box-shadow: 0 0 0 transparent;
    transition: none;
  }



  .apply-now {
    background-color: $color-pink;
    border: 1px solid $color-pink;
    color: $color-white;
  }

  .apply-now:hover {
    color: $color-pink;
    background-color: $color-white;
  }

  .apply-now:active {
    color: $color-white;
    background-color: $color-pink;
  }

  .save-job {
    background-color: transparent;
    border: 1px solid $color-white;
    color: $color-white;
  }

  .save-job:hover {
    background-color: $color-white;
    color: $color-pink;
  }

  .save-job:active {
    background-color: transparent;
    color: $color-white;
  }

  .active {
    color: $color-pink;
    background-color: $color-white;
    border-color: $color-pink;
  }

  .slide-fade-enter-active {
    transition: opacity .3s;
  }

  .slide-fade-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter {
    opacity: 0;
  }

  .slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
</style>


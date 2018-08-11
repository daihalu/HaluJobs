<template>
  <div class="candidate-card">
    <div class="candidate-card--avatar" @click="seenCard = !seenCard">
      <nuxt-link to="/ho-so" :title="position">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Shahter-Reak_M_2015_cropped_%2818%29.jpg/200px-Shahter-Reak_M_2015_cropped_%2818%29.jpg"/>
      </nuxt-link>
    </div>
    <div class="candidate-card--content">
      <el-tooltip class="item" effect="dark" :content="position" placement="top-start">
        <p class="position" @click="seenCard = !seenCard">
          <nuxt-link to="/ho-so" :title="position">
            {{position}}
          </nuxt-link>
        </p>
      </el-tooltip>
      <p class="candidate-name" :title="candidateName" @click="seenCard = !seenCard">
        <nuxt-link to="/ho-so">
          {{candidateName}}
        </nuxt-link>
      </p>
      <p class="experiences" :title="workExperience">Kinh nghiệm: <span>{{workExperience}}</span></p>
      <p class="status" v-if="seenCard">Đã xem</p>
    </div>
  </div>
</template>

<script scoped>
  export default {
    props: {
      colNum: Number
    },
    data() {
      return {
        seenCard: false,
        position: 'Nhân viên kinh doanh',
        candidateName: 'Nguyễn Văn Đại',
        workExperience: '9 năm'
      }
    },
    methods: {
      onClickCard: function () {
        this.seenCard = true;
      }
    }
  }
</script>



<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .candidate-card {
    margin: 5px 3px;
    border: 1px solid $color-border;
    border-radius: $br-5;
    font-size: $fs-base-16;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    align-items: center;
  }

  .candidate-card:hover {
    box-shadow: 0 0 5px $color-primary;
  }

  .candidate-card:active {
    box-shadow: 0 0 0 transparent;
    transition: none;
  }

  .candidate-card--avatar img {
    border: 2px solid $color-gray;
    border-radius: $br-3;
    width: 70px;
    height: 70px;
    margin-top: 3px;
  }

  .candidate-card--content {
    margin-left: 20px;

  }

  .position {
    color: $color-primary;
    font-weight: $fw-base-500;
    padding-bottom: 3px;
  }

  .experiences {
    display: inline;
  }


  .experiences span {
    color: $color-pink;
  }

  .status {
    display: inline;
    border: 1px solid transparent;
    background-color: $color-primary;
    padding: 2px;
    border-radius: 3px;
    font-size: $fs-small-14;
    color: $color-white;
    margin-left: 80px;
  }

  .candidate-name a {
    color: $color-black;
  }

</style>

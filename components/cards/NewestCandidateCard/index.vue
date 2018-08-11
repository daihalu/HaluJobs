<template>
  <el-row class="candidate-card">
    <el-col :span="18" class="candidate-card--content">
      <el-tooltip class="item" effect="dark" :content="position" placement="top-start">
        <p class="position" :title="position" @click="seenCard = !seenCard">
          <nuxt-link to="/ho-so">
            {{position}}
          </nuxt-link>
        </p>
      </el-tooltip>
      <p class="candidate" :title="candidateName" @click="seenCard = !seenCard">
        <nuxt-link to="/ho-so">
          <font-awesome-icon :icon="['fas', 'user']"/>
          {{candidateName}}
        </nuxt-link>
      </p>
    </el-col>
    <el-col :span="6" class="candidate-card--content--item">
      <p class="experiences" :title="experiences">
        <font-awesome-icon icon="user-clock"/>
        Kinh nghiệm: <span>{{experiences}}</span></p>
      <p class="location" :title="location">
        <font-awesome-icon icon="map-marker-alt"/>
        {{location}}
      </p>
      <p class="status" v-if="seenCard">Đã xem</p>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    props: {
      colNum: Number
    },
    data() {
      return {
        seenCard: false,
        position: 'Nhân Viên Marketing Online',
        candidateName: 'Nguyễn Văn Đại',
        workExperience: '10 năm',
        location: 'Hà Nội'
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
    padding-top: $padding-border-box-10;
    padding-bottom: $padding-border-box-10;
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

  .candidate-card--content {
    margin-left: 20px;
  }

  .position {
    color: $color-primary;
    font-weight: $fw-base-500;
    padding-bottom: 5px;
  }

  .candidate {
    opacity: 0.8;
  }

  .candidate a {
    color: $color-black;
  }

  .candidate svg {
    margin-bottom: 1px;
  }

  svg {
    margin-right: 3px;
    font-size: 14px;
    opacity: 0.7;
  }

  .location {
    text-align: left;
    font-size: 14px;
    line-height: 25px;
    display: inline;
  }

  .experiences {
    opacity: 0.8;
  }

  .experiences span,
  .location {
    color: $color-pink;
  }

  .status {
    display: inline;
    border: 1px solid transparent;
    background-color: $color-primary;
    padding: 1px;
    font-size: $fs-small-14;
    border-radius: 3px;
    color: $color-white;
    margin-left: 60px;
  }

</style>


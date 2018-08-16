<template>
  <el-row class="card mg-bottom-10">
    <el-col :span="18">

      <el-tooltip effect="dark" :content="candidateInfo.position" placement="top-start">
        <p class="position" :title="candidateInfo.position">
          <nuxt-link :to="candidateInfo.profileUrl" @click="onClickCard">
          {{candidateInfo.position}}
          </nuxt-link>
        </p>
      </el-tooltip>
      <div class="item">
        <p class="candidate" :title="candidateInfo.candidateName">
          <font-awesome-icon :icon="['fas', 'user']"/>
          <nuxt-link to="candidateInfo.profileUrl" @click="onClickCard">
          {{candidateInfo.candidateName}}
          </nuxt-link>
        </p>

        <p class="updated-date" :title="candidateInfo.updatedDate">
          <font-awesome-icon :icon="['fas', 'clock']"/>
          {{candidateInfo.updatedDate}}

        </p>
      </div>
    </el-col>

    <el-col :span="6">
      <p class="work-experience" :title="candidateInfo.workExperience">
        <font-awesome-icon icon="user-clock"/>
        Kinh nghiệm: <span>{{candidateInfo.workExperience}}</span>
      </p>
      <div class="item">
        <p class="location el-col-18" :title="candidateInfo.location">
          <font-awesome-icon icon="map-marker-alt"/>
          <span>{{candidateInfo.location}}</span>
        </p>

        <p class="status el-col-6" v-if="seenCard">Đã xem</p>
      </div>


    </el-col>
  </el-row>
</template>

<script>
  export default {
    props: {
      candidateInfo: Object
    },
    data() {
      return {
        seenCard: this.candidateInfo.seen
      }
    },
    methods: {
      onClickCard: function () {
        if (this.seenCard) return;
        this.seenCard = true;
        this.$emit('on_click_card', this.seenCard);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .position {
    color: $color-primary;
    font-weight: $fw-base-500;
  }

  .item {
    display: flex;
    margin-top: 5px;
  }

  .candidate,
  .updated-date {
    opacity: 0.8;
    display: flex;
    align-items: baseline;

    a {
      color: $color-black;
    }
  }

  .updated-date {
    margin-left: 10px;
  }

  svg {
    margin-right: 3px;
    font-size: 14px;
    opacity: 0.7;
  }

  .work-experience,
  .location {
    opacity: 0.8;
    font-size: $fs-small-14;

    span {
      color: $color-pink;
    }
  }

  .status {
    display: inline;
    border: 1px solid transparent;
    background-color: $color-primary;
    padding: 1px;
    font-size: 12px;
    border-radius: 3px;
    color: $color-white;
    text-align: center;
  }
</style>


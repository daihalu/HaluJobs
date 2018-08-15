<template>
  <div class="card">

    <div @click="onClickCard" class="avatar">
      <nuxt-link :to="candidateInfo.profileUrl" :title="candidateInfo.position">
        <img :src="candidateInfo.avatarUrl"/>
      </nuxt-link>
    </div>

    <div class="container">

      <el-tooltip class="item" effect="dark" :content="candidateInfo.position" placement="top-start">
        <p class="position" @click="onClickCard">
          <nuxt-link :to="candidateInfo.profileUrl" :title="candidateInfo.position">
            {{candidateInfo.position}}
          </nuxt-link>
        </p>
      </el-tooltip>

      <p class="candidate-name" :title="candidateInfo.candidateName" @click="onClickCard">
        <nuxt-link to="/ho-so">
          {{candidateInfo.candidateName}}
        </nuxt-link>
      </p>

      <p class="workExperience" :title="candidateInfo.workExperience">
        Kinh nghiệm: <span>{{candidateInfo.workExperience}}</span>
      </p>

      <p class="status" v-if="seenCard">Đã xem</p>
    </div>
  </div>
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

  .avatar {
    height: 70px;
    width: 70px;
  }

  img {
    border: 2px solid $color-gray;
    border-radius: $br-5;
    width: 100%;
    height: 100%;
  }

  .container {
    margin-left: 10px;
  }

  .position {
    color: $color-primary;
    font-weight: $fw-base-500;
    padding-bottom: 3px;
  }

  .workExperience {
    display: inline;
  }

  .workExperience span {
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
    font-weight: $fw-base-500;
  }

</style>

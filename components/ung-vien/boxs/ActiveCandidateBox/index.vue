<template>
  <el-row class="box-container">
    <h4 class="box-title">
      <font-awesome-icon icon="briefcase"/>
      {{jobBoxTitle}}
    </h4>
    <el-carousel trigger="click" height="520px" indicator-position="outside" v-bind:interval="60000">
      <el-carousel-item v-for="item in 8" :key="item">
        <el-row :gutter="10">
          <el-col :span="8" v-for="item in 15" v-bind:key="item" class="mg-bottom-10">
            <flexible-candidate-card
              :candidateInfo="candidateList[0]"
              @on_click_card="onClickCard"
            />
          </el-col>
        </el-row>

      </el-carousel-item>
    </el-carousel>
  </el-row>
</template>

<script>
  import FlexibleCandidateCard from '~/components/public-components/cards/PinkExperienceCandiateCard8';

  export default {
    props: {
      jobBoxTitle: String,
      candidateList: Array
    },
    components: {
      FlexibleCandidateCard
    },
    methods: {
      onClickCard(value) {
        this.$emit('on_click_card', value);
      }
    }
  }
</script>



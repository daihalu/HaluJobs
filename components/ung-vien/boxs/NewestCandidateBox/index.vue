<template>
  <el-row class="box-container">
    <h4 class="box-title">
      <font-awesome-icon :icon="['fas', 'user']"/>
      {{jobBoxTitle}}
    </h4>
    <div id="newest-candidate-box">
      <el-row :gutter="4">
        <el-col v-for="item in 50" v-bind:key="item">
          <newest-candidate-card
            :candidateInfo="candidateList[0]"
            @on_click_card="onClickCard"
          />
        </el-col>
      </el-row>
    </div>
  </el-row>
</template>

<script>
  import NewestCandidateCard from '~/components/public-components/cards/PinkLoactionCandidateCard16';

  export default {
    components: {
      NewestCandidateCard
    },
    props: {
      jobBoxTitle: String,
      candidateList:Array
    },
    methods: {
      onClickCard(value) {
        this.$emit('on_click_card', value);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  #newest-candidate-box {
    overflow: auto;
    height: 640px;
    padding: 10px;
  }

  /* width */
  #newest-candidate-box::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  #newest-candidate-box::-webkit-scrollbar-track:hover {
    background: $color-gray;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
  }

  /* Handle */
  #newest-candidate-box::-webkit-scrollbar-thumb {
    background: $color-scroll-bar;
    border-radius: 8px;
  }

  /* Handle on hover */
  #newest-candidate-box::-webkit-scrollbar-thumb:hover {
    background: $color-scroll-bar--hover;
  }

</style>



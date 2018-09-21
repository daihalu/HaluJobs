<template>
  <el-row class="box-container">
    <h4 class="box-title">
      <font-awesome-icon icon="briefcase"/>
      {{jobBoxTitle}}
    </h4>
    <el-carousel
      trigger="click"
      height="550px"
      indicator-position="outside"
      v-bind:interval="60000"
    >
      <el-carousel-item v-if="jobs[0]">
        <el-row :gutter="10">
          <el-col
            :span="8"
            v-for="(item, index) in jobs[0]"
            :key="index"
            class="mg-bottom-10"
          >
            <quick-job-card
              :jobInfo="item"
            />
          </el-col>
        </el-row>
      </el-carousel-item>

      <el-carousel-item v-if="jobs[1]">
        <el-row :gutter="10">
          <el-col
            :span="8"
            v-for="(item, index) in jobs[1]"
            :key="index"
            class="mg-bottom-10"
          >
            <quick-job-card
              :jobInfo="item"
            />
          </el-col>
        </el-row>
      </el-carousel-item>

      <el-carousel-item  v-if="jobs[2]">
        <el-row :gutter="10">
          <el-col
            :span="8"
            v-for="(item, index) in jobs[2]"
            :key="index"
            class="mg-bottom-10">
            <quick-job-card
              :jobInfo="item"
            />
          </el-col>
        </el-row>
      </el-carousel-item>

      <el-carousel-item  v-if="jobs[3]">
        <el-row :gutter="10">
          <el-col
            :span="8"
            v-for="(item, index) in jobs[3]"
            :key="index"
            class="mg-bottom-10">
            <quick-job-card
              :jobInfo="item"
            />
          </el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel>
  </el-row>
</template>

<script>
  import QuickJobCard from '~/components/public-components/cards/PinkSalaryJobCard8';
  import {mapState, mapGetters, mapActions} from 'vuex';

  export default {
    components: {
      QuickJobCard
    },
    props: {
      jobBoxTitle: String,
    },
    data() {
      return {

      }
    },
    computed: {
      ...mapState('RECRUITMENT_PAGE', {
        jobs: 'quickJobs',
      }),

      ...mapGetters({
        searchingContent: 'searchingContent'
      })

    },
    created() {
      this.fetchQuickJobs(this.searchingContent ? '&industry=' + this.searchingContent : '');
    },
    methods: {
      ...mapActions('RECRUITMENT_PAGE',{
        fetchQuickJobs: 'fetchQuickJobs'
      }),
    },

  }
</script>



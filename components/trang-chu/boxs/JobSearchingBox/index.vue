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
        placeHolder="Vui lòng nhập ngành nghề"
        class="input"
      >
      </el-input>
      <scroll-bar class="job-searching-box--list">
        <ul v-for="(job, index) in filteredList" :key="index">
          <nuxt-link to="/tuyen-dung">
            <li>{{job.label}}</li>
          </nuxt-link>
        </ul>
      </scroll-bar>
    </div>
  </div>
</template>

<script>
  import ScrollBar from '~/components/public-components/bars/ScrollBar';
  import {JobOption} from '~/assets/js/data-options';
  import {ChangeAlias} from '~/assets/js/functions';

  export default {
    components: {
      ScrollBar
    },
    data() {
      const {jobs} = JobOption;
      return {
        searchInput: '',
        jobs: jobs,
      }
    },
    computed: {
      filteredList() {
        return this.jobs.filter(job => {
          let str = ChangeAlias(job.value);
          let search = ChangeAlias(this.searchInput);
          return str.toLowerCase().includes(search.toLowerCase())
        })
      }
    },
    created() {

    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .input {
    padding: 10px 10px 0 10px;
  }

  .job-searching-box--list {
    height: 410px;
  }

  ul li {
    list-style-type: none;
    line-height: $line-height-30;
    border-bottom: 1px dotted $color-primary;
    transition: all 0.1s ease-in-out;

    &:hover {
      color: $color-primary;
    }
  }

</style>


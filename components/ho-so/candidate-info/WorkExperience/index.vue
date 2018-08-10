<template>
  <div class="container">
    <h3>Kinh nghiệm làm việc</h3>
    <div v-for="item in workExperience" :key="item.startTime">
      <p>
        <strong>Chức vụ: </strong>
        <span class="jobTitle">{{item.title}}</span>
      </p>
      <p>
        <strong>Nơi làm việc: </strong>
        {{item.company}}</p>
      <p>
        <strong>Thời gian làm việc: </strong>
        {{item.startTime}} - {{item.endTime}}
      </p>
      <div>
        <h4>Mô tả công việc:</h4>
        <p v-for="index in 7" :key="index">
          <span>- {{item.description}}</span>
        </p>
      </div>
      <div>
        <h4>Thành tích đạt được:</h4>
        <p v-for="index in 2" :key="index">
          <span>- {{item.achievements}}</span>
        </p>
      </div>
      <hr>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      workExperience: Array
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs-variables";

  .container {
    width: 100%;
    color: $color-black;
    border: 1px solid $color-gray;
    background-color: $color-white;
    margin-top: 10px;
    border-radius: $br-5;
    padding: $padding-border-box-10;
  }

  .container p {
    line-height: 25px;
    margin-bottom: 3px;
  }

  h3 {
    color: $color-primary;
    border-bottom: 1px solid $color-border;
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-size: $fs-large-18;
    font-weight: $fw-base-500;
  }

  .container hr {
    margin: 10px 0 5px 0;
    opacity: 0.3;
  }

  .jobTitle {
    text-transform: uppercase;
    font-weight: $fw-base-500;
    border: 1px solid $color-primary;
    margin-bottom: 3px;
    border-radius: 3px;
    padding: 2px;
    background-color: $color-tags;
  }

</style>


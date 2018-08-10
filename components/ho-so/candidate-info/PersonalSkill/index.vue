<template>
  <div class="container">
    <h3>Kỹ năng</h3>
    <h4>Kỹ năng bản thân</h4>
    <p v-for="skill in skillsDescriptions" :key="skill">
      <span>- {{skill}}</span>
    </p>

    <hr/>

    <h4>Kỹ năng khác</h4>
    <p v-for="skill in list" :key="skill">
      <span>- {{skill}}</span>
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      skillsDescriptions: Array,
      list: Array
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
    margin-top: $mg-top-bottom-20;
    border-radius: $br-5;
    padding: $padding-border-box-15;
  }

  .container h3 {
    color: $color-primary;
    border-bottom: 1px solid $color-border;
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-size: $fs-large-18;
    font-weight: $fw-base-500;
  }

  .container p {
    line-height: 25px;
    margin-bottom: 3px;
  }

  .container hr {
    margin: 10px 0 5px 0;
    opacity: 0.3;
  }

</style>


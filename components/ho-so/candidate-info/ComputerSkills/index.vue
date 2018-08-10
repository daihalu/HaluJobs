<template>
  <div class="container">
    <h3>Kỹ năng tin học văn phòng</h3>

    <table>
      <tr>
        <th><strong>Phần mềm</strong></th>
        <th><strong>Kỹ năng</strong></th>
      </tr>
      <tr v-for="item in computerSkills" :key="item.skill">
        <td>{{item.skill}}</td>
        <td>{{item.level}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    props: {
      computerSkills: Array
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

  .container hr {
    margin: 10px 0 5px 0;
    opacity: 0.3;
  }

  th {
    border-bottom: 2px solid $color-border;

  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th {
    height: 50px;
  }

  td {
    line-height: $line-height-30;
  }

  th:nth-child(1),
  td:nth-child(1) {
    text-align: left;
  }

  th:nth-child(2),
  td:nth-child(2) {
    text-align: right;
  }

</style>


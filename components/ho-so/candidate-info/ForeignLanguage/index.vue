<template>
    <div class="container">
        <h3>Trình độ ngoại ngữ</h3>

        <table>
          <tr>
            <th><strong>Ngôn ngữ</strong></th>
            <th><strong>Trình độ</strong></th>
          </tr>
          <tr v-for="item in foreignLanguages" :key="item.language">
            <td>{{item.language}}</td>
            <td>{{item.level}}</td>
          </tr>
        </table>

    </div>
</template>

<script>
  export default {
    props: {
      foreignLanguages: Array
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs_variables";

  .container {
    width: 100%;
    color: $color-black;
    border: 1px solid $color-gray;
    background-color: $color-white;
    margin-top: $mg-top-bottom-15;
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

  .container p {
    line-height: 25px;
    margin-bottom: 3px;
  }

  .container span > a {
    border: 1px solid $color-primary;
    margin-right: 5px;
    margin-bottom: 3px;
    border-radius: 3px;
    padding: 2px;
    background-color: $color-tags;
    display: inline-block;
  }

  .container .btn-options {
    margin-top: 10px;
    text-align: center;
  }

  .view-contact,
  .send-message {
    height: 40px;
    padding: 10px 20px;
    outline: 0 none;
    transition: all 0.15s ease-in-out;
    font-weight: $fw-base-500;
    font-size: $fs-base-16;
  }

  .view-contact:active,
  .send-message:active {
    box-shadow: 0 0 0 transparent;
    transition: none;
  }

  .view-contact {
    background-color: $color-pink;
    border: 1px solid $color-pink;
    color: $color-white;
  }

  .view-contact:hover {
    background-color: $color-white;
    color: $color-pink;
    border-color: $color-pink;
    box-shadow: 0 0 5px $color-pink;
    cursor: pointer;
  }

  .view-contact:active {
    background-color: $color-pink;
    color: $color-white;
  }

  .send-message {
    background-color: $color-white;
    border: 1px solid $color-primary;
    color: $color-primary;
  }

  .send-message:hover {
    background-color: $color-primary;
    color: $color-white;
  }

  .send-message:active {
    background-color: $color-white;
    color: $color-primary;
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
  td:nth-child(2)  {
    text-align: right;
  }

</style>


<template>
  <div>
    <nuxt/>

    <!--<ConvertExcelToJSON/>-->
  </div>
</template>

<script>
  import ConvertExcelToJSON from '~/components/public-components/tools/ConvertExcelToJSON';

  export default {
    name: "google-map",
    components: {
      ConvertExcelToJSON
    }
  }
</script>

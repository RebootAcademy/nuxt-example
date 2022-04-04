<template>
  <v-footer padless fixed>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Reboot #07</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <v-btn class="ma-2" color="grey lighten-5" @click="loadSources()">불러오기</v-btn>
</template>

<script>

export default {
  methods:{
    loadSources(){
      this.$store.dispatch('loadSources')
    }
  }
}
</script>

<style>

</style>
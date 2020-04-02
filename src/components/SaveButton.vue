<template>
  <v-btn class="ma-2" color="lime lighten-4" @click="saveEditedVoices()">저장하기</v-btn>
</template>

<script>
export default {
  methods:{
    saveEditedVoices(){
      this.$store.dispatch('saveEditedVoices')
    }
  }
}
</script>

<style>

</style>
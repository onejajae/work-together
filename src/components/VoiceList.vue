<template>
  <v-list dense>
    <v-list-item-title class="mx-5">Voices</v-list-item-title>
    <v-list-item-group :multiple="false" :mandatory="true">
      <v-list-item v-for="i in Object.keys($store.getters.getVoices)" :key="i" @click="selectVoice(i)">
        <v-list-item-content>
          {{ $store.state.voices[i] }}
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    selectVoice(voice){
      this.$store.dispatch('selectVoice', voice);
    }
  }

}
</script>

<style>

</style>
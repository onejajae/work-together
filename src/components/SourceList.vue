<template>
  <v-list dense>
    <v-list-item-title class="mx-5">Sources</v-list-item-title>
    <v-list-item-group :multiple="false" :mandatory="true">
      <v-list-item v-for="source in $store.state.sources" :key="source">
        <v-list-item-content @click="loadVoices(source)">
          {{ source }}
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
    loadVoices(source) {
      this.$store.dispatch('loadVoices', source)
    }
  }

}
</script>


<template>
  <v-app>
    <v-app-bar app color="blue-grey darken-2" >
      <v-spacer></v-spacer>
      <load-button></load-button>
      <save-button></save-button>
    </v-app-bar>
    
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import LoadButton from '@/components/LoadButton.vue'
import SaveButton from '@/components/SaveButton.vue'

export default {
  name: 'App',

  components: {
    LoadButton,
    SaveButton
  },

  data: () => ({
    //
  }),
};
</script>

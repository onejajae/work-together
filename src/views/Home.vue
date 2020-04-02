<template>
  <v-container class="fill-height" fluid>
    <source-list id="source-list"></source-list>
    <voice-list id="voice-list"></voice-list>
    <work-space id="work-space"></work-space>
  </v-container> 
</template>

<script>
// @ is an alias to /src
import SourceList from '@/components/SourceList.vue'
import VoiceList from '@/components/VoiceList.vue'
import WorkSpace from '@/components/WorkSpace.vue'

export default {
  name: 'Home',
  components: {
    SourceList,
    VoiceList,
    WorkSpace
  }
}
</script>

<style scoped>
  #source-list {
    width: 20vw;
    height: 90vh;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  #voice-list {
    width: 20vw;
    height: 90vh;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  #work-space {
    width: 55vw;
    height: 90vh;
    margin-left: 0.5vw;
  }

</style>
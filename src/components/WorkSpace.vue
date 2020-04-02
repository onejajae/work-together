<template>
  <v-card>
    <v-container class="work-space">
      <v-row class="fill-height" align="center" justify="center">
        <v-container class="input-space">
          <v-container grid-list-xs>
            <audio class="voice-player" :src="audio" controls autoplay></audio>
          </v-container>
          <v-container grid-list-xs class="my-10" @click="autoComplete">
            {{ voiceText }}
          </v-container>
          <v-container grid-list-xs>
            <v-form @submit.prevent="formSubmit">
            <v-text-field 
              name="TextInput"
              v-model="inputValue"
              class="input-text mx-0 pa-0"
              :outlined="true"
              :rounded="true"
              :single-line="false"
              :solo="true"
              :clearable="true"
              :counter="true"
            ></v-text-field>
            </v-form>
            <v-btn class="summit-button" @click="formSubmit" fab x-large d-inline-block color="success">적용</v-btn>
          </v-container>
        </v-container>
        <v-container>
          <v-row>
            <v-btn class="mx-10" x-large color="success">&lt; 이전</v-btn>
            <v-spacer></v-spacer>
            <v-btn class="mx-10" x-large color="success">다음 &gt;</v-btn>
          </v-row>
        </v-container>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  computed: {
    audioLink() {
      return `/audio/?audio=${this.$store.getters.getCurrentVoice}`
    },
    voiceText() {
      return this.$store.getters.getVoices[this.$store.getters.getCurrentVoice]
    }
  },
  data() {
    return {
      audio: "",
      inputValue: ""
    }
  },
  methods:{
    formSubmit() {
      this.$store.dispatch('editText', this.inputValue);
      this.inputValue = "";
    },
    autoComplete() {
      this.inputValue = this.voiceText;
    }
  },
  updated() {
    this.audio = `/audio/?audio=${this.$store.getters.getCurrentVoice}`
  }
}
</script>

<style>
.work-space {
  height: 100%;
}

.voice-player {
  width: 80%;
}


.input-space {
  width: 80%;
  text-align: center;
}

</style>
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sources: [],
    voices: {},
    currentSource: "",
    currentVoice: "",
    currentVoiceText: ""
  },
  getters: {
    getCurrentVoice: state => state.currentVoice,
    getCurrentSource: state => state.currentSource,
    getVoices: state => state.voices,
    getCurrentVoiceText: state => state.currentVoiceText
  },
  mutations: {
    loadSources: (state, sources) => {
      state.sources = sources;
    },
    loadVoices: (state, voices) => {
      state.voices = voices;
    },
    setCurrentSource: (state, source) => {
      state.currentSource = source;
    },
    setCurrentVoice: (state, voice) => {
      state.currentVoice = voice;
    },
    editVoiceText: (state, { voice, text }) => {
      state.voices[voice] = text;
    }
  },
  actions: {
    loadSources: ({ commit }) => {
      axios.get("/api/").then(res => {
        commit('loadSources', res.data);
      }).catch(err => {
        console.log(err);
        alert("데이터를 불러오는 데 실패했습니다.");
      })
    },
    loadVoices: ({ commit }, source) => {
      axios.post("/api/", { source }).then(res => {
        commit('loadVoices', res.data);
        commit('setCurrentSource', source)
      }).catch(err => {
        console.log(err);
        alert("데이터를 불러오는 데 실패했습니다.");
      })
    },
    selectVoice: ({ commit }, voice) => {
      commit('setCurrentVoice', voice)
    },
    editText: ({ commit, state }, text) => {
      let voice = state.currentVoice;
      commit('editVoiceText', {voice, text});
    },
    saveEditedVoices: ({ commit, state }) => {
      if (state.currentSource) {
        axios.post("/edit", {
          source: state.currentSource,
          voices: state.voices
        }).then(res => {
          commit('loadVoices', res.data);
        }).catch(err => {
          console.log(err);
          alert("데이터를 저장하는 데 실패했습니다.");
        })
      } else {
        alert("저장할 데이터가 없습니다.")
      }
      
    }
  },
  modules: {
  }
})

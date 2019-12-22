import Vue from 'vue';
import Vuex from 'vuex';
import formatter from '@/plugins/formatter';

const json = require('../assets/data.json');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    source: json.map(item => ({
      ackId: item.ACK_ID,
      planName: item.PLAN_NAME,
      sponsorDfeName: item.SPONSOR_DFE_NAME,
    })),
    adaptedData: null,
    processing: false,
  },
  getters: {
    dataToShow: state => state.adaptedData,
    dataFormatted: state => !!state.adaptedData,
    dataProcessing: state => state.processing,
  },
  mutations: {
    setAdaptedData(state, data) {
      state.adaptedData = data;
    },
    setProcessingStatus(state, data) {
      state.processing = data;
    },
  },
  actions: {
    loadDataFromFile: ({ commit, state }) => new Promise((resolve, reject) => {
      commit('setProcessingStatus', true);
      commit('setAdaptedData', null);
      formatter.format(state.source).then(
        (data) => {
          commit('setAdaptedData', data);
          resolve();
        },
      ).catch(() => {
        reject();
      }).finally(() => {
        commit('setProcessingStatus', false);
      });
    }),
    resetFormatting: ({ commit }) => {
      commit('setAdaptedData', null);
    },
  },
  modules: {
  },
});

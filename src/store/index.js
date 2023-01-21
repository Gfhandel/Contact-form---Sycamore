import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    enquiries: [],
  },

  mutations: {
    addEnquiry: function (state, enquiries) {
      state.enquiries.push(enquiries);
    },

    deleteEnquiry: function (state, index) {
      state.enquiries.splice(index, 1);
    },
  },

  getters: {
    getEnquiries: (state) => state.enquiries,
  },

  actions: {},

  modules: {},
});

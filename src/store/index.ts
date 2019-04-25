import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";
import { stat } from "fs";
Vue.use(Vuex);
export interface ICategory {
  text: string;
  category?: string;
  to?: string;
}
export default new Vuex.Store({
  state: {
    articles: require("@/data/articles.json"),
    images: require("@/data/images.json"),
    drawer: false,
    items: [
      {
        text: "Home",
        to: "/"
      },
      {
        text: "About",
        href: "#about"
      },
      {
        text: "Admin",
        to: "/admin"
      }
    ],
    user: null
  },
  getters: {
    categories: state => {
      const categories: ICategory[] = [];

      for (const article of state.articles) {
        if (
          !article.category ||
          categories.find(
            (category: ICategory) => category.text === article.category
          )
        ) {
          continue;
        }

        const text = article.category;

        categories.push({
          text,
          to: `/category/${text}`
        });
      }

      return categories.sort().slice(0, 4);
    },
    links: (state, getters) => {
      return state.items.concat(getters.categories);
    },
    images: state => state.images,
    user(state) {
      return state.user;
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    signUserIn({ commit, getters }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          const newUser = {
            id: payload.uid,
            firebaseKeys: {}
          };
          commit("setUser", newUser);
        })
        .catch(error => {
          console.log(error);
        });
    },

    autoSignIn({ commit }, payload) {
      commit("setUser", {
        id: payload.uid,
        firebaseKeys: {}
      });
    },
    logout({ commit }) {
      firebase.auth().signOut();
      commit("setUser", null);
    }
  }
});

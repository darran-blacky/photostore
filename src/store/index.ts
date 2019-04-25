import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export interface ICategory {
  text: string;
  category?: string;
  to?: string;
}
export default new Vuex.Store({
  state: {
    articles: require('@/data/articles.json'),
    images: require('@/data/images.json'),
    drawer: false,
    items: [
      {
        text: 'Home',
        to: '/',
      },
      {
        text: 'About',
        href: '#about',
      },
    ],
  },
  getters: {
    categories: (state) => {
      const categories: ICategory [] = [];

      for (const article of state.articles) {
        if (
          !article.category ||
          categories.find((category: ICategory) => category.text === article.category)
        ) { continue; }

        const text = article.category;

        categories.push({
          text,
          to: `/category/${text}`,
        });
      }

      return categories.sort().slice(0, 4);
    },
    links: (state, getters) => {
      return state.items.concat(getters.categories);
    },
    images: (state) => state.images,
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: (state) => (state.drawer = !state.drawer),
  },
  actions: {

  },
});

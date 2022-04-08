export const strict = false;

export const state = () => ({
  productList: [],
  catalogList: [],
});

export const mutations = {
  SET_DATA_PRODUCTS(state, payload) {
    state.productList = payload;
  },
  SET_DATA_CATALOG(state, payload) {
    state.catalogList = payload;
  },
};

export const actions = {
  async loadProducts({ commit }) {
    return await this.$axios.get('/products?_limit=12').then((res) => {
      commit('SET_DATA_PRODUCTS', res.data);
    });
  },
  async loadCatalog({ commit }) {
    return await this.$axios.get('/products').then((res) => {
      commit('SET_DATA_CATALOG', res.data);
    });
  },
};

export const strict = false;

export const state = () => ({
  productList: [],
});

export const mutations = {
  SET_DATA_PRODUCTS(state, payload) {
    state.productList = payload;
  },
};

export const actions = {
  async loadProducts({ commit }) {
    return await this.$axios.get("/products").then((res) => {
      commit("SET_DATA_PRODUCTS", res.data);
    });
  },
};

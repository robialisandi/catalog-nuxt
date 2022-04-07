export const actions = {
  async nuxtServerInit({ dispatch }, { req }) {
    await dispatch('product/loadProducts');
  },
};

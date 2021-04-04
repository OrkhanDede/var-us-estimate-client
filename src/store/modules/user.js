const state = {
    user: {}
};
const mutations = {
    setUser: (state, payload) => {
        state.user = payload;
    }
};
const getters = {
    name: state => state.user.name
};

export default {
    state,
    mutations,
    getters,
};
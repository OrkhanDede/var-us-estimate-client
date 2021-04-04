const state = {
    isLoadingShow: false,
};
const mutations = {
    setLoadingShow: (state, payload) => {
        state.isLoadingShow = payload;
    }
};
const getters = {
    isLoadingShow: state => state.isLoadingShow
};

export default {
    state,
    mutations,
    getters,
};
import { createStore } from 'vuex';

export default createStore({
    state: {
        selectedFrog: null,
        frogCoins: 0,
    },
    mutations: {
        setSelectedFrog(state, frog) {
            state.selectedFrog = frog;
        },
        INCREMENT_FROG_COINS(state) {
            state.frogCoins += 1;
        }
    },
    actions: {
        selectFrog({ commit }, frog) {
            commit('setSelectedFrog', frog);
        },
        incrementFrogCoins({ commit }) {
            commit('INCREMENT_FROG_COINS');
        },
    },
    getters: {
        getSelectedFrog(state) {
            return state.selectedFrog;
        },
        frogCoins(state) {
            return state.frogCoins;
        },
    }
});
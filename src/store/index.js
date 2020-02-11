import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        allTrans: [],
        lastTrans: []
    },
    mutations: {
        addTrans(state, trans) {
            state.allTrans.push(trans)
        },
        addLastTrans(state, trans) {
            state.lastTrans = trans
        }
    }
})
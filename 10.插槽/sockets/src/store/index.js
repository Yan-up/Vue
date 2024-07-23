import vuex from "vuex"
import vue from 'vue'
vue.use(vuex)
new vuex.Store({
    state: {
        r: 0,
        g: 0,
        b: 0
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        }
    }
})
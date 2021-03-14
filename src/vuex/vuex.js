
import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            count: 0
        }
    },
    mutations: {
        increment (state) {
            state.count = state.count + 1
        },
        decrement(state) {
            state.count--
        }
    }
})

export default store
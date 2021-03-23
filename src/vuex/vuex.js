import {createStore} from 'vuex'

const BASE_URL = "http://127.0.0.1:8000/";

const store = createStore({
    state() {
        return {
            item: null,
        }
    },
    actions: {
        getItems(asd) {
            fetch(`${BASE_URL}get_post/`)
                .then((res) => res.json())
                .then((resJSON) => {
                    asd.commit('updateItems', resJSON['results'])
                });
        }
    },
    mutations: {
        updateItems(state, item){
            state.item = item
        }
    },
    getters: {
        allStorage(state) {
            return state.item
        }
    }
});

export default store
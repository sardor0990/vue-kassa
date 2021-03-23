import {createStore} from 'vuex'

const BASE_URL = "http://192.168.4.69:8000/";

const store = createStore({
    state() {
        return {
            items: [],
            myNum: 0
        }
    },
    actions: {
        getItems(store) {
            store.commit('setItems', [1, 0]);
            fetch(`${BASE_URL}get-item/?ordering=id&limit=20&offset=0`)
                .then((res) => res.json())
                .then((resJSON) => {
                    store.commit('setItems', resJSON['results'])
                });
        },

    },
    mutations: {
        setItems(state, items) {
            state.items = items;
        },
    },
});

export default store
import {createStore} from 'vuex'

const BASE_URL = "http://192.168.4.69:8000/";

const store = createStore({
    state() {
        return {
            items: [],
            myNum: 0,
            query: "",
            offset: 0,
            item: [],
            empty: "",
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
        getSearch() {
            this.query = ""
            store.commit('searchSet', [1, 0])
            fetch(`${BASE_URL}get-item/?search=${this.query}&limit=20&offset=${
                this.offset * 5
            }`)
                .then((res) => res.json())
                .then((data) => {
                    if (this.offset === 0) {
                        store.commit('searchSet', this.item = data['results'])
                    } else {
                        this.item = this.item.concat(data['results'])
                    }
                    if (data.count === 0) this.empty = "Ничего не найдено"
                    this.offset++;
                    console.log(data);
                    console.log(this.offset);
                });
        },
    },
    mutations: {
        setItems(state, items) {
            state.items = items;
        },
        searchSet(state, query) {
            state.query = query
        },
    },
});

export default store

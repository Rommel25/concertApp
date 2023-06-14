import { createStore,Store, useStore as  baseUseStore,GetterTree,ActionTree,MutationTree} from 'vuex'
import { InjectionKey } from 'vue'
import axios  from 'axios'

export type Concert = {
    id: number;
    nom: string;
    description: string;
    categorie_id: number;
    image: string;
    date: string;
    heure: string;
    updatedAt: string;
    createdAt: string;
};

export type Category = {
    id: number;
    libelle: string;
    user_id: number;
    createdAt: string;
    updatedAt: string;
};

export type State = {
    concerts: Concert[];
    categories: Category[];
};

const state: State = {
    concerts: [],
    categories: [],
};

const getters: GetterTree<State, State> = {
    getAllConcerts: (state) => state.concerts,
    getConcertById: (state) => (id: number) => state.concerts.find((concert) => concert.id === id),
    getAllCategories: (state) => state.categories,
    getCategoryById: (state) => (id: number) => state.categories.find((category) => category.id === id),
};

const actions: ActionTree<State, State> = {
    addConcert({ commit }, concertForm) {
        console.log(concertForm)

        return axios
            .post('http://localhost:8082/api/concerts', concertForm)
            .then((response) => {
                if (response.status === 200) {
                    commit('addConcert', concertForm);
                } else {
                    return { status: response.status, message: response.statusText };
                }
            })
            .catch((error) => {
                return {
                    status: error.response.status,
                    message: error.response.statusText,
                };
            });
    },

    editConcert({ commit }, concertForm) {
        return axios
            .put(`http://localhost:8082/api/concerts/${concertForm.id}`, concertForm)
            .then((response) => {
                if (response.status === 200) {
                    commit('editConcert', concertForm);
                } else {
                    return { status: response.status, message: response.statusText };
                }
            })
            .catch((error) => {
                return {
                    status: error.response.status,
                    message: error.response.statusText,
                };
            });
    },

    deleteConcert({ commit }, id) {
        return axios
            .delete(`http://localhost:8082/api/concerts/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    commit('deleteConcert', id);
                } else {
                    return { status: response.status, message: response.statusText };
                }
            })
            .catch((error) => {
                return {
                    status: error.response.status,
                    message: error.response.statusText,
                };
            });
    },

    getAllConcerts({ commit }) {
        axios
            .get('http://localhost:8082/api/concerts')
            .then((response) => {
                if (response.status === 200) {
                    commit('getAllConcerts', response.data);
                } else {
                    return { status: response.status, message: response.statusText };
                }
            })
            .catch((error) => {
                return {
                    status: error.response.status,
                    message: error.response.statusText,
                };
            });
    },

    getConcertById({ commit }, id) {
        axios
            .get(`http://localhost:8082/api/concerts/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    commit('getConcertById', response.data);
                } else {
                    return { status: response.status, message: response.statusText };
                }
            })
            .catch((error) => {
                return {
                    status: error.response.status,
                    message: error.response.statusText,
                };
            });
    },
};

const mutations: MutationTree<State> = {
    addConcert(state, concert) {
        concert.id = state.concerts.length + 1;
        console.log("AddConcert mutation", concert);
        state.concerts.push(concert);
    },
    editConcert(state, concert) {
        const index = state.concerts.findIndex((c) => c.id === concert.id);
        state.concerts[index] = concert;
    },
    deleteConcert(state, id) {
        const index = state.concerts.findIndex((c) => c.id === id);
        state.concerts.splice(index, 1);
    },
    getAllConcerts(state, concerts) {
        state.concerts = concerts;
    },
};

export const store: Store<State> = createStore({
    state,
    getters,
    actions,
    mutations,
});

export const key: InjectionKey<Store<State>> = Symbol();

export function useStore(): Store<State> {
    return baseUseStore(key);
}



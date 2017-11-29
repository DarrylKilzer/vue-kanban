import axios from 'axios'
import vue from 'vue'
import vuex from 'vuex'
import router from 'router'

let api = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 2000,
    withCredentials: true
})

let auth = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 2000,
    withCredentials: true
})
vue.use(vuex)

var store = new vuex.Store({
    state: {
        boards: [],
        activeBoard: {},
        error: {},
        user: {},
        lists: []
    },
    mutations: {
        setBoards(state, data) {
            state.boards = data
        },
        setActiveBoard(state, board) {
            state.activeBoard = board
        },
        handleError(state, err) {
            state.error = err
        },
        setUser(state, user) {
            state.user = user
        },
        setLists(state, lists) {
            state.lists = lists
        }
    },
    actions: {
        //when writing your auth routes (login, logout, register) be sure to use auth instead of api for the posts

        //THESE ARE ALL BOARD FUNCTIONS
        getBoards({ commit, dispatch }) {
            api('boards')
                .then(res => {
                    commit('setBoards', res.data.data)
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        getBoard({ commit, dispatch }, id) {
            api('boards/' + id)
                .then(res => {
                    commit('setActiveBoard', res.data.data)
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        createBoard({ commit, dispatch }, board) {
            debugger
            api.post('boards/', board)
                .then(res => {
                    dispatch('getBoards')
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        removeBoard({ commit, dispatch }, board) {
            api.delete('boards/' + board._id)
                .then(res => {
                    this.getBoards()
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        createList({ commit, dispatch }, list) {
            api.post('lists/', list)
                .then(res => {
                    dispatch('getLists')
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        // getLists({ commit, dispatch}, list){
        //   api('lists/' + id)
        //   .then(res => {
        //       commit('setActiveList', res.data.data)
        //   })
        //   .catch(err => {
        //       commit('handleError', err)
        //   })
        // },
        //ERROR FUNCTIONS
        handleError({ commit, dispatch }, err) {
            commit('handleError', err)
        },
        //LOGIN FUNCTIONS
        login({ commit, dispatch }, payload) {
            debugger
            auth.post('login', payload)
                .then(res => {
                    commit('setUser', res.data.data)
                    router.push({ name: 'Boards' })
                    console.log(res)
                })
                .catch(err => {
                    commit('handleError', err)
                })
        }

    }

})


export default store
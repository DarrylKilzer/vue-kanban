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
        lists: [],
        tasks: []
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
        },
        setTasks(state, tasks) {
            state.tasks = tasks
        }
    },
    actions: {
        //when writing your auth routes (login, logout, register) be sure to use auth instead of api for the posts

        //THESE ARE BOARD FUNCTIONS
        getBoards({ commit, dispatch }) {
            api('userboards')
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
                    dispatch('getBoards')
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        //THESE ARE LIST FUNCTIONS
        createList({ commit, dispatch }, list) {
            api.post('lists/', list)
                .then(res => {
                    dispatch('getLists')
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        getLists({ commit, dispatch }, boardId) {
            api('boards/' + boardId + '/lists')
                .then(res => {
                    console.log(res)
                    commit('setLists', res.data.data)
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        removeList({ commit, dispatch }, board) {
            api.delete('lists/' + board._id)
                .then(res => {
                    this.getBoards()
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        getTasks({ commit, dispatch }, payload) {
            api('boards/' + boardId + '/lists' + payload.listId + '/tasks')
                .then(res => {
                    console.log(res)
                    commit('setTasks', res.data.data)
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        createTask({ commit, dispatch }, task) {
            api.post('tasks/', task)
                .then(res => {
                    dispatch('getTasks')
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        //ERROR FUNCTIONS
        handleError({ commit, dispatch }, err) {
            commit('handleError', err)
        },
        //LOGIN FUNCTIONS
        login({ commit, dispatch }, payload) {

            auth.post('login', payload)
                .then(res => {
                    commit('setUser', res.data.data)
                    router.push({ name: 'Boards' })
                    console.log(res)
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        register({ commit, dispatch }, payload) {

            auth.post('register', payload)
                .then(res => {
                    commit('setUser', res.data.data)
                    router.push({ name: 'Boards' })
                    console.log('User account successfully created')
                })
                .catch(err => {
                    commit('handleError', err)
                })

        },
        logout({ commit, dispatch }) {
            auth.delete('logout')
                .then(res => {
                    commit('setUser', {})
                    router.push({ name: 'Login' })
                    console.log('User session terminated')
                })
                .catch(err => {
                    commit('handleError', err)
                })

        },
        authenticate({ commit, dispatch }) {
            auth.get('authenticate')
                .then(res => {

                    router.push({ name: 'Boards' })
                    commit('setUser', res.data.data)
                })
                .catch(err => {

                    commit('handleError', err)
                    router.push({ name: 'Login' })
                })

        }

    }

})


export default store
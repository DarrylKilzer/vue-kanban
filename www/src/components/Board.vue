<template>
  <div> 
    <div>
      <h1>{{board.name}}</h1>
      <form class="listForm" @submit.prevent="createList">
          <div class="form-group">
            <label for="list">Create New List</label>
            <input class="form-control" type="text" name="list" placeholder="list name" v-model='list.name' required>
            <input class="form-control" type="text" name="listDescription" placeholder="description" v-model='list.description'>
            <button type="submit">Add List</button>
        </div>
      </form>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div v-for="list in lists">
                <list :listprop="list"></list>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    import list from "./list"
    export default {
        name: 'board',
        data() {
            return {
                list: {
                    name: "",
                    description: ""
                }
            }
        },
        mounted() {
            this.$store.dispatch('getBoard', this.$route.params.id)
            this.$store.dispatch('getLists', this.$route.params.id)

        },
        computed: {
            board() {
                return this.$store.state.activeBoard
            },
            lists() {
                return this.$store.state.lists
            }
        },
        methods: {
            createList() {
                this.list = {
                    name: this.list.name,
                    description: this.list.description,
                    boardId: this.board._id
                }
                this.$store.dispatch('createList', this.list)

            },
            removeList(list) {
                this.$store.dispatch('removeList', list)

            }
        },
        components: {
            list
        }
    }
</script>

<style scoped>
    .h1 {
        color: whitesmoke;
        font-family: 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
    }
</style>
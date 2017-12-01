<template>
  <div> 
    <div>
      <h1>{{board.name}}</h1>
      <form class="boardForm col-xs-6 col-sm-4 col-md-3" @submit.prevent="createBoard">
          <div class="form-group">
              <label for="list">Create New List</label>
              <input class="form-control" type="text" name="list" placeholder="list name" v-model='list.name' required>
          <button type="submit">Add List</button>
        </div>
      </form>
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
                    name: ""
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
                this.$store.dispatch('createList', this.list)
                this.list = {
                    name: ''
                }

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

.h1{
    color: whitesmoke;
    font-family: 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}

</style>
<template>
  <div> 
    <div>
      <h1>{{board.name}}</h1>
      <form class="boardForm" @submit.prevent="createBoard">
          <div class="form-group">
              <label for="list">Create New List</label>
              <input class="form-control" type="text" name="list" placeholder="list name" v-model='list.name' required>
          </div>
      </form>
      </div>
<button type="submit">Add List</button>
    
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

</style>
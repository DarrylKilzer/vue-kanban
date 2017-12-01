<template>
  <div> 
    <div>
      <h1>{{board.name}}</h1>
      <form class="listForm" @submit.prevent="createList">
          <div class="form-group">
              <label for="list">Create New List</label>
              <input class="form-control" type="text" name="list" placeholder="list name" v-model='list.name' required>
          </div>
      </form>
      </div>
<button @click="createList">Add List</button>
<ol>
        <li v-for="list in lists"><router-link :to="'/boards/'+board._id/lists/'+list._id/'">{{list.name}}</router-link> <button class= "btn btn-danger" @click="removeList(list)">delete</button></li>
      </ol>
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
                this.list = {
                    name: this.list.name,
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

</style>
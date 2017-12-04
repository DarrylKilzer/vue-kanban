<template>
  <div> 
          <form class="boardForm" @submit.prevent="createBoard">
              <div class="form-group ">
                  <label for="board">Board Name</label>
                  <input class="form-control " type="text" name="board" placeholder="board name" v-model='board.name' required>
              </div>
              </form>
    <button type="submit">Add Board</button>
   <div class="row">
      <div class="col-xs-6 col-sm-4 col-md-3 text-right" v-for="board in boards">
          <router-link :to="'/boards/'+board._id">{{board.name}}</router-link> 
        <button class= "btn btn-danger" @click="removeBoard(board)">delete</button></div>
  </div>
  </div>
</template>

<script>
    export default {
        name: 'boards',
        data() {
            return {
                board: {
                    name: ""
                }

            }
        },
        mounted() {
            this.$store.dispatch('getBoards')
        },
        computed: {
            boards() {
                return this.$store.state.boards
            }

        },
        methods: {
            createBoard() {
                this.$store.dispatch('createBoard', this.board)
                this.board = {
                    name: ''
                }

            },
            removeBoard(board) {
                this.$store.dispatch('removeBoard', board)

            }
        }
    }
</script>

<style scoped>

</style>
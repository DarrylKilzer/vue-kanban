<template>
  <div> 
          <form class="boardForm">
              <div class="form-group">
                  <label for="board">Board Name</label>
                  <input class="form-control" type="text" name="board" placeholder="board name" v-model='board.name' required>
              </div>
              </form>
    <button @click="createBoard">Add Board</button>
    <ol>
      <li v-for="board in boards"><router-link :to="'/boards/'+board._id">{{board.name}}</router-link> <button class= "btn btn-primary" @click="removeBoard(board)">delete</button></li>
    </ol>
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
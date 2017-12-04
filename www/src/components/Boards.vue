<template>
  <div> <br>
          <form class="boardForm" @submit.prevent="createBoard">
              <div class="form-group ">
                  <label style="font-size: 2em" for="board">All Boards</label>
                  <h3>Create a new board:</h3>
                  <input class="form-control " type="text" name="board" placeholder="board name" v-model='board.name' required>
                  <button type="submit"><samp>Create</samp></button>
              </div>
              </form>
   <div class="row">
      <div class="col-xs-6 col-sm-4 col-md-3 text-right item" v-for="board in boards">
          <router-link :to="'/boards/'+board._id" style="font-size: 1.5em">{{board.name}}</router-link> 
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
    .boardForm {
        width: 100vw;
        padding-left: 30vw;
        padding-right: 30vw;
        text-align: center;
        
    }

    .form-control{
        text-align: center;
        
    }

    .item {
        padding: 5px;
        text-align: center;
    
    }

    a {
        color: white
    }

</style>
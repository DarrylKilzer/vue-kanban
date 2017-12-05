<template>
    <div>
        <div>
<<<<<<< HEAD
            <h2 class="task text-center">{{taskprop.name}}</h2>
            <a><p id="end" @click="removeTask">Delete Task</p></a>
            
                
            
=======

            <h2 class="task text-center">{{taskprop.name}}</h2>
            <a>
                <p id="end" @click="removeTask">Delete Task</p>
            </a>

            <form class="commentForm" @submit.prevent="createComment">
                <div class="form-group col-xs-12">
                    <input class="form-control" type="text" name="comment" placeholder="comment" v-model='comment.message' required>
                    <button class="btn btn-primary">
                        <samp>Add Comment
                        </samp>
                    </button>
                </div>
            </form>

            <div v-for="comment in comments">
                <div class="row text-center">
                    <div class="col-xs-12">
                        <comment :commentprop="comment"></comment>
                    </div>
                </div>
            </div>


>>>>>>> 5cc6ca8183d50d440c93764646090cc55d4ee01b
        </div>
    </div>
</template>

<script>
    import comment from "./comment"
    export default {
        name: '',
        props: ["taskprop"],
        data() {
            return {
                comment: {
                    message: ""
                }
            }
        },
        mounted() {
           /*  this.$store.dispatch('getComments',
                {
                    boardId: this.$route.params.id,
                    listId: this.$route.params.id,
                    taskId: this.taskprop._id

                }) */
            },
            computed: {
              /*   comments() {
                    return this.$store.state.comments[this.taskprop._id]
                } */
            },
            methods: {
                createComment() {
                    this.comment = {
                        message: this.comment.message,
                        boardId: this.taskprop.listprop.boardId,
                        listId: this.taskprop.listId,
                        taskId: this.taskprop._id
                    }

                    this.$store.dispatch('createComment', this.comment)

                    this.comment = {
                        message: ""
                    }

                },
                removeTask() {
                    this.$store.dispatch('removeTask', this.taskprop)
                    this.task = {
                        name: ""
                    }

                }

            },
            components: {
                //comment

            }
        }
</script>

<style scoped>
<<<<<<< HEAD
a{
=======
<<<<<<< HEAD
    a {
        cursor: pointer;
        color: red;

=======
.d{
>>>>>>> 5cc6ca8183d50d440c93764646090cc55d4ee01b
    cursor: pointer;
    color: red;

}
a:hover{
    color: red;
    
}
<<<<<<< HEAD
=======
.glyphicon{
        padding-left: 5px;
        cursor: pointer;
>>>>>>> 638e84eae54afcfcb111f2c1ea8056c86a4299e2
    }
>>>>>>> 5cc6ca8183d50d440c93764646090cc55d4ee01b

    a:hover {
        color: red;

    }
</style>
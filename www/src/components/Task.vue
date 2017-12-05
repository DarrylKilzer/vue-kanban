<template>
    <div>
        <div>
            <h5 class="task text-center">{{taskprop.name}}
                <a>
                    <span class="glyphicon glyphicon-option-vertical"></span>
                </a>
            </h5>
            <a class="d">
                <p id="end" @click="removeTask">Delete Task</p>
            </a>
            <div v-for="comment in comments">
                <h3>{{comment.message}}</h3>
            </div>
            <form class="commentForm" @submit.prevent="createComment">
                <div class="form-group">
                    <input class="form-control" type="text" name="comment" placeholder="comment" v-model='comment.message' required>
                    <button class="btn btn-danger">
                        <samp>Add Comment</samp>
                    </button>
                </div>
            </form>

        </div>



    </div>
</template>

<script>
    //   import comment from "./comment"
    export default {
        name: '',
        props: ["taskprop"],
        data() {
            return {
                comment: {
                    message: "",

                }
            }
        },
        mounted() {
            this.$store.dispatch('getComments',
                {
                    boardId: this.$route.params.id,
                    listId: this.taskprop.listId,
                    taskId: this.taskprop._id
                })

        },
        computed: {
            comments() {
                return this.$store.state.comments[this.taskprop._id]
            }   
        },

        methods: {
            createComment() {
                this.comment = {
                    message: this.comment.message,
                    boardId: this.taskprop.boardId,
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
        components: {}
    }
</script>

<style scoped>
    .d {
        cursor: pointer;
        color: red;

    }

    .d:hover {
        color: red;

    }

    .glyphicon {
        padding-left: 5px;
        cursor: pointer;
    }

    p {
        font-size: .5em
    }
</style>
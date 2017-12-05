<template>
    <div>
        <div>
            <h2>{{listprop.name}}</h2>
            <a>
                <p class="text-right" id="end" @click="removeList">Delete List</p>
            </a>
            <form class="taskForm" @submit.prevent="createTask">
                <div class="form-group col-xs-12">
                    <input class="form-control" type="text" name="task" placeholder="task name" v-model='task.name' required>
                    <button class="btn btn-primary">
                        <samp>Add Task</samp>
                    </button>
                </div>
            </form>
            <div v-for="task in tasks">
                <div class="row text-center">
                    <div class="col-xs-12">
                        <task :taskprop="task"></task>
                    </div>
                </div>
            </div>
           

        </div>
    </div>
</template>

<script>
    import task from "./task"
    export default {
        name: 'list',
        props: ["listprop"],
        data() {
            return {
                task: {
                    name: "",

                }
            }
        },
        mounted() {
            this.$store.dispatch('getTasks',
                {
                    boardId: this.$route.params.id,
                    listId: this.listprop._id
                })

        },

        computed: {
            tasks() {
                return this.$store.state.tasks[this.listprop._id]

            }
        },
        methods: {
            createTask() {
                this.task = {
                    name: this.task.name,
                    description: this.task.description,
                    boardId: this.listprop.boardId,
                    listId: this.listprop._id
                }

                this.$store.dispatch('createTask', this.task)

                this.task = {
                    name: ""
                }

            },
            removeList() {
                this.$store.dispatch('removeList', this.listprop)

            }
        },
        components: {
            task,
            
        }
    }
</script>

<style scoped>
    #end {
        cursor: pointer;
        color: rgb(156, 26, 26);
       
     
    }


    .taskForm {
        width: 100vw;
        padding-left: 30vw;
        padding-right: 30vw;
        
    }

    .form-control {
        

    }

    .item {
        padding: 5px;
      

    }

    a {
        color: white
    }
</style>
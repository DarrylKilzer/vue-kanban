<template>
    <div>
        <div>
            <h3>{{listprop.name}}</h3>
            <a><p class="text-right" id="end">Delete</p></a>
            <form class="taskForm" @submit.prevent="createTask">
                <div class="form-group">
                  <input class="form-control" type="text" name="task" placeholder="task name" v-model='task.name' required>
                  <button class="btn btn-primary" @click="createTask">Add Task</button>
              </div>
            </form>
            <div v-for="task in tasks">
                <task :taskprop="task"></task>
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
       
        computed: {
            tasks() {
                return this.$store.state.tasks
            }
        },
        methods: {
            createTask() {
                this.task = {
                    name: this.task.name,
                    description: this.task.description,
                    boardId: this.listprop.boardId,
                    listId: this.listprop._id 
                    // listId: this.listprop.listId  <== for comments
                }

                this.$store.dispatch('createTask', this.task)

             /*    this.list = {
                    name: this.list.name,
                    description: this.list.description,
                    boardId: this.board._id */
            },
            removeTask(task) {
                this.$store.dispatch('removeTask', task)

            }
        },
        components: {   
            
        }
    }
</script>

<style scoped>
#end {
    cursor: pointer;
    color: rgb(156, 26, 26);
    display: flex;
    display: inline
}


.taskForm {
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
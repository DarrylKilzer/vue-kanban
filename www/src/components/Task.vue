<template>
    <div>
        <div>
            <h2 class="task text-center">{{taskprop.name}}</h2>
            <a><p id="end" @click="removeTask">Delete Task</p></a>
            
                
            
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
            }
        },
        computed: {},
        methods: {
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
a{
    cursor: pointer;
    color: red;

}
a:hover{
    color: red;
    
}


</style>
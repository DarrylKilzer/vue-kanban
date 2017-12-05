<template>
    <div>
        <div>
            <h5 class="task text-center">{{taskprop.name}}<a><span class="glyphicon glyphicon-option-vertical"></span></a></h5>
            <a class="d"><p id="end" @click="removeTask">Delete Task</p></a>

                
            
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
.d{
    cursor: pointer;
    color: red;

}
.d:hover{
    color: red;
    
}
.glyphicon{
        padding-left: 5px;
        cursor: pointer;
    }


</style>
<template>
<<<<<<< HEAD
    <div>
        <div>
            <h2 class="comment text-center">{{commentprop.message}}</h2>
            <a><p id="end" @click="removeComment">Delete Comment</p></a>
        </div>
    </div>
</template>

<script>
 //   import comment from "./comment"
    export default {
        message: '',
        props: ["commentprop"],
        data() {
            return {
            }
        },
        computed: {},
        methods: {
            removeComment() {
                this.$store.dispatch('removeComment', this.commentprop)
                this.comment = {
                    message: ""
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
=======
        <div>
        </div>
    </template>
    
    <script>
        import comment from "./comment"
        export default {
            name: '',
            props: [""],
            data() {
                return {
                }
            },
            computed: {},
            methods: {},
            components: {}
        }
    </script>
    
    <style scoped>
    </style>
>>>>>>> 9a1feb75828cc6c64bb46b377fced6ce4682e9bd

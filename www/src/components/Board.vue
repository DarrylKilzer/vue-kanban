<template>
  <div> 
    Active Board: {{board}}
  </div>
</template>

<script>
    import list from "./list"
    export default {
        name: 'board',
        mounted() {
            this.$store.dispatch('getBoard', this.$route.params.id)
            this.$store.dispatch('getLists', this.$route.params.id)
        },
        computed: {
            board() {
                return this.$store.state.activeBoard
            },
            lists() {
                return this.$store.state.lists
            }
        },
        components: {
            list
        }
    }
</script>

<style scoped>

</style>
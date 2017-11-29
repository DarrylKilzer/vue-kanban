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
        },
        computed: {
            board() {
                return this.$store.state.activeBoard
            }
        },
        components: {
            list
        }
    }
</script>

<style scoped>

</style>
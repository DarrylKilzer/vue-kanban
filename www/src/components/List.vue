<template>
    <div>
        <div>
            <h3>{{listprop.name}}</h3>
            <p v-if="listprop.description">Description: {{listprop.description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'list',
        props: ["listprop"],
        data() {
            return {}
        },
        computed: {},
        methods: {},
        components: {}
    }
</script>

<style scoped>

</style>
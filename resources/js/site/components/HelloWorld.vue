<template>
    <div>
        <h1>First Comonent Vue-js</h1>
        <span v-html="data"></span>
    </div>
</template>

<script>
    export default {
        props: ['data']
    }
</script>

<style scoped>

</style>
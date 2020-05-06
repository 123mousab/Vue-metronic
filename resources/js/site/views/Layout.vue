<template>
    <app-hello-world :data="mousab"></app-hello-world>
</template>

<script>
    import HelloWorld from '../components/HelloWorld';
    export default {
        data() {
            return {
                mousab: '<h2 style="color: red">This is props in vue-js♥</h2>'
            }
        },
        components: {
            AppHelloWorld: HelloWorld
        }
    }
</script>

<style scoped>

</style>
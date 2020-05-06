<template>
    <div>
        <div class="m-grid m-grid--hor m-grid--root m-page">

            <app-header></app-header>

            <app-sidebar>
                <div slot="title">

                </div>
                <div slot="content">
                    <router-view></router-view>
                </div>
            </app-sidebar>

            <app-footer></app-footer>

        </div>
    </div>
</template>

<script>
    import '../components'
    import Header from "./partials/Header";
    export default {
        name: "Layout",
        components: {Header}
    }
</script>

<style scoped>

</style>
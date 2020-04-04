<template lang="pug">
    #main
        navbar
        b-container(id="content", class="py-4", fluid)
            b-row
                b-col
                    nuxt
</template>

<script lang="ts">
    import { Vue, Component } from 'nuxt-property-decorator';
    import Navbar from '~/components/default/Navbar.vue';

    @Component({
        components: {
            Navbar
        }
    })
    export default class DefaultLayout extends Vue {}
</script>

<style lang="scss">
    #main {
        min-height: 100vh;
        background: $gray-900;
        color: $light;
    }
</style>

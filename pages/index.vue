<template lang="pug">
    div
        h1 Newest
</template>

<script lang="ts">
    import { Vue, Component } from 'nuxt-property-decorator';

    @Component({
        auth: false
    })
    export default class Index extends Vue {
        head() {
            return {
                title: 'Home'
            };
        }
    }
</script>

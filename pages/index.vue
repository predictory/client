<template lang="pug">
    div
        h1 Newest
</template>

<script>
    import { Vue, Component } from 'nuxt-property-decorator';

    @Component({
        auth: false,
        head: {
            title: 'Home'
        }
    })
    export default class Index extends Vue {}
</script>

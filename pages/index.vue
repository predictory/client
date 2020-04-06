<template lang="pug">
    div
        h1 Newest
</template>

<script>
    import { Vue, Component } from 'nuxt-property-decorator';
    import { Meta } from '~/utils/decorators/meta.decorator';

    @Component({
        auth: false
    })
    export default class Index extends Vue {
        @Meta
        head() {
            return {
                title: 'Home'
            };
        }
    }
</script>

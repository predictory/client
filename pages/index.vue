<template lang="pug">
    fragment
        b-row
            b-col
                h1 Newest
        items-list(:items="items")
</template>

<script lang="ts">
    import { Context } from '@nuxt/types';
    import { Vue, Component } from 'nuxt-property-decorator';
    import ItemsList from '~/components/default/items/List.vue';

    @Component({
        auth: false,
        components: {
            ItemsList
        }
    })
    export default class Index extends Vue {
        items = [];

        head() {
            return {
                title: 'Home'
            };
        }

        async asyncData({ app }: Context) {
            try {
                const items = await app.$services.itemsService.findAll(50, 0);

                return {
                    items
                };
            } catch (error) {
                app.$sentry.captureException(error);
            }
        }
    }
</script>

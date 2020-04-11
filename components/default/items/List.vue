<template lang="pug">
    b-row(class="mt-4")
        item(v-for="item in items", :key="item.id", :item="item")
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'nuxt-property-decorator';
    import { Item as ItemModel } from '~/models';
    import Item from '~/components/default/items/Item.vue';

    @Component({
        components: {
            Item
        }
    })
    export default class List extends Vue {
        @Prop()
        items!: ItemModel[];
    }
</script>

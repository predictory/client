<template lang="pug">
    b-col(lg="2", md="3", sm="4", cols="6" class="mb-4")
        .crop
            b-img(:src="itemImage", :alt="item.title", fluid)
        .caption(class="mt-2")
            p(class="mb-1") {{ item.title }}
            p(class="mb-0") {{ item.year }}
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'nuxt-property-decorator';
    import { Item as ItemModel } from '~/models';

    @Component
    export default class Item extends Vue {
        @Prop()
        item!: ItemModel;

        get itemImage() {
            const hasImage = this.item.poster !== null && this.item.poster !== '' && this.item.poster !== 'N/A';
            return hasImage ? this.item.poster : '://via.placeholder.com/160x200';
        }
    }
</script>

<style lang="scss" scoped>
    .crop {
        height: 200px;
        position: relative;
        overflow: hidden;
        border: 1px solid $gray-600;
    }
    @media screen and (max-width: 1200px) {
        .crop {
            height: 180px;
        }
    }
    @media screen and (max-width: 576px) {
        .crop {
            height: 250px;
        }
    }
    @media screen and (max-width: 420px) {
        .crop {
            height: 180px;
        }
    }
</style>

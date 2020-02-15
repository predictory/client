<template lang="pug">
    a-layout
        a-layout-content
            a-row(type="flex", justify="center", align="middle", class="row")
                nuxt
</template>

<style lang="scss" scoped>
    .ant-layout,
    .ant-layout-content {
        height: 100%;
        background: $dark-background;

        .row {
            height: 100vh;
        }
    }
</style>

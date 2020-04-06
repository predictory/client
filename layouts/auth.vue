<template lang="pug">
    b-container(id="main", :fluid="true")
        b-row(align-v="center", align-h="center")
            nuxt
</template>

<style lang="scss" scoped>
    #main /deep/ {
        background: $gray-900;
        color: $light;

        .form-control {
            background-color: $gray-800;
            border-color: $gray-600;
            color: $gray-500;
        }
        .form-control::placeholder {
            color: $gray-500;
        }
        .form-control::placeholder {
            color: $gray-500;
        }
    }
    .row {
        height: 100vh;
    }
</style>

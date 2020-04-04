<template lang="pug">
    b-navbar(toggleable="md", variant="dark", type="dark", sticky)
        b-navbar-brand(to="/")
            img(src="@/assets/images/logo-blue.png", alt="Predictory", width="120")
        b-navbar-toggle(target="nav-collapse")
        b-collapse(:is-nav="true")
            b-navbar-nav
                b-nav-item-dropdown(v-if="moviesGenres.length", text="Movies")
                    b-dropdown-item(
                        v-for="genre in moviesGenres",
                        :key="genre.id",
                        :to="`/movies/${genre.name.toLowerCase()}`"
                    ) {{ genre.name }}
                b-nav-item-dropdown(v-if="seriesGenres.length", text="Series")
                    b-dropdown-item(
                        v-for="genre in seriesGenres",
                        :key="genre.id",
                        :to="`/series/${genre.name.toLowerCase()}`"
                    ) {{ genre.name }}
            b-navbar-nav(class="ml-auto")
                template(v-if="isLogged")
                    b-nav-text Logged user:
                    b-nav-item-dropdown(:text="userFullName", right)
                        b-dropdown-item(@click="handleLogout") Logout
                b-nav-text(v-else)
                    nuxt-link(to="/login") Log in
                    span(class="ml-2 mr-2") |
                    nuxt-link(to="/register") Register
</template>

<script lang="ts">
    import UserMixin from '~/mixins/UserMixin';
    import { Component, mixins } from 'nuxt-property-decorator';
    import { mapGetters } from 'vuex';

    @Component({
        computed: {
            ...mapGetters({
                moviesGenres: 'genres/moviesGenres',
                seriesGenres: 'genres/seriesGenres'
            })
        }
    })
    export default class Navbar extends mixins(UserMixin) {
        async handleLogout() {
            await this.$auth.logout();
            this.$bvToast.toast('You have been successfully logged off from system.', {
                title: 'See you soon!',
                variant: 'success',
                solid: true
            });
        }
    }
</script>

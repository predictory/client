import { Component, Vue } from 'nuxt-property-decorator';

@Component
class UserMixin extends Vue {
    get isLogged() {
        return !!this.$auth.user;
    }

    get isAdmin() {
        return this.isLogged ? this.$auth.user.admin : false;
    }

    get userFullName() {
        const user = this.$auth.user;
        return user ? `${user.name} ${user.surname}` : '';
    }
}
export default UserMixin;

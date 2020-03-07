<template lang="pug">
    div
        div(class="header")
            h1 Registration
        form(@submit.prevent="handleSubmit")
            input(type="text", placeholder="First name")
            input(type="text", placeholder="First name")
            input(type="text", placeholder="First name")
            input(type="password", placeholder="Password")
            button(type="submit") Register
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    // import { parseResponseError } from '~/utils/helpers/response.helper';

    @Component({
        layout: 'auth',
        auth: false,
        head: {
            title: 'Registration'
        }
    })
    export default class Login extends Vue {
        async handleSubmit(): Promise<void> {
            /* this.form.validateFields(async (err: any, values: any) => {
                if (!err) {
                    try {
                        await this.$services.usersService.create(values);
                        this.$message.success('Registration completed.');
                        this.$router.push('/login');
                    } catch (error) {
                        this.$sentry.captureException(error);
                        this.$message.error(parseResponseError(error));
                    }
                }
            }); */
            console.log('Submitting');
        }
    }
</script>

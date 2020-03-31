<template lang="pug">
    div
        div(class="header")
            h1 Login
        b-form(@submit="handleSubmit")
            b-form-group
                b-input(type="text", placeholder="E-mail")
            b-form-group
                b-input(type="password", placeholder="Password")
            b-form-group
                b-button(type="submit", variant="primary", block) Login
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    // import { parseResponseError } from '~/utils/helpers/response.helper';

    @Component({
        layout: 'auth',
        head: {
            title: 'Login'
        }
    })
    export default class Login extends Vue {
        async handleSubmit(): Promise<void> {
            /* this.form.validateFields(async (err: any, values: any) => {
                if (!err) {
                    try {
                        await this.$auth.loginWith('local', {
                            data: {
                                email: values.email,
                                password: values.password
                            }
                        });
                        this.$message.success('You have been successfully logged into system.');
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

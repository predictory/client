<template lang="pug">
    a-col(:xl="4", :lg="6", :md="8", :sm="12", class="auth-form")
        div(class="header")
            h1 Login
        a-form(:form="form", @submit.prevent="handleSubmit")
            a-form-item
                a-input(type="text", v-decorator="formRules.email", size="large", placeholder="E-mail")
                    a-icon(slot="prefix", type="user")
            a-form-item
                a-input(type="password", v-decorator="formRules.password", size="large", placeholder="Password")
                    a-icon(slot="prefix", type="lock")
            a-form-item
                a-button(type="primary", size="large", html-type="submit", block) Login
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { parseResponseError } from '~/utils/helpers/response.helper';

    @Component({
        layout: 'auth',
        head: {
            title: 'Login'
        }
    })
    export default class Login extends Vue {
        form: any;
        formRules: any;

        beforeCreate() {
            this.formRules = {
                email: [
                    'email',
                    {
                        rules: [
                            {
                                required: true,
                                message: 'Email is required.'
                            },
                            {
                                type: 'email',
                                message: 'E-mail must be valid.'
                            }
                        ]
                    }
                ],
                password: [
                    'password',
                    {
                        rules: [
                            {
                                required: true,
                                message: 'Password is required.'
                            }
                        ]
                    }
                ]
            };
            this.form = this.$form.createForm(this);
        }

        async handleSubmit(): Promise<void> {
            this.form.validateFields(async (err: any, values: any) => {
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
            });
        }
    }
</script>

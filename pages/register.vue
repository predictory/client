<template lang="pug">
    a-col(:xl="4", :lg="6", :md="8", :sm="12", class="auth-form")
        div(class="header")
            h1 Registration
        a-form(:form="form", @submit.prevent="handleSubmit")
            a-form-item
                a-input(type="text", v-decorator="formRules.name", size="large", placeholder="First name")
            a-form-item
                a-input(type="text", v-decorator="formRules.surname", size="large", placeholder="Last name")
            a-form-item
                a-input(type="text", v-decorator="formRules.email", size="large", placeholder="E-mail")
            a-form-item
                a-input(type="password", v-decorator="formRules.password", size="large", placeholder="Password")
            a-form-item
                a-button(type="primary", size="large", html-type="submit", block) Register
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component({
        layout: 'auth',
        auth: false,
        head: {
            title: 'Registration'
        }
    })
    export default class Login extends Vue {
        form: any;
        formRules: any;

        beforeCreate() {
            this.formRules = {
                name: [
                    'name',
                    {
                        rules: [
                            {
                                required: true,
                                message: 'First name is required.'
                            }
                        ]
                    }
                ],
                surname: [
                    'surname',
                    {
                        rules: [
                            {
                                required: true,
                                message: 'Last name is required.'
                            }
                        ]
                    }
                ],
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
                            },
                            {
                                min: 5,
                                message: 'Password have to be at least 5 symbols long'
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
                        await this.$services.usersService.create(values);
                        this.$message.success('Registration completed.');
                        this.$router.push('/login');
                    } catch (error) {
                        this.$message.error(error.response.data.message);
                    }
                }
            });
        }
    }
</script>

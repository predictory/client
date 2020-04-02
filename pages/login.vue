<template lang="pug">
    b-col(xs="9", md="6", lg="4")
        div(class="mb-4")
            h1 Login
        b-form(@submit.stop.prevent="handleSubmit")
            b-form-group
                b-input(type="text", placeholder="E-mail", v-model="$v.email.$model", :state="validateState('email')")
                b-form-invalid-feedback E-mail is required and must have valid form
            b-form-group
                b-input(type="password", placeholder="Password", v-model="$v.password.$model", :state="validateState('password')")
                b-form-invalid-feedback Password is required
            b-form-group
                b-button(type="submit", variant="primary", block) Login
</template>

<script lang="ts">
    import { Vue, Component } from 'nuxt-property-decorator';
    import { required, email } from 'vuelidate/lib/validators';
    import { parseResponseError } from '~/utils/helpers/response.helper';

    @Component({
        layout: 'auth',
        head: {
            title: 'Login'
        },
        validations: {
            email: { required, email },
            password: { required }
        }
    })
    export default class Login extends Vue {
        email = '';
        password = '';

        validateState(name: string) {
            const { $dirty, $error } = this.$v[name];
            return $dirty ? !$error : null;
        }

        async handleSubmit(): Promise<void> {
            this.$v.$touch();
            if (this.$v.$anyError) {
                return;
            }

            try {
                await this.$auth.loginWith('local', {
                    data: {
                        email: this.email,
                        password: this.password
                    }
                });
                this.$bvToast.toast('You have been successfully logged into system.', {
                    title: 'Welcome!',
                    variant: 'success',
                    solid: true
                });
            } catch (error) {
                this.$sentry.captureException(error);
                this.$bvToast.toast(parseResponseError(error), {
                    title: 'Error',
                    variant: 'danger',
                    solid: true
                });
            }
        }
    }
</script>

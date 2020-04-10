<template lang="pug">
    b-col(xs="9", md="6", lg="4")
        div(class="mb-4")
            h1 Registration
        b-form(@submit.stop.prevent="handleSubmit")
            b-form-group
                b-input(type="text", placeholder="First name", v-model="$v.name.$model", :state="validateState('name')")
                b-form-invalid-feedback First name is required
            b-form-group
                b-input(type="text", placeholder="Last name", v-model="$v.surname.$model", :state="validateState('surname')")
                b-form-invalid-feedback Last name is required
            b-form-group
                b-input(type="text", placeholder="E-mail", v-model="$v.email.$model", :state="validateState('email')")
                b-form-invalid-feedback E-mail is required and must have valid form
            b-form-group
                b-input(type="password", placeholder="Password", v-model="$v.password.$model", :state="validateState('password')")
                b-form-invalid-feedback Password is required
            b-button(type="submit", variant="primary", block) Register
</template>

<script lang="ts">
    import { Vue, Component } from 'nuxt-property-decorator';
    import { required, email } from 'vuelidate/lib/validators';
    import { parseResponseError } from '~/utils/helpers/response.helper';

    @Component({
        layout: 'auth',
        auth: false,
        validations: {
            name: { required },
            surname: { required },
            email: { required, email },
            password: { required }
        }
    })
    export default class Login extends Vue {
        name = '';
        surname = '';
        email = '';
        password = '';

        head() {
            return {
                title: 'Registration'
            };
        }

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
                const { name, surname, email, password } = this;
                await this.$services.usersService.create({ name, surname, email, password });
                this.$bvToast.toast('You have been successfully registered into system.', {
                    title: 'Registration completed',
                    variant: 'success',
                    solid: true
                });
                this.$router.push('/login');
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

<template>

    <div class="login row justify-content-center">
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">Login</div>
                <div class="card-body">
                    <form @submit.prevent="authenticate">
                        <div class="form-group">
                            <label for="email">Email: </label>
                            <input type="email" v-model="form.email" class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <label for="password">Password: </label>
                            <input type="password" v-model="form.password" class="form-control" name="password" placeholder="Password">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import {login} from '../../helpers/auth';

    export default {
        name: "login",
        data() {
            return {
                form : {
                    email: '',
                    password: ''
                },
                error: null
            }
        },

        methods: {
            authenticate() {
                this.$store.dispatch('login')

                login(this.$data.form)
                    .then ((res) => {
                        this.$store.commit('loginSuccess', res);
                        this.$router.push({path: '/'})
                    })
                    .catch ((error) => {
                        this.$store.commit('loginFailed', {error});
                    })
            }
        }
    };
</script>

<style scoped>
</style>

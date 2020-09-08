<template>
  <v-app id="inspire">
    <form @submit.prevent="submitHandler"></form>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Register form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model.trim="email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model.trim="password"
                  ></v-text-field>
                  <v-text-field
                    id="confirm password"
                    label="Confirm password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model.trim="passwordConfirm"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <router-link
                  to="/login"
                  color="primary"
                  class="pr-6 text-decoration-none"
                >
                  Sign-in
                </router-link>
                <v-btn color="primary" type="submit"> Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    email: "",
    password: "",
    name: ""
  }),
  methods: {
    async submitHandler() {
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      };
      try {
        await this.$store.dispatch("register", formData);
        this.$router.push("/");
        // eslint-disable-next-line no-empty
      } catch (e) {}
    }
  }
};
</script>

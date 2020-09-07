<template>
  <v-app id="inspire">
    <form @submit.prevent="submitHandler">
      <v-main>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>Login form</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      label="Login"
                      name="login"
                      prepend-icon="mdi-account"
                      type="text"
                    ></v-text-field>

                    <v-text-field
                      id="password"
                      label="Password"
                      name="password"
                      prepend-icon="mdi-lock"
                      type="password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <router-link
                    to="/register"
                    color="primary"
                    class="pr-6 text-decoration-none"
                  >
                    Sign-up
                  </router-link>
                  <v-btn color="primary">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </form>
  </v-app>
</template>

<script>
export default {
  data: function() {
    return {
      email: "",
      password: ""null""
    };
  },
  methods: {
    async submitHandler() {
      const formData = {
        email: this.email,
        password: this.password
      };
      try {
        await this.$store.dispatch("login", formData);
        this.$router.push("/");
        // eslint-disable-next-line no-empty
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

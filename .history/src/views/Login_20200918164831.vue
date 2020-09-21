<template>
  <v-app id="inspire">
    <v-main class="background-gray">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="isValid">
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model.trim="email"
                    required
                    :rules="[rules.required, rules.email]"
                    v-on:keyup="keyLogin($event)"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model.trim="password"
                    required
                    :rules="[
                      rules.required,
                      rules.passNumber,
                      rules.passLength
                    ]"
                    v-on:keyup="keyLogin($event)"
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
                <v-btn
                  color="primary"
                  @click="submitHandler"
                  :disabled="!isValid"
                  >Login</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import messages from "@/common/messages";

export default {
  data: () => ({
    email: "",
    password: "",
    isValid: false,
    rules: {
      required: v => !!v || "Required",
      email: v =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid",
      passLength: v =>
        (v && v.length >= 6) || "Password must have 5+ characters",
      passNumber: v => /(?=.*\d)/.test(v) || "Must have one number",
      passConfirm: () =>
        this.password === this.passwordConfirm || "Password must be same"
    }
  }),
  methods: {
    async submitHandler() {
      const formData = {
        email: this.email,
        password: this.password
      };
      try {
        await this.$store.dispatch("login", formData);
        console.log("beforePush");

        this.$router.push("/");
        // eslint-disable-next-line no-empty
      } catch (e) {
        console.log(e);
      }
    },
    keyLogin(event) {
      if (event.keyCode === 13 && this.isValid === true) {
        this.submitHandler();
      }
    }
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      console.log("beforeMessage");
      this.$message(messages[this.$route.query.message]);
      console.log("afterMessage");
    }
  },
  computed: {}
};
</script>

<style>
.background-gray {
  background: #cccccc;
}
</style>

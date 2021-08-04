<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="6" md="6">
              <v-card elevation="elevation-12">
                    
                          <v-card-text class="mt-12">
                            <h1 class="text-center custColor mt-5">Reset Password!</h1>
                            <v-form>
                                <p class="ml-5 pl-5 black--text">Please enter the email id to reset the password.</p>
                              <v-text-field 
                              class="mb-5"
                              label="Email"
                              name="email"
                              prepend-icon="mdi-email"
                              type="text"
                              outlined
                              />
                              <div class="text-center mb-5">
                                <v-btn align="center" dark color="#990033" class="mb-5" rounded>Send Code</v-btn>                     
                                </div>
                            </v-form>
                            <v-form>
                                <div class="codewidth text-center" >
                              <v-text-field 
                              class="mx-5"
                              label="Code"
                              name="code"
                               align="center"
                              prepend-icon="mdi-lock"
                              type="password"
                              outlined
                              />
                              </div>
                            </v-form>
                          </v-card-text>
                          <div class="text-center mb-5  pb-5">
                            <v-btn dark color="#990033" class="mb-5" rounded>Verify</v-btn>                     
                          </div>
              </v-card>
            </v-col>
        </v-row>

      </v-container>
    </v-content>
  </v-app>
</template>

<style>

.custColor {
  color:#990033;
  font-size: 30px !important;
  margin-bottom: 40px;
  font-family: Arial, Helvetica, sans-serif
}

.custColor2 {
  background: #990033;
}

.custext {
  color: #990033 !important;
}

.codewidth {
    width: 300px;
    margin: 0 auto;
}

</style>

<script>
export default {
  data: () =>({
    step: 1
  }),
  props: {
    source: String
  }
};
</script>


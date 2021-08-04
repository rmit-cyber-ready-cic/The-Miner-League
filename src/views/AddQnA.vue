<template>
  <v-app>
       <Navbar/>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="8">
                 <v-snackbar
                                v-model="snackbar"
                                absolute
                                top
                                :timeout="1000"
                                color="success"
                                >
                                <span>Successfully added QnA to SmartChat conversation!</span>
                                <v-icon class="ml-5" dark>
                                    mdi-checkbox-marked-circle
                                </v-icon>
                                </v-snackbar>
              <v-card elevation="elevation-12">
                          <v-card-text class="mt-12">
                             
                            <h1 class="text-center custColor ma-5">Add QnA to SmartChat!</h1>
                            <p class="text-center mb-5 black--text">Question and response you add below will be added to SmartChat conversation.</p>
                            <v-form ref="form">
                              <v-text-field 
                              class="mb-5"
                              label="Question"
                              name="questions"
                              v-model="Question"
                              prepend-icon="mdi-alpha-q-box-outline"
                              type="text"
                              placeholder="Please add the question here."
                              outlined
                    
                              />
                             
                              <v-textarea
                                outlined
                                name="response"
                                label="Response"
                                 v-model="response"
                                placeholder="Please add your response here(100 words max)."
                                prepend-icon="mdi-message-reply-text"
                                ></v-textarea>
                             
                               </v-form>
                          </v-card-text>
                          <div class="text-center pb-5">
                            <v-btn dark color="#990033" class="mb-5 mr-5"  @click="submit" rounded>Submit</v-btn>   
                            <v-progress-circular
                            indeterminate
                            v-if="apiRequest"
                            color="#903"
                          ></v-progress-circular>                  
                          </div>                    
              </v-card>
            </v-col>
        </v-row>

      </v-container>
    </v-main>
      <FooterComp/>
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

</style>

<script>
import Navbar from "../components/Navbar"
import FooterComp from "../components/FooterComp"

export default {
     components: {
        Navbar,
        FooterComp
    },
  data() {
    return {
        question: "",
        response: "",
        snackbar: false
    };
  },
  methods: {
      submit () {
        this.snackbar = true;
        this.resetForm()
      },
      resetForm () {
        this.$refs.form.reset()
      },
  }

};
</script>



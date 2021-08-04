<template>
<v-app>
   <DefaultLayout/>
    <v-content>
  <div class="LandingPage">
 
    <v-container>
        <v-layout text-xs-center wrap justify-center>
            <v-flex xs12>
                <v-img
                :src="require('../assets/logoSmart.png')"
                class="my-3"
                contain
                height="200px">
                </v-img>
            </v-flex>
            <v-flex mb-4 class="text-center">
                <h1 class="font-weight-bold mb-3">
                    Welcome to SMARTCHAT
                </h1>
                <p>A quick and powerful AI based automated messaging system for students who are looking for an instant response.</p>
                
            </v-flex>

            <v-card-actions class="btnPrnt"> 
              <v-btn outlined dark class="homebtn" rounded text to="/Login"> Get Started</v-btn>
            </v-card-actions>

        </v-layout>
    </v-container>
  </div>
    </v-content>
    <FooterComp/>
</v-app>
</template>

<script>
import DefaultLayout from "../layouts/DefaultLayout";
import FooterComp from "../components/FooterComp"

export default {
    components: {
        DefaultLayout,
        FooterComp
    }
};
</script>
<template>
<v-app>
  <nav>
    <v-toolbar app dark color="#990033">
             <v-app-bar-nav-icon ></v-app-bar-nav-icon>
            <v-toolbar-tiltle class="text-uppercase font-weight-bold">
                <span class="font-weight-light">Smart</span>
                <span>Chat</span>
            </v-toolbar-tiltle>
            <v-spacer> </v-spacer>
            <v-btn text @click="signOut">
                <span>Sign out</span>
            </v-btn>
        </v-toolbar>
        </nav>
    <v-main>
  <div class="StudentHome">
 
    <v-container>
        <v-row>
        <v-col cols="12" md="8">
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
                    Welcome {{username}}
                </h1>
                <p>A powerful AI based automated messaging system for students who are looking for an instant response.</p>
                <p>Try out new SmartChat, you can ask queries such as assignment extension or grouping.</p>
                
            </v-flex>
        
             </v-layout>
          </v-col>
           <v-col cols="12" md="4">
         <v-layout >
            <amplify-chatbot
                class="customCss"
                bot-name="SmartChatBot_dev"
                bot-title="Wecome to SmartChat"
            />
         </v-layout>
          </v-col>
          </v-row>
    </v-container>
  </div>
    </v-main>
    <FooterComp/>
</v-app>
</template>

<script>

import FooterComp from "../components/FooterComp"
import { Auth } from 'aws-amplify';
import {Interactions} from 'aws-amplify';



export default {

    data() {
    return {
        username: "",
        email: "",
        status: "Pending",
        chatbotConfig: {
            bot: "SmartChatBot_dev",
            clearComplete: false
        }
    };
    
   
  },

    components: {
        FooterComp
    },
    mounted() {
        Interactions.onComplete("SmartChatBot_dev", this.handleComplete)
    },
    methods: {
        async  signOut() {
        try {
            await Auth.signOut();
            this.$router.push({ path: '/Login'});
        } catch (error) {
            console.log('error signing out: ', error);
        }
    },
    handleComplete(err, confirmation)  {
            if(err) {
                alert(err);
                return;
            } 
            alert(JSON.stringify(confirmation));
    }
    }
};
</script>

<style>


</style>
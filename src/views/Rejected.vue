<template>
<v-app>
      <Navbar/>
    <v-content class="noppading">
  <div class="rejected">
        <h3 class="font-weight-regular pa-5 text-center mt-5">List of students rejected for assignment extension by the Virtual Assistant.</h3>

    <v-container class="fill-height" >
      <v-row align="center" justify="center">
            <v-col cols="12" sm="12" md="12" >
            <v-snackbar
              v-model="snackbar"
              absolute
              top
              :timeout="1000"
              color="success"
              >
              <span>Successfully approved for extension</span>
              <v-icon class="ml-5" dark>
                  mdi-checkbox-marked-circle
              </v-icon>
              </v-snackbar>
      <v-card class="pa-3 mb-5"  v-for="(item, index) in items" :key="index">
        <v-layout wrap>
          <v-flex xs12 md6>
            <div class="caption grey--text">Name</div>
            <div>{{item.name}}</div>
          </v-flex>
          <v-flex xs12 sm4 md2>
            <div class="caption black--text ml-3">Status</div>
            <div>
              <v-chip class="white--text red" small>
                Rejected
              </v-chip>
            </div>
          </v-flex>
          <v-flex xs12 sm4 md2>
            <v-card-actions>
              <v-btn outlined rounded > View Deatils </v-btn>
            </v-card-actions>
          </v-flex>
          <v-flex xs12 sm4 md2>
            <v-card-actions>
              <v-btn outlined rounded @click="removeItem(item.id)"> Approve </v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-card>
      </v-col>
       </v-row>
    </v-container>
  </div>
</v-content>
     <FooterComp/>
  </v-app>
</template>

<style>
.noppading {
  padding-left: 0 !important;
}
</style>

<script>
import Navbar from "../components/Navbar"
import FooterComp from "../components/FooterComp"
export default {
 data() {
    return {
      snackbar: false,
      items: [
        {
          id: "card1",
          name: "Bradley Adkins",
          status: "Rejected"
        },
        {
          id: "card2",
          name: "oyce Terry",
          status: "Rejected"
        },
        {
          id: "card3",
          name: "Bradley Adkins",
          status: "Rejected"
        },
        {
          id: "card4",
          name: "Benny Washington",
          status: "Rejected"
        },
         {
           id: "card5",
          name: "Ginger Richardson",
          status: "Rejected"
        },
        {
          id: "card6",
          name: "Phil Graves",
          status: "Rejected"
        },
        {
          id: "card7",
          name: "Norman Hampton",
          status: "Rejected"
        },
        {
          id: "card8",
          name: "Teri Dactyl",
          status: "Rejected"
        },
        {
          id: "card9",
          name: "Douglas Fuller",
          status: "Rejected"
        },
        {
          id: "card10",
          name: "Aida Bugg",
          status: "Rejected"
        },
        {
          id: "card11",
          name: "Olive Yew",
          status: "Rejected"
        },


      ],
    };
  },
   components: {
        Navbar,
        FooterComp
    },
    methods: {
      removeItem (id) {
        var that = this;
        this.snackbar = true;
        setTimeout(function() { 
          
          that.items = that.items.filter(item => item.id !== id); 

          }, 1000);
      
    }
    },
  
}
</script>

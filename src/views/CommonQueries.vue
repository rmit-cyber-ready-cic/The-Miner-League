<template>
<v-app>
      <Navbar/>
    <v-content class="noppading">
  <div class="approved">
    <h3 class="font-weight-regular pa-5 text-center mt-5">List of students approved for assignment extension by the Virtual Assistant.</h3>
    <v-container class="fill-height" >
      <v-row align="center" justify="center">
            <v-col cols="12" sm="12" md="12" 
            
            >
      <v-card class="pa-3 mb-5"
      v-for="(item, index) in items" :key="index">
        <v-layout wrap
        >
          <v-flex xs12 md6>
            <div class="caption grey--text">Name</div>
            <div>{{item.name}}</div>
          </v-flex>
          <v-flex xs12 sm4 md2>
            <div class="caption black--text ml-3">Satuts</div>
            <div>
              <v-chip class="white--text success" small>
                {{item.status}}
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
              <v-btn outlined rounded @click="removeItem(item.id)"> Revoke </v-btn>
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



<style scoped>
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
      dialog: false,
      show:true,
      items: [
        {
          id: "card1",
          name: "Harsha Kumar",
          status: "Approved"
        },
        {
          id: "card2",
          name: "Manupriya Pramod",
          status: "Approved"
        },
        {
          id: "card3",
          name: "Fleetwood Mac",
          status: "Approved"
        },
        {
          id: "card4",
          name: "David Warner",
          status: "Approved"
        },
         {
           id: "card5",
          name: "Yong Lee",
          status: "Approved"
        },
        {
          id: "card6",
          name: "Allie Grater",
          status: "Approved"
        },
        {
          id: "card7",
          name: "Peg Legge",
          status: "Approved"
        },
        {
          id: "card8",
          name: "Teri Dactyl",
          status: "Approved"
        },
        {
          id: "card9",
          name: "Maureen Biologist",
          status: "Approved"
        },
        {
          id: "card10",
          name: "Aida Bugg",
          status: "Approved"
        },
        {
          id: "card11",
          name: "Olive Yew",
          status: "Approved"
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

        setTimeout(function() { 
          
          that.items = that.items.filter(item => item.id !== id); 
          
          }, 500);
      
    }
    },
}
</script>

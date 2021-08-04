<template>
<v-app>
      <Navbar/>
    <v-content class="noppading">
  <div class="approved">
    <h3 class="font-weight-regular pa-5 text-center mt-5">List of group names for the assignment and its members.  </h3>
    <v-container class="fill-height" >
      <v-row align="center" justify="center">
            <v-col cols="12" sm="12" md="12" 
            v-for="task in groupings"
          :key="task.group_name"
            >
      <v-card class="pa-3">
        <v-layout wrap
        >
          <v-flex xs12 md6>
            <div class="caption grey--text">Group name</div>
            <div class="bold">{{task.group_name}}</div>
          </v-flex>
          <v-flex xs12 sm4 md2>
            <div class="caption grey--text text-center">Name 1</div>
                  <div  class="text-center">{{task.name1}}</div>
                  </v-flex>
          <v-flex xs12 sm4 md2>
            <div class="caption grey--text ml-3 text-center">Name 2</div>
                          <div class="text-center">{{task.name2}}</div>
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
      groupings: [
        {
          group_name: "Team Machine",
          name1: "Harsha Kumar",
          name2: "Manupriya Pramod"
        },
        {
          group_name: "Flume Platoon",
          name1: "Fleetwood Mac",
          name2: "David Warner"
        },
       {
          group_name: "The Aggregators",
          name1: "Yong Lee",
          name2: "Allie Graterr"
        },
         {
          group_name: "Shoop Hadoop",
          name1: "Peg Legge",
          name2: "Teri Dactyl"
        },
        {
          group_name: "Hadoop Hotshots",
          name1: "Aida Bugg",
          name2: "Olive Yewl"
        },
      ],
    };
  },
  components: {
        Navbar,
        FooterComp
    },
}
</script>

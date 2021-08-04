<template>
  <v-app>
      <Navbar/>
    <v-content class="noppading">
        <div class="home">
    <h1 class="font-weight-regular pa-5 text-center">Welcome John!!</h1>

    <v-container class="ma-5 fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="8">
      <v-layout row wrap>
        <v-flex
          class="flex"
          xs12
          md6
          sm6
          lg6
          v-for="task in homecards"
          :key="task.name"
          router :to="task.route"
        >
          <v-card class="ma-5 cardBorder">
            <v-card-text>
              <v-card-title class="headline px-4 font-weight-bold">
              {{ task.name }}
            </v-card-title>
            <v-card-subtitle class="pa-4 grey--text">{{ task.desc }}</v-card-subtitle>
              <div ></div>
            </v-card-text>
            <v-card-actions class="homcardbtm">
              <v-btn outlined rounded text :to="task.route" class="homcardbtn"> View </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      </v-col>
       </v-row>
    </v-container>
  </div>
    </v-content>
     <FooterComp/>
  </v-app>
 
</template>

<style>

.crdTitl {
    color: #903;
}
.noppading {
  padding-left: 0 !important;
}
.cardBorder {
    border: 1px solid #990033 !important;
}

.homcardbtm {
    display: block;
    text-align: center;
    padding-bottom: 20px;
}

.homcardbtn {
    padding:10px 20px !important;
    border: 1px solid #990033 !important;
    color: #990033 !important;
}
</style>

<script>
import Navbar from "../components/Navbar"
import FooterComp from "../components/FooterComp"
export default {
    data() {
    return {
      homecards: [
        {
          name: "Approved Extensions",
          desc:
            "List of students who received assginment extension.",
          route: "/Approved",
        },
        {
          name: "Rejected Extensions",
          desc: "List of students with rejected extension",
          route: "/Rejected",
        },
        {
          name: "Groups",
          desc: "Click to view assignment 1 groupings",
          route: "/Groups",
        },
        {
          name: "Add Q&A",
          desc:
            "Click to add Q&A",
          route: "/AddQnA",
        },
      ],
    };
  },
 components: {
        Navbar,
        FooterComp
    }
};
</script>

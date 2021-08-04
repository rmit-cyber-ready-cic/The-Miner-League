<template>
  <div class="home">
    <h1 class="font-weight-regular pa-5 text-center">Welcome John!!</h1>

    <v-container class="ma-5 customWidth" justify-center>
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
          <v-card class="ma-5">
            <v-card-text>
              <div class="px-4 subheading font-weight-bold">
                {{ task.name }}
              </div>
              <div class="pa-4 grey--text">{{ task.desc }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn outlined rounded text :to="task.route"> Button </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<style scoped>
.customWidth {
  margin: 30px auto !important;
}
</style>

<script>
export default {
  data() {
    return {
      homecards: [
        {
          name: "Approved Extensions",
          desc:
            "Click to view the list of students who received assginment extension by the bot.",
          route: "/Approved",
        },
        {
          name: "Rejected Extensions",
          desc: "Click to view the list of students with rejected extension",
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
            "Click to add Question and answer to the bot or to add statements.",
          route: "/AddQnA",
        },
      ],
    };
  },
};
</script>

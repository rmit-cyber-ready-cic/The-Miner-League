import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@aws-amplify/ui-vue';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

Amplify.configure({
  Interactions: {
    bots: {
      "SmartChatBot_dev": {
        "name": "SmartChatBot_dev",
        "alias": "Build_two",
        "region": "<AWS Region>",
      },
    }
  }
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')


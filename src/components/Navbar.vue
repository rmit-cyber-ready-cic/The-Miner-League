<template>
    <nav>
        <v-toolbar app dark color="#990033">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-tiltle class="text-uppercase font-weight-bold">
                <span class="font-weight-light">Smart</span>
                <span>Chat</span>
            </v-toolbar-tiltle>
            <v-spacer> </v-spacer>
            <v-btn text @click="signOut">
                <span>Sign Out</span>
            </v-btn>          
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" app>
            <v-list>
                <v-list-item class="justify-center pa-3" >
                    <v-list-item-avatar  height="125" width="125" >
                      <v-img  src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                   </v-list-item-avatar>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            John Leider
                        </v-list-item-title>
                        <v-list-item-subtitle><--Enter Email address--></v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-icon>mdi-menu-down</v-icon>
                    </v-list-item-action>
                 </v-list-item>
                <v-divider></v-divider>
                
                <v-list-item class="mt-3" v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon>{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{link.text}}</v-list-item-title>
                    </v-list-item-content> 
                </v-list-item>

                
                
             </v-list>
        </v-navigation-drawer>
        

    </nav>
    
    
</template>
 

<script>

import { Auth } from 'aws-amplify';
export default {
    data() {
        return {
            drawer: false,
            links: [
                {icon: 'mdi-home-outline', text: 'Home', route: '/StaffHome' },
                {icon: 'mdi-checkbox-multiple-marked-outline', text: 'Approved', route: '/Approved' },
                {icon: 'mdi-close-box-multiple-outline', text: 'Rejected', route: '/Rejected' },
                {icon: 'mdi-playlist-edit', text: 'Add Q&A', route: '/AddQnA' },
                {icon: 'mdi-account-group-outline', text: 'View groups', route: '/Groups' }
            ]
        }
    },
    methods: {
        async  signOut() {
        try {
            await Auth.signOut();
            this.$router.push({ path: '/Login'});
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
    }
    
}
</script>



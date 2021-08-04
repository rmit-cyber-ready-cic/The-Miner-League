<template>
    <div class="LandingPage">
        <v-toolbar app dark color="#990033">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-tiltle class="text-uppercase font-weight-bold">
                <span class="font-weight-light">Smart</span>
                <span>Chat</span>
            </v-toolbar-tiltle>
            <v-spacer> </v-spacer>
            <v-btn text to="/Login">
                <span>Login</span>
            </v-btn>
        </v-toolbar>
    </div>
</template>
<style>
.btnPrnt {
    width: 100% !important;
    margin: 30px auto;
    display: block;
    text-align: center;
}
.homebtn {
    background: #990033;
    padding: 10px 20px !important;
}
</style>
<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="8">
              <v-card elevation="elevation-12">
                <v-window v-model="step">
                    <v-window-item :value="1">
                      <v-row>
                        <v-col class="vCardBorder" cols="12" md="8">
                          <v-card-text class="mt-12">
                            <h1 class="text-center custColor">Please login!</h1>
                            <v-form>
                              <v-text-field 
                              class="mb-5"
                              label="Email"
                              name="email"
                              v-model="email"
                              prepend-icon="mdi-email"
                              type="text"
                              outlined
                              />
                              <v-text-field 
                              class="mb-5"
                              label="Password"
                              name="password"
                              v-model="password"
                              prepend-icon="mdi-lock"
                              type="password"
                              outlined
                              />
                             
                              <a class="float-right black--text" href="/#/ResetPassword">Forgot Password?</a>
                            </v-form>
                          </v-card-text>
                          <div class="text-center mt-5">
                            <v-btn dark color="#990033" class="mb-5 mt-4 mr-5"  @click="loginUser" rounded>Login</v-btn>   
                            <v-progress-circular
                            indeterminate
                            v-if="apiRequest"
                            color="#903"
                          ></v-progress-circular>                  
                          </div>
                          
                        </v-col>
                        <v-col cols="12" md="4" class="custColor2">
                            <v-card-text class="white--text mt-3">
                              <h2 class="text-center display-1 mb-5">Hello!</h2>
                              <p class="text-center font-weight-medium">First time logging in?</p>
                              <p class="text-center font-weight-medium">Please sign up below to continue.</p>
                            </v-card-text>
                             <div class="text-center mt-3">
                                <v-btn class="white mb-5 custext" @click="step++" rounded>Signup</v-btn>                     
                             </div>
                        </v-col>
                      </v-row>
                    </v-window-item>
                    <v-window-item :value="2">
                      <v-row class="fill-height">
                        <v-col md="4" cols="12" class="custColor2">
                            <v-card-text class="white--text mt-3">
                              <h2 class="text-center display-1 mb-5">Hello!</h2>
                              <p class="text-center font-weight-medium">Already signed in?</p>
                              <p class="text-center font-weight-medium">Please login in below to continue.</p>
                            </v-card-text>
                             <div class="text-center mt-3">
                                <v-btn class="white mb-5 custext" rounded  @click="step--">Login</v-btn>                     
                             </div>
                        </v-col>
                        <v-col cols="12" sm="8" md="8">
                          <v-card-text class="mt-12">
                            <h1 class="text-center custColor">Please Signup!</h1>
                            <v-form>
                              <v-select
                              v-bind:items="['Student', 'Staff']"
                                label="Choose Role"
                                outlined
                                v-model="role"
                                prepend-icon="mdi-account-question-outline"
                              ></v-select>
                              
                              <v-text-field 
                              class="mb-4"
                              label="Email"
                              name="email"
                              v-model="email"
                              prepend-icon="mdi-email"
                              type="text" 
                              outlined
                              />
                              <v-text-field 
                              class="mb-4"
                              label="Name"
                              name="name"
                              v-model="name"
                              prepend-icon="mdi-account-circle"
                              type="text"
                              outlined
                              />
                              <v-text-field 
                              class="mb-4"
                              label="Password"
                              name="password"
                              v-model="password"
                              prepend-icon="mdi-lock"
                              type="password"
                              outlined
                              />
                          
                            </v-form>
                          </v-card-text>
                          <div class="text-center">
                            <v-btn dark color="#990033" class="mb-5 mr-5" @click="sendCode" rounded>Send Code</v-btn>   
                            <v-progress-circular
                            indeterminate
                            v-if="apiRequestSendcode"
                            color="#903"
                          ></v-progress-circular>                    
                          </div>
                          <p class="text-center">A verification code has been sent to the email, please enter the code.</p>
                            <v-form>
                                <div class="codewidth mt-5 text-center" >
                              <v-text-field 
                              class="mx-5"
                              label="Code"
                              name="code"
                               align="center"
                              prepend-icon="mdi-lock"
                              type="password"
                              v-model="code"
                              outlined
                              />
                              </div>
                            </v-form>
                          <div class="text-center mb-5  pb-5">
                            <v-btn dark color="#990033" class="mb-5" @click="signupUser" rounded>Verify</v-btn>  
                            <v-progress-circular
                            indeterminate
                            v-if="apiRequestSignup"
                            color="#903"
                          ></v-progress-circular>                    
                          </div>                   
                        </v-col>
                      </v-row>
                    </v-window-item>
                </v-window>
              </v-card>
            </v-col>
        </v-row>

      </v-container>
    </v-main>
  </v-app>
</template>

<style>

.custColor {
  color:#990033;
  font-size: 30px !important;
  margin-bottom: 40px;
  font-family: Arial, Helvetica, sans-serif
}

.custColor2 {
  background: #990033;
}

.custext {
  color: #990033 !important;
}

</style>

<script>
import { Auth } from 'aws-amplify';

export default {
  data() {
    return {
        role: undefined,
        email: "",
        name: "",
        code: "",
        password: "",
        step: 1,
        apiRequest: false,
        apiRequestSignup: false,
        apiRequestSendcode: false
    };
  },
  props: {
    source: String
  },
  methods: {
      async loginUser() {
        this.apiRequest = true;
        try {
            const user = await Auth.signIn(this.email, this.password);
            console.log(user);
            this.redirectLogic()
          
        } catch (error) {
            console.log('error signing in', error);
    }
      },
      async redirectLogic() {
          try {
            const currentUserInfo = await Auth.currentUserInfo()
            const givenRole = currentUserInfo.attributes['locale']
             if(givenRole=='Student') {
                 this.$router.push({ path: '/StudentHome', query: { email: this.email } });
            } else if(givenRole=='Staff') {
                this.$router.push({ path: '/Staffhome', query: { email: this.email } });
            }
            
          } catch (err) {
            console.log('error fetching user info: ', err);
          }
           
      },
      async sendCode() {
        this.apiRequestSendcode = true ;
        try {
        const { user } = await Auth.signUp({
            username: this.email,
            password: this.password,
            attributes: {
                email: this.email,          // optional
                name: this.name,
                locale: this.role
            } 
        });
        console.log(user);
        this.apiRequestSendcode = false ;
        
    } catch (error) {
        console.log('error signing up:', error);
    }
      },
      async signupUser() {
        this.apiRequestSignup= true;
         try {
          await Auth.confirmSignUp(this.email, this.code);
          this.apiRequestSignup= false;
        } catch (error) {
            console.log('error confirming sign up', error);
        }
      }
  } 
};
</script>



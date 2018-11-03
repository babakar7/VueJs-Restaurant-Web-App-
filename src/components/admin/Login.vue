<template>

<div class="container ml-0" style="width:30%">

  <div> <p> Logged in as: {{currentUser}} </p> </div>

  <form v-on:submit.prevent="">

    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1"
      aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
    </div>

    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control"
      id="exampleInputPassword1" placeholder="Password" v-model="password">
    </div>

    <button type="submit" class="btn btn-primary" v-on:click="signIn">Sign In</button>

    <button type="submit" class="btn btn-danger" v-on:click="signOut">Sign Out</button>

  </form>


  </form>
</div>

</template>



<script>


import firebase from 'firebase'
import {store} from '../../store/store.js'
//listn to authentication with observer

firebase.auth().onAuthStateChanged(function(user){

  if(user){
    store.dispatch('setUser', user)
  }else{

    store.dispatch('setUser', null)

  }

});

export default{

  name:'Login',

  data(){

    return{

      email:null,
      password:null
    }
  },

  methods:{

    signIn(){

      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .catch(function(error){

        let errorCode = error.errorCode
        let errorMessage = error.message

        if (errorCode == 'auth/wrong-password'){

          alert('Wrong password')
        }else{
          alert(errorMessage)
        }
      })

    },

    signOut(){

      firebase.auth().signOut().then(() =>alert('Logged out') ).catch((error)=>alert('Error'))

    }
  },

  computed:{

    currentUser(){

      return  this.$store.getters.getCurrentUser
    }
  }
}

</script>



<style scoped>



</style>

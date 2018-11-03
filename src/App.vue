<template>
  <div id="app">

    <Header/>

    <router-view/>



    <Footer/>

  </div>
</template>

<script>
import Home from '@/components/Home'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import  {dbMenuRef} from './firebaseConfig'
import  {dbOrdersRef} from './firebaseConfig'

export default {
  name: 'App',
  components:{
    Home:Home,
    Header:Header,
    Footer:Footer

  },

  created(){

    this.$store.dispatch('setMenuRef', dbMenuRef)
   this.$store.dispatch('setOrdersRef', dbOrdersRef)

  }
}
</script>

<style>
#app {

}
</style>

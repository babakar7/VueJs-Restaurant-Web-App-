<template>


<header >




<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link to="/"><a class="navbar-brand ml-5">Pizza Planet</a></router-link>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ">


      <li class="nav-item">
      <router-link to="/Menu">  <a class="nav-link" href="#">Menu</a> </router-link>
      </li>


      <li class="nav-item ">
      <router-link to="/Admin">  <a class="nav-link" href="#">Admin</a> </router-link>
      </li>


    </ul>


  </div>
</nav>


</header>

</template>




<script>

export default {

name:"Header",
  data(){

    return {

    }
  }
}

</script>


<style scoped>
nav{
  width:100%;
}

header{
}

</style>

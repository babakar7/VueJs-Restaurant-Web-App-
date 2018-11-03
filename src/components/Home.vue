<template>


  <div class="container" id="home-container">

    <div class="text text-center">




      <h1 id="tag1">   Welcome to Pizza Planet </h1>

      <h2 id="tag2"> Feeling Hungry? </h2>

    <router-link to="/menu"> <button id="cta" class="btn btn-success"> Order now </button></router-link> 



    </div>

  </div>



</div>



</template>

<script>

export default {
  name: 'Home',
  components:{


  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.text{
color:white;
position:absolute;
left: 0;
right: 0;
    top:0;
    bottom:0;
margin: auto;
width:100%;
height:150px;
}

#home-container{
position:relative;
background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url('../assets/pizza.jpg');
background-size:cover;
background-position:center center;
height:80vh;
}
</style>

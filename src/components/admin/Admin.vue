<template>

<div class="container admin">



<section v-show="this.$store.state.currentUser">

  <div class="row add">


    <div class="col-md-6 col-sm-12">


<h5> Add a new pizza</h5>

    <form v-on:submit.prevent="">

      <div class="form-group">

      <label for="name"> Name: </label>
     <input id="name" type="text" v-model="name" required />
   </div>



   <span> Option 1</span>

   <div class="form-group">

     <label for="size"> Size: </label>

     <input  id="size" type="text" v-model="size" required/>

</div>

     <div class="form-group">

     <label for="price"> Price: </label>

     <input id="price" type="number" v-model.number="price"  required/>

    </div>

    <span> Option 2</span>

    <div class="form-group">

      <label for="size"> Size: </label>

      <input  id="size2" type="text" v-model="size2" required/>

    </div>

      <div class="form-group">

      <label for="price"> Price: </label>

      <input id="price2" type="number" v-model.number="price2"  required/>

     </div>

     <div>

       <p style="color:red" v-show="feedback">
         {{feedback}}
       </p>

     <button type=button class="danger" v-on:click="addPizza"> Submit </button>

   </div>

    </form>



    </div>



    <div class="col-md-6 col-sm-12">

      <h5> Current Menu</h5>




      <table class="table table-hover">

        <thead>

          <tr class="table-danger">

            <th>
              Item
            </th>

            <th>

              Remove

            </th>


          </tr>

        </thead>


        <tbody >



          <tr v-for="item in menuItems" v-bind:key="item['.key']">

            <td>
              {{item.name}}

            </td>


            <td>

              <button class="btn btn-sm btn-outline-danger" v-on:click="deleteItem(item['.key'])">x</button>
            </td>


          </tr>
        </tbody>


      </table>






  </div>
</div>



<div class="row">

<h5> Current Orders </h5>



<table class="table table-hover">

  <thead>

    <tr class="table-danger">

      <th>
        Item
      </th>

      <th>

        Size

      </th>


      <th>

        Quantity

      </th>

      <th>

        Price

      </th>


    </tr>

  </thead>


  <tbody v-for="(item,index) in orderlist" v-bind:key="item['.key']">


    <tr>
      <th>
        Order Number: {{index + 1}}
        <button class="btn btn-outline-danger" v-on:click="removeOrder(item['.key'])">x</button>
      </th>
    </tr>

    <tr v-for="el in item['.value']">

      <td>

       {{el.name}}

      </td>


      <td>
        {{el.option.size}}



      </td>
      <td>

        {{el.option.qty}}

      </td>
      <td>

        {{el.option.price}}

      </td>


    </tr>
  </tbody>


</table>



</div>

</section>

    <hr />

    <Login/>



    </div>









</template>




<script>

import { dbMenuRef } from '../../firebaseConfig'
import {dbOrdersRef} from '../../firebaseConfig'
import Login from '@/components/admin/Login'

export default{

name: 'Menu',
components:{

  Login:Login
},

  data(){

    return{

      name:null,
      size:null,
      price:null,
      price2:null,
      size2:null,
      newPizzas:[],
      feedback:null,

  }

},

  computed:{

    menuItems(){

      return this.$store.state.menuItems
    },

    orderlist(){

     //console.log(this.$store.state.orderlist)
      return this.$store.state.orderlist
    }
  },

  methods:{
    addPizza(){

        if(this.price > 0 ) {

            let pizza={name:this.name, options:[]}

            pizza.options.push({size:this.size, price:this.price})
            pizza.options.push({size:this.size2, price:this.price2})

            console.log(pizza)

            this.newPizzas.push(pizza)


            this.name = null

            this.size = null

            this.price = null

            this.size2 = null

            this.price2 = null

            dbMenuRef.push(pizza)

        }else{

          this.feedback="You must enter a positive price"
        }
    },

    deleteItem(key){

      // child methods allows you to select an item in the database
        dbMenuRef.child(key).remove()
    },

    removeOrder(key){

      dbOrdersRef.child(key).remove()
    }
  }


}
</script>

<style scoped>

label{
  display:block;
}

span{
  font-weight:bold;
}

.add{
  margin-bottom:50px;
  margin-top:50px;

}

</style>

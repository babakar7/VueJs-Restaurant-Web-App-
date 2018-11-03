<template>


  <div class="container order-details">



    <div class="row">
      <div class="col-md-6 col-sm-12">


        <table class="table table-hover">

          <thead>

            <tr class="table-primary">

              <th>
                Size
              </th>

              <th>

                Price

              </th>

              <th>
                Add  to Basket

              </th>

            </tr>

          </thead>


          <tbody class="menu-items" v-for="(item, index) in menuItems" v-bind:key="index">





            <tr>
              <th>

                {{item.name}}

              </th>
            </tr>

            <tr v-for="option in item.options">

              <td>
                {{option.size}}
              </td>

              <td>
                {{option.price | currency}}

              </td>
              <td>
                 <button class="btn btn-sm btn-outline-success" type="button"
                 v-on:click="addItem($event,option,item.name)">  + </button>
              </td>
            </tr>






          </tbody>


        </table>



      </div>



      <div class="col-md-6 col-sm-12">


        <table class="table table-hover" v-show="sum>0  &&  !orderPlaced">

          <thead>

            <tr class="table-danger">

              <th>
                Quantity
              </th>

              <th>

                Item

              </th>

              <th>
                Total

              </th>

            </tr>

          </thead>


          <tbody v-for="item in order">




            <tr v-show="item.option.qty > 0 ">

              <td>

                <span> {{item.option.qty}}</span>
                <button type="button" class="btn btn-outline-success"
                v-on:click="removeItem($event,item)" :disabled="item.option.qty < 1">-</button>

              </td>

              <td>
                {{item.name}} ({{item.option.size}})

              </td>

              <td>
                {{item.option.price * item.option.qty | currency }}
              </td>

            </tr>
          </tbody>


        </table>


        <div class="order">

      <h4 v-show="sum>0  &&  !orderPlaced"> Order Total : {{sum|currency}}  </h4>

      <button v-show="sum>0 && !orderPlaced" class="btn btn-danger cta" v-on:click="placeOrder">Place order</button>


      <h5 v-show="orderPlaced"> Thanks, Your Order has been placed! </h5>

      </div>


      </div>




    </div>


  </div>









</template>




<script>

import {dbOrdersRef} from '../firebaseConfig'

export default{

name: 'Menu',

  data(){

    return{


    orderPlaced:false

    }

  },

  computed:{

    sum(){

    let sum = 0
    this.$store.state.order.forEach((el) => sum += el.option.qty * el.option.price)
    return sum

  },

  menuItems(){

    return this.$store.getters.getMenuItems
  },


  order(){

    return this.$store.state.order
  }
    },

  methods:{
    addItem(event, option, name){



      this.$store.commit('addItem', {option:option, name:name})


    },


      removeItem(event,item){

          item.option.qty -= 1

      },

      placeOrder(){

        dbOrdersRef.push(this.$store.state.order)
        this.orderPlaced = true


      }
  }


}
</script>

<style scoped>

.cta{
  width:100%;
}

.order-details{
  height:80vh;
  padding-top:40px;
}


</style>

import Vue from 'vue'
import Vuex from 'vuex'
import{firebaseMutations} from 'vuexfire'
import {firebaseAction} from 'vuexfire'


Vue.use(Vuex)


export const store = new Vuex.Store({




  state:{

    menuItems:[],

  order:[],

  currentUser:null,

  orderlist:[]
},

getters:{

  getMenuItems(state){

    return state.menuItems
  },

  getCurrentUser(state){

    return state.currentUser
  }

},

mutations:{

  deleteItem(state, item){


  },

  userStatus(state, user){

    if(user){

      state.currentUser = user.email
    }else{
      state.currentUser = null
    }

  },

  addItem(state, item){

   let existing = state.order.find( (el) => el.name == item.name && el.option.size == item.option.size)

    // item already exists in orders
    if(existing){

        // find it in the array

        existing.option.qty += 1


    }
    // item doesn't exist yet
    else {
      let order = {name:item.name, option:{size:item.option.size, price:item.option.price, qty:1}}


        state.order.push(order)

    }
  },

  ...firebaseMutations


},


actions:{

  setUser(context,user){
    context.commit('userStatus', user)
  },

  setMenuRef:firebaseAction(({ bindFirebaseRef }, { ref }) => {
   // binding will automatically unbind any previously bound ref so you
   // don't need to unbind before binding over an existing bound key
   bindFirebaseRef('menuItems', ref)
   // it is possible to unbind a bound key at any time
 }),

 setOrdersRef:firebaseAction(({ bindFirebaseRef }, { ref }) => {
  // binding will automatically unbind any previously bound ref so you
  // don't need to unbind before binding over an existing bound key
  bindFirebaseRef('orderlist', ref)
  // it is possible to unbind a bound key at any time
})



},


})

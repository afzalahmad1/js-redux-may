import store from "./store.js"; 
import { increment,decrement,reset } from "./actions/CounterActionCreators.js";

// getState()

// inital value 
console.log("initial Value", store.getState())

// subscribe()
store.subscribe(
    () => console.log("updated value", store.getState())
)


// lets do some actions: 
// increment actions: 

store.dispatch(increment(10))
store.dispatch(increment(7))
store.dispatch(decrement(15))
store.dispatch(reset())




// declare all actions 

// for every actions create action crestors 

//  reducer 

// store(store cureent vlaue for your state) 


// work on your App : 

// do some changes in your app.js file 

// imple,emmt those actions =>  whats the new value 

// subscribe
// action creators 

// actions creators are function that return actions

// actions is an obj 
// type property of actions is the name of action

import { INCREMENT, DECREMENT, RESET } from './actionTypes.js';


export const increment = (value) =>{
    return (
    {
        type: INCREMENT,
        payload: value

    }
    )
}
export const decrement = (value) =>{
    return (
    {
        type: "DECREMENT",
        payload: value
    }
    )
}
export const reset = () =>{
    return (
    {
        type: "RESET"
    }
    )
}
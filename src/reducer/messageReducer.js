import {MESSAGE} from "../action/accountAction.js";

export const defaultState = {
    message: 'Enter city name'
}
export const messageReducer=(state=defaultState, action) =>{
    switch (action.type) {
        case MESSAGE:{
            return {...state,message:action.payload}
        }
        default:
            return state;
    }
}
import {MESSAGE} from "../action/accountAction.js";

export const defaultState = 'Enter city name';
export const messageReducer=(state=defaultState, action) =>{
    switch (action.type) {
        case MESSAGE:{
            return action.payload
        }
        default:
            return state;
    }
}
import {WEATHER} from "../action/accountAction.js";


const defaultState = {
    city: '',
    country: '',
    temp: 0,
    pressure: 0,
    sunset: '',
}

export const weatherReducer=(state = defaultState, action) => {
    switch (action.type) {
        case
        WEATHER: {
            return {...state,weather:action.payload}
        }
        default:
            return state;
    }


}
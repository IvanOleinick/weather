import {weatherReducer} from "./weatherReducer.js";
import {messageReducer} from "./messageReducer.js";
import {combineReducers} from "redux";

export const rootReducer = combineReducers ({
    weather: weatherReducer,
    message:messageReducer,
})
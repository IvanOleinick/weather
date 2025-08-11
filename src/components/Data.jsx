import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {Provider} from "react-redux";
import {store} from "../configuerStore/store.js";


const Data = () => {

    return (
        <div>
            <Provider store={store}>
            <Form/>
            <Weather/>
            </Provider>
        </div>
    );
};

export default Data;
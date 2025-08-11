import { useDispatch } from "react-redux";
import { fetchWeather } from "../action/thunkAction.js";

const Form = () => {
    const dispatch = useDispatch();

    const getCity = (e) => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        if (!city) return;
        dispatch(fetchWeather(city));
    };

    return (
        <form onSubmit={getCity}>
            <input name="city" type="text" placeholder="City name" />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;

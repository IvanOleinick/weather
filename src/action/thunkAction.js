import { WEATHER, messageAction } from "./accountAction.js";
import { api_key, base_url } from "../utils/constants.js";

export const newWeatherAction = (weather) => ({
    type: WEATHER,
    payload: weather,
});

export const fetchWeather = (city) => {
    return (dispatch) => {
        dispatch(messageAction("Pending"));

        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then((res) => res.json())
            .then((data) => {
                dispatch(
                    newWeatherAction({
                        country: data.sys.country,
                        city: data.name,
                        temp: data.main.temp,
                        pressure: data.main.pressure,
                        sunset: new Date(data.sys.sunset * 1000).toLocaleString(),
                    })
                );
                dispatch(messageAction(""));
            })
            .catch(() => dispatch(messageAction("Failed to fetch weather")));
    };
};

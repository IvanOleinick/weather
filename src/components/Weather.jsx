import { useSelector } from "react-redux";

const Weather = () => {
    const message = useSelector((state) => state.message);
    const weather = useSelector((state) => state.weather);

    if (message) return <div>{message}</div>;

    return (
        <div className="info-weather">
            <p>Location: {weather.country}, {weather.city}</p>
            <p>Temp: {weather.temp}</p>
            <p>Pressure: {weather.pressure}</p>
            <p>Sunset: {weather.sunset}</p>
        </div>
    );
};

export default Weather;

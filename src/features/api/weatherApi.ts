import type {WeatherInfoResponse} from "../../utils/types";
import { base_url, api_key } from "../../utils/constants.ts";
import {createApi} from "@reduxjs/toolkit/query/react";
import {fetchBaseQuery} from "@reduxjs/toolkit/query";


export const weatherApi = createApi({
    reducerPath: "weatherApi",
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: builder => ({
       getWeatherByCity:builder.query<WeatherInfoResponse,string>({
           query: (city: string) => ({
               url: `?q=${city}&appid=${api_key}&units=metric`,
           }),
       })
    }),
})

export const { useGetWeatherByCityQuery } = weatherApi;


// export const fetchWeather = createAsyncThunk<WeatherInfo, string>(
//     "weather/fetchByCity",
//     async (city: string) => {
//         if (!city?.trim()) {
//             throw new Error("City is required");
//         }
//
//         const response = await fetch(
//             `${base_url}?q=${city}&appid=${api_key}&units=metric`
//         );
//
//         if (response.status === 404) {
//             throw new Error("Enter correct city name");
//         }
//         if (!response.ok) {
//             throw new Error("Something went wrong");
//         }
//
//         const data = await response.json();
//
//         return {
//             country: data.sys.country,
//             city: data.name,
//             temp: data.main.temp,
//             pressure: data.main.pressure,
//             sunset: new Date(data.sys.sunset * 1000).toLocaleString(),
//         };
//     }
// );

import {createApi} from "@reduxjs/toolkit/query/react";
import {fetchBaseQuery} from "@reduxjs/toolkit/query";
import {api_key, base_url} from "../../utils/constants.ts";
import type {WeatherInfo, WeatherInfoResponse} from "../../utils/types";

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    refetchOnFocus:true,
    // refetchOnMountOrArgChange:true,
    endpoints: builder => ({
        getWeatherByCity: builder.query<WeatherInfo, string>({
            query: city => `?q=${city}&appid=${api_key}&units=metric`,
            keepUnusedDataFor:10,
            transformResponse: (data: WeatherInfoResponse) : WeatherInfo => ({
                country: data.sys.country,
                city: data.name,
                temp:data.main.temp,
                pressure: data.main.pressure,
                sunset: new Date(data.sys.sunset * 1000).toLocaleDateString()
            })
        })
    }),
});

export const {useGetWeatherByCityQuery} = weatherApi;
export interface WeatherInfo {
    country: string;
    city: string;
    pressure: number;
    temp: number;
    sunset: string;


}

export type WeatherInfoResponse = {
    name: string,
    main: {
        temp: number,
        pressure: number,
    },
    sys: {
        sunset: number,
        country: string,
    },

}
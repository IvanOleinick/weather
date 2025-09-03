import city from "../features/city/citySlice";

import {configureStore} from "@reduxjs/toolkit";
import {weatherApi} from "../features/api/weatherApi.ts";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
        reducer: {
            city,
            [weatherApi.reducerPath]: weatherApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(weatherApi.middleware),
    }
)
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

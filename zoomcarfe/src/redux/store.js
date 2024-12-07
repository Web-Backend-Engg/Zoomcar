import { configureStore } from "@reduxjs/toolkit"
import carsReducer from './reducers/carsReducer';

const store = configureStore({
    reducer: {
        cars: carsReducer
    }
})

export default store;
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cars: ["chevy"]
}

export const carsReducer = createSlice({
    name: 'cars',
    initialState,
    reducers: {

    }
}); 

export default carsReducer.reducer
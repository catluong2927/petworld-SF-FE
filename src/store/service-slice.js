import {createSlice} from "@reduxjs/toolkit";

export const serviceSlice = createSlice({
    name: 'service-slice',
    initialState: { },
    reducers: {
        increment(state) {},
    }
});

export const serviceAction = serviceSlice.actions;
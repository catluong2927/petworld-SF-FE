import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: {
            userDetail: null,
            isFetching: false,
            error: false
        },
    },
    reducers: {
        getUserStart: (state) => {
            state.users.isFetching = true;
        },
        getUserSuccess: (state, action) => {
            state.users.isFetching = false;
            state.users.userDetail = action.payload;
            state.users.error = false
        },
        getUserFail: (state) => {
            state.users.isFetching = false;
            state.users.error = true
        },
    }
})

export const {
    getUserStart,
    getUserSuccess,
    getUserFail,
} = userSlice.actions;
export default userSlice.reducer;

import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: {
            userDetail: null,
            isFetching: false,
            error: false
        },
        password: {
            success: '',
            isFetching: false,
            error: false
        }
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
        editPassStart: (state) => {
            state.password.isFetching = true;
        },
        editPassSuccess: (state, action) => {
            state.password.isFetching = false;
            state.password.success = action.payload;
            state.password.error = false
        },
        editPassFail: (state) => {
            state.password.isFetching = false;
            state.password.error = true
        },
    }
})

export const {
    getUserStart,
    getUserSuccess,
    getUserFail,
    editPassStart,
    editPassSuccess,
    editPassFail,
} = userSlice.actions;
export default userSlice.reducer;

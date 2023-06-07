import {createSlice} from "@reduxjs/toolkit";
const authSlice = createSlice({
    name: "auth",
    initialState:{
        login: {
            currentUser: null,
            isFetching: false,
            error: false,
        },
        register: {
            isFetching: false,
            error: false,
            success: false,
            data: ''
        },
        logout:{
            isFetching:false,
            error: false
        }
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false
        },
        loginFail: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = null;
            state.login.error = true
        },
        registerStart: (state) => {
            state.register.isFetching = true;
        },
        registerSuccess: (state) => {
            state.register.isFetching = false;
            state.register.error = false;
            state.register.success = true;
        },
        registerFail: (state, action) => {
            state.register.isFetching = false;
            state.register.error = true;
            state.register.success = false;
            state.register.data = action.payload;
        },
        logoutStart: (state) => {
            state.logout.isFetching = true;
        },
        logoutSuccess: (state, action) => {
            state.logout.isFetching = false;
            state.login.currentUser = null;
            state.logout.error = false;
        },
        logoutFail: (state) => {
            state.logout.isFetching = false;
            state.logout.error = true
        },
    },

})
export const {
    loginStart,
    loginSuccess,
    loginFail,
    registerStart,
    registerSuccess,
    registerFail,
    logoutStart,
    logoutSuccess,
    logoutFail,

} = authSlice.actions;

export default authSlice.reducer;

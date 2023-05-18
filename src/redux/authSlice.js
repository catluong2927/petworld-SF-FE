import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    login: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    register: {
        isFetching: false,
        error: false,
        success: false,
        data: ''
    },
}

const authSlice = createSlice({
    name: "kakashi",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false
        },
        loginFail: (state) => {
            state.login.isFetching = false;
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
        }
    },

})
export const {
    loginStart,
    loginSuccess,
    loginFail,
    registerStart,
    registerSuccess,
    registerFail
} = authSlice.actions;

export default authSlice.reducer;
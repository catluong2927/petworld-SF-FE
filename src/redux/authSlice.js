import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {browserHistory} from "./apiRequest";

const initialState = {
    login: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    register:{
        isFetching:false,
        error:false,
        success: false
    },
    registerError:false
}

export const signUpUser = async (data, dispatch, navigate, toast) => {
    const LOGIN_API = process.env.REACT_APP_FETCH_API;
    dispatch(registerStart());
    try {
        const res = await axios.post(`${LOGIN_API}/users`, data);
        dispatch(registerSuccess(res.data));
        toast.current.show(
            {severity: 'success', summary: 'Success', detail: 'Create account successfully', life: 1000})
        setTimeout(() => {
            browserHistory.push(`${LOGIN_API}/auth/login`)
        }, 1000);

    } catch (err) {
        dispatch(registerFail());
        console.log("registerError: " + initialState.registerError);
        const errormess = err.response.data
        toast.current.show(
            {severity: 'error', summary: 'Error', detail: 'Create account fail', life: 1500})
    }
}

const authSlice = createSlice({
    name: "auth",
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
            state.register.success =true;
        },
        registerFail: (state) => {
            state.register.isFetching = false;
            state.register.error = true;
            state.register.success =false;
            state.registerError = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerFail.pending, (state, action) => {
                state.success = false;
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchStaffList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
                state.success = false;
            })
            .addCase(fetchStaffList.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = false;
            })
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

export const selectRegisterError = (state) => state.registerError;
export default authSlice.reducer;
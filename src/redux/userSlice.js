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
        },
        update: {
            success: '',
            isFetching: false,
            error: false
        },
        image:{
            isUpdated: '',
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
        updateUserStart: (state) => {
            state.update.isFetching = true;
        },
        updateUserSuccess: (state, action) => {
            state.update.isFetching = false;
            state.update.userDetail = action.payload;
            state.update.error = false
        },
        updateUserFail: (state) => {
            state.update.isFetching = false;
            state.update.error = true
        },
        updateImageStart: (state) => {
            state.image.isFetching = true;
        },
        updateImageSuccess: (state,action) => {
            state.image.isFetching = false;
            state.image.isUpdated = action.payload;
            state.image.error = false
        },
        updateImageFail: (state) => {
            state.image.isFetching = false;
            state.image.isUpdated = '';
            state.image.error = true;
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
    updateUserStart,
    updateUserSuccess,
    updateUserFail,
    updateImageStart,
    updateImageSuccess,
    updateImageFail
} = userSlice.actions;
export default userSlice.reducer;

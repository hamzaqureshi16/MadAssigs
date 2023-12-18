import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Authorized: false,
    role: null,
    User: {
        username: null,
        registration: null,
    },
};

const AuthSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.Authorized = true;
            state.role = action.payload.role;
            state.User.username = action.payload.username;
            state.User.registration = action.payload.registration;
        },
        logout: (state) => {
            state.Authorized = false;
            state.role = null;
            state.User.username = null;
            state.User.registration = null;
        },
    },
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;


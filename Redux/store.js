import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Slices/AuthSlice";


export default configureStore({
    reducer: {
        Auth: AuthSlice,
    },
});


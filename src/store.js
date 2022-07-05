import { configureStore } from "@reduxjs/toolkit";
import allJobReducer from "./features/allJobs/allJobSlice";
import jobReducer from "./features/job/jobSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        job: jobReducer,
        allJobs: allJobReducer,

    }
})
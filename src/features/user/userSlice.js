import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from "../../utils/localStorage";
import { clearStoreThunk, loginUserThunk, registerUserThunk, updateUserThunk } from "./userThunk";

const initialState = {
    isLoading: false,
    isSideBarOpen: false,
    user: getUserFromLocalStorage()
};


export const registerUser = createAsyncThunk('user/registerUser', async (user, thunkAPI) => {
    return registerUserThunk('/auth/register', user, thunkAPI)
});


export const loginUser = createAsyncThunk('user/loginUser', async (user, thunkAPI) => {
    return loginUserThunk('/auth/login', user, thunkAPI)
});


export const updateUser = createAsyncThunk('user/updateUser', async (user, thunkAPI) => {
    return updateUserThunk('/auth/updateUser', user, thunkAPI)
});


export const clearStore = createAsyncThunk('user/clearStore', clearStoreThunk);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSideBarOpen = !state.isSideBarOpen;
        },
        logoutUser: (state, { payload }) => {
            state.user = null;
            state.isSideBarOpen = false;
            removeUserFromLocalStorage();
            if (payload) {
                toast.success(payload);
            }
        }
    },

    extraReducers: {
        [updateUser.pending]: (state) => {
            state.isLoading = true;
        },
        [updateUser.fulfilled]: (state, { payload }) => {
            const { user } = payload;
            state.isLoading = false;
            state.user = user;
            addUserToLocalStorage(user);
            toast.success(`User updated`);
        },
        [updateUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.users = null;
            toast.error(payload);
        },
        [registerUser.pending]: (state) => { state.isLoading = true; },
        [registerUser.fulfilled]: (state, { payload }) => {
            const { user } = payload;
            state.isLoading = false;
            state.user = user;
            addUserToLocalStorage(user);
            toast.success(`Hello there ${user.name}`);
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.users = null;
            toast.error(payload);
        },
        [loginUser.pending]: (state) => { state.isLoading = true; },
        [loginUser.fulfilled]: (state, { payload }) => {
            const { user } = payload;
            state.isLoading = false;
            state.user = user;
            addUserToLocalStorage(user);
            toast.success(`Welcome ${user.name}`);
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.users = null;
            toast.error(payload);
        },
        [clearStore.rejected]: () => {
            toast.error('There was an error');
        },
    }
});

export const { toggleSidebar, logoutUser } = userSlice.actions
export default userSlice.reducer;
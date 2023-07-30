import { createSlice } from "@reduxjs/toolkit";
import { logIn } from "../actions/auth";
type AuthState = {
    user: Object,
    isloading: boolean,
    error: string
}
const initialState = {
    user: {},
    isloading: false,
    error: ""
} as AuthState;
const AuthReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(logIn.pending, (state) => {
                state.user = {};
                state.isloading = false;
                state.error = "";

            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isloading = false;
                state.error = "";
            })
            .addCase(logIn.rejected, (state, action) => {
                state.user = null;
                state.isloading = false;
                state.error = "";
            })
    }
})
export default AuthReducer.reducer
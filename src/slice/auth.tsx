import { createSlice } from "@reduxjs/toolkit";
import { logIn, Signup } from "../actions/auth";

type AuthState = {
    user: Object,
    isloading: boolean,
    error: string
}
const initialState = {
    user: [],
    isloading: false,
    error: ""
} as any;
const AuthReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(logIn.pending, (state) => {
                state.user = {};
                state.isloading = true;
                state.error = "";
            })
            .addCase(logIn.fulfilled, (state: any, action) => {
                state.user = action.payload;
                state.isloading = false;
            })
            .addCase(logIn.rejected, (state: any, action) => {
                state.user = null;
                state.isloading = false;
                state.error = "";
            });
        builder
            //signup
            .addCase(Signup.pending, (state) => {
                state.user = {};
                state.isloading = true;
                state.error = "";

            })
            .addCase(Signup.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isloading = false;
                state.error = "";


            })
            .addCase(Signup.rejected, (state: any, action) => {
                state.user = null;
                state.isloading = false;
                state.error = "";
            })
    }
})
export default AuthReducer.reducer
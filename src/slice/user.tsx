import { createSlice } from "@reduxjs/toolkit"
import { GetAllPro, fetchProduct } from "../actions/product"
import { fetchUser } from "../actions/user"

const initialState = {
    users: [],

    isloading: false,
    error: ""
}
const UserReducer = createSlice({
    name: "users",
    initialState,
    reducers: {},

    extraReducers(builder) {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.isloading = true
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                console.log(action);
                state.isloading = false
                state.users = action.payload
            })
        // builder
        //     .addCase(GetAllPro.pending, (state) => {
        //         state.isloading = true
        //     })
        //     .addCase(GetAllPro.fulfilled, (state, action) => {
        //         console.log(action);
        //         state.isloading = false
        //         state.currentPage = action.payload.total
        //         state.users = action.payload.data
        //     })

    },
})


export default UserReducer.reducer
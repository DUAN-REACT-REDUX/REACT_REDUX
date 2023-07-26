
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import ProductReducer from "../slice/product";
import CategoryReducer from "../slice/category";
import UserReducer from "../slice/user"
const store = configureStore({
    reducer: {
        products: ProductReducer,
        category: CategoryReducer,
        users: UserReducer
        // cart: cartReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
export default store;

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import ProductReducer from "../slice/product";
import CategoryReducer from "../slice/category";

const store = configureStore({
    reducer: {
        products: ProductReducer,
        category: CategoryReducer,
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
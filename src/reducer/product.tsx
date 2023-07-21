import { produce } from "immer"

const initialState = {
    products: [],
    isloading: false,
    error: ""
}
const ProductReducer = (state = initialState, action: any) => {
    return produce(state, (drafState: any) => {
        switch (action.type) {
            case "product/fetch":
                drafState.products = action.payload
                return
            case "product/fetching":
                drafState.isloading = true
                return
            case "product/fetchsuccess":
                drafState.isloading = false
                return
            case "product/fetcherror":
                drafState.error = action.payload
                return
            default:
                return state
        }
    })
}

export default ProductReducer
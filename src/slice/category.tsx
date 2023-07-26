import { produce } from "immer"

const initialState = {
    categories: [],
    isloadingCat: false,
    errorCat: ""
}
const CategoryReducer = (state = initialState, action: any) => {
    return produce(state, (drafState: any) => {
        switch (action.type) {
            //FETCH
            case "cat/fetch":
                drafState.categories = action.payload
                return
            case "cat/fetching":
                drafState.isloading = true
                return
            case "cat/fetchsuccess":
                drafState.isloading = false
                return
            case "cat/fetcherror":
                drafState.error = action.payload
                return

            //GETONE
            case "cat/getone":
                drafState.categories = action.payload
                return



            default:
                return state

        }
    })
}

export default CategoryReducer
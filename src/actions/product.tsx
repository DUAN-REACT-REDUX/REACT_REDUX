import { instance } from "../api/instance"
import { pause } from "../utils/pause"


export const fetchProduct = () => async (dispatch: any) => {
    dispatch({ type: "product/fetching" })
    try {
        await pause(3000)
        const { data } = await instance.get('products')
        console.log(data);
        dispatch({ type: "product/fetch", payload: data.data })
    } catch (err: any) {
        dispatch({ type: "product/fetcherror", payload: err.message })
    } finally {
        dispatch({ type: "product/fetchsuccess" })
    }
}
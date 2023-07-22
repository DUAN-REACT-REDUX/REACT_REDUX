import { instance } from "../api/instance"
import { pause } from "../utils/pause"


export const fetchProduct = () => async (dispatch: any) => {
    dispatch({ type: "product/fetching" })
    try {
        await pause(3000)
        const { data } = await instance.get('products?_sort=price&_page=1&_order=desc&_limit=5')
        console.log(data);
        dispatch({ type: "product/fetch", payload: data })
    } catch (err: any) {
        dispatch({ type: "product/fetcherror", payload: err.message })
    } finally {
        dispatch({ type: "product/fetchsuccess" })
    }
}
export const GetAllPro = (total:any) => async (dispatch: any) => {
  
        const { data } = await instance.get(`products?_sort=price&_page=${total}&_order=desc&_limit=5`)
        dispatch({ type: "product/fetch", payload: data })
 
}
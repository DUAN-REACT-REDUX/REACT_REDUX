import { instance } from "../api/instance"
import { pause } from "../utils/pause"

export const fetchCat = () => async (dispatch: any) => {
    dispatch({ type: "cat/fetching" })
    try {
        await pause(3000)
        const { data } = await instance.get('categories')
        dispatch({ type: "cat/fetch", payload: data.data })
    } catch (err: any) {
        dispatch({ type: "cat/fetcherror", payload: err.message })
    } finally {
        dispatch({ type: "cat/fetchsuccess" })
    }
}
export const getOneCat = (id: any) => async (dispatch: any) => {
    dispatch({ type: "cat/getoneing" })
    try {
        await pause(2000)
        const { data } = await instance.get(`categories/${id}`)
        dispatch({ type: "cat/getone", payload: data.data })
    } catch (err: any) {
        dispatch({ type: "cat/getoneerror", payload: err.message })
    } finally {
        dispatch({ type: "cat/getonesuccess" })
    }
}
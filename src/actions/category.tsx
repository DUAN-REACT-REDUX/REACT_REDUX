import { createAsyncThunk } from "@reduxjs/toolkit"
import { instance } from "../api/instance"
import { pause } from "../utils/pause"

export const fetchCat = createAsyncThunk("categories/fetch", async () => {
    await pause(2000);
    const { data } = await instance.get("/categories"); // Corrected the API endpoint to "/categories"
    return data;
});

export const getAllCategory = createAsyncThunk(
    "category",
    async (page: number) => {
        const { data } = await instance.get(`/categories?page=${page}`); // Corrected the API endpoint to include the page number
        return data;
    }
);
// export const getOneCat = (id: any) => async (dispatch: any) => {
//     dispatch({ type: "cat/getoneing" })
//     try {
//         await pause(2000)
//         const { data } = await instance.get(`categories/${id}`)
//         dispatch({ type: "cat/getone", payload: data.data })
//         return
//     } catch (err: any) {
//         dispatch({ type: "cat/getoneerror", payload: err.message })
//     } finally {
//         dispatch({ type: "cat/getonesuccess" })
//     }
// }
export const getOneCat = createAsyncThunk("categories/getone", async (id: any) => {
    const { data } = await instance.get(`categories/${id}`)
    return data.data
})
export const AddCategory = createAsyncThunk(
    "categories/add",
    async (cat: any) => {
        // await pause(500)
        const data = await instance.post(
            '/categories/add', cat
        );
        return data;
    }
);
export const DeleteCategory = createAsyncThunk(
    "categories/delete",
    async (data: any) => {
        console.log(data);

        try {
            await instance.delete(`/categories/${data.idcat}`, {
                headers: {
                    Authorization: `Bearer ${data.token}`,
                },
            });
            return data.idcat;
        } catch (error) {
            console.log(error);
        }
    }
);
export const GetproductByCategory = createAsyncThunk(
    "categories",
    async (id: any) => {
        // await pause(500)
        const { data } = await instance.get(
            `/categories/${id}/product`
        );
        return data.products;
    }
);
export const UpdateCategoriesAction = createAsyncThunk(
    "categories/update",
    async (categories: any) => {
        try {
            console.log(categories);
            const { data } = await instance.put(
                `/categories/${categories.id}/update`,
                categories
            );
            return data;
        } catch (error) {
            console.error("Lỗi khi cập nhật sản phẩm:", error);
            throw error;
        }
    }
);

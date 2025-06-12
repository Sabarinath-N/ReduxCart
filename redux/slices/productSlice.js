import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProductsThunk = createAsyncThunk("products/fetchProductsThunk", async () => {
    const response = await axios.get('https://dummyjson.com/products')
    sessionStorage.setItem("apiData", JSON.stringify(response.data.products))
    return response
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
        error: "",
        productDupe: [],
        productsPerPage: 10,
        currentPage: 1
    },
    reducers: {
        search(state, action) {
            // if(action.payload.length>0){
            state.products = state.productDupe.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()))
            // }
        },
        previousPage(state) {
            state.currentPage -= 1
        },
        nextPage(state) {
            state.currentPage += 1
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductsThunk.fulfilled, (state, action) => {
            state.products = action.payload.data.products
            state.productDupe = action.payload.data.products
            state.loading = false
            state.error = ""
        }),
            builder.addCase(fetchProductsThunk.pending, (state, action) => {
                state.products = []
                state.loading = true
                state.error = ""
            }),
            builder.addCase(fetchProductsThunk.rejected, (state, action) => {
                state.products = []
                state.loading = false
                state.error = "API Call Failed"
            })
    }
})


export const { search , previousPage , nextPage } = productSlice.actions
export default productSlice.reducer


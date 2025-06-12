import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice=createSlice({
    name:"wishlist",
    initialState:{
        wishlist:[]
    },
    reducers:{
        addToWishlist(state,action){
            const existing=state.wishlist.find(item=>item.id==action.payload.id)
            if(existing){
                alert("Product Already Added to Wishlist")
            }
            else{
                state.wishlist.push(action.payload)
                alert("Product Added to Wishlish")
            }
        },
        removefromWishlist(state,action){
            state.wishlist=state.wishlist.filter(item=>item.id!=action.payload)
            // alert(" Item Removed ")
        }
    }
})


export const{ addToWishlist,removefromWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
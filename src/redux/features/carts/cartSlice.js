import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // add to cart

        addToCart: ( state, action )=>{
            //   console.log(action.payload)
            const existingProduct = state.find((product) => product.productId === action.payload.id)
            if(existingProduct){
               return alert("Product Already in Cart")
            } else {
                state.push({
                    ...action.payload,
                    id: Date.now(),
                    quantity: 1,
                    productId: action.payload.id,
                })
            }

        },
        
        // increment quantity 


        // decrement quantity


        // remove from cart

    }
})


export const { addToCart} = cartSlice.actions;

export default cartSlice.reducer;
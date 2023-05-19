import {createSlice} from "@reduxjs/toolkit";
import {sentRequest} from "../pages/ServicePackage";
let  initialCart;
const URL_CART = 'cart';
const res = sentRequest( URL_CART);
res.then( data => {
    initialCart = data;
    }
);
export const cartSlice = createSlice(
    {
        name: 'cart',
        initialState: initialCart,
        reducers: {
            addNewItems(state, action){

            },
            deleteItems (state, action){

            },
            increment(state, action){

            },
            decrement(state, action){

            }
        }
    }
);
export
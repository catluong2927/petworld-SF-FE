import { createSlice } from "@reduxjs/toolkit";
import { sentRequest } from "../pages/ServicePackage";
import {POST, PUT, URL_ORDER} from "../utilities/constantVariable";



const OrderSlice = createSlice({
    name: "order",
    initialState: {
        products: [],
    },
    reducers: {
        getAllOrders(state, action) {
            state.products = []
            const newOrders = action.payload;
            newOrders.forEach(order => {
                state.products.push(order);
            })

        },
        cancelOrder(state, action) {
            const editOrder = action.payload;
            const url = URL_ORDER + '/' + editOrder.id;
            state.products = state.products.map(order => {
                if (order.id === editOrder.id) {
                    return {
                        ...order,
                        status: editOrder.status,
                    };
                }
                return order;
            });
            sentRequest(url, PUT, editOrder, action.payload.token);
        },
        increaseOneOrder(state, action) {
            const newOrder = action.payload;
            sentRequest(URL_ORDER, POST, action.payload, action.payload.token);
            state.products.unshift(newOrder);
        },
        deleteAllOrders(state) {
            state.products = []
        }
    },
});

export const {  deleteAllOrders,getAllOrders, increaseOneOrder, cancelOrder } = OrderSlice.actions;
export default OrderSlice.reducer;

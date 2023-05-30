import {createSlice} from "@reduxjs/toolkit";
import {sentRequest} from "../pages/ServicePackage";
import {POST, PUT, URL_CART} from "../utilities/constantVariable";
let initialState = {
    items: [],
    cartTotal: 0,
};

const cartInventorySlice = createSlice({
    name: "cartInventory",
    initialState,
    reducers: {
        firstCallApi: (state, action) => {
            const newItems = action.payload;
            newItems.forEach(item => (
                state.items.push(item),
                state.cartTotal += item.price * item.amount)
            )
        },
        addItem: (state, action) => {
            const newItem = action.payload;
            let itemFound = false;
            state.cartTotal = +state.cartTotal + (newItem.amount * newItem.price);

            state.items.forEach(item => {
                if (item.type === newItem.type && item.typeId === newItem.typeId) {
                    item.amount += newItem.amount;
                    item.total += newItem.total;
                    itemFound = true;
                }
            });
            if (!itemFound) {
                state.items.push(newItem);
            }
           const  res = sentRequest(URL_CART, POST, action.payload, action.payload.token)

          },
        deleteItem(state, action) {
            const deleteItem = action.payload;
            console.log(deleteItem)

            state.cartTotal = +state.cartTotal - (deleteItem.price * deleteItem.amount);
            state.items = state.items.filter(item => !(item.typeId === deleteItem.typeId && item.type === deleteItem.type));
            const res =  sentRequest(URL_CART, PUT, action.payload, action.payload.token)

        },
        deleteAllItems(state, action){
          state.items = [];
          state.cartTotal = 0;
        },
        decreaseItemByOne(state, action) {
            const decreaseItem = action.payload;
            state.items.forEach(item => {
                if (item.type === decreaseItem.type && item.typeId === decreaseItem.typeId) {
                    if(item.amount > 1){
                        state.cartTotal = +state.cartTotal - (decreaseItem.price);
                        item.amount = Math.max(1, item.amount - 1);
                        item.total = Math.max(decreaseItem.total, item.total - decreaseItem.total);
                        const res =  sentRequest(URL_CART, PUT, action.payload, action.payload.token);
                    }
                }
            });

        },
        addItemByOne: (state, action) => {
            const existingItem = action.payload;
            let itemFound = false;
            state.cartTotal = +state.cartTotal + (existingItem.price);
            state.items.forEach(item => {
                if (item.type === existingItem.type && item.typeId === existingItem.typeId) {
                    item.amount += 1;
                    item.total += existingItem.price;
                    itemFound = true;
                }
            });
            const res =  sentRequest(URL_CART, POST, action.payload, action.payload.token);
        }

        }
});
export const { addItem, deleteAllItems, firstCallApi, decreaseItemByOne, deleteItem, addItemByOne} = cartInventorySlice.actions;
export default cartInventorySlice.reducer;
import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    increaseItem(state, action) {
      state.map((e) => {
        if (e.id === action.payload) e.count += 1;
      });
    },
    addToCart(state, action){
      state.push(action.payload);
      console.log(action.payload);
    }
  },
});

export let { increaseItem, addToCart } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});

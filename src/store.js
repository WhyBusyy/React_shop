import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    // 숙제 1
    addCount(state, action) {
      state.map((e) => {
        if (e.id === action.payload) e.count += 1;
      });
      // 강의 숙제 1 해설
      // let number = state.findIndex((a) => {
      //   return a.id === action.payload;
      // });
      // state[number].count++;
    },

    // 강의 숙제 2
    addToCart(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
  },
});

export let { addCount, addToCart } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});

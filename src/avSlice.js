import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
      {
        img: "https://cdn.pixabay.com/photo/2022/02/20/02/29/projector-7023604_1280.jpg",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2016/11/14/04/42/techland-1822630_1280.jpg",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2016/01/24/23/03/microphone-1159791_960_720.jpg",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2015/01/08/18/12/white-board-593300_1280.jpg",
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2021/11/27/16/24/guest-relations-6828448_1280.jpg",
        name: "Signage",
        cost: 80,
        quantity: 0,
    },
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if(item){
        item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if(item && item.quantity > 0){
            item.quantity--;
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;

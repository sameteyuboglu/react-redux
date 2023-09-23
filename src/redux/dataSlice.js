import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  keyword: "",
};
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    deleteItem: (state, action) => {
      state.data = [...state.data.filter((x) => x.id != action.payload)];
    },
    updateItem: (state, action) => {
      state.data = state.data.map((x) =>
        x.id == action.payload.id ? action.payload : x
      );
    },
    sortList: (state, action) => {
      state.data = [
        ...state.data.sort((a, b) =>
          action.payload == "asc" ? a.price - b.price : b.price - a.price
        ),
      ];
    },
    searchItem: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const { addItem, deleteItem, updateItem, sortList, searchItem } =
  dataSlice.actions;

export default dataSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: {
      keyword: "",
      sort: ""
    }
  },
  reducers: {
    getSearchData: (initialState, action) => {
      initialState.value = action.payload;
    }
  }
});

export const { getSearchData } = searchSlice.actions;

export default searchSlice.reducer;

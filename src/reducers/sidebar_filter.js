import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "sidebar_search",
  initialState: {
    value: {
      name: "",
      parameter: ""
    }
  },
  reducers: {
    getSidebarSearchData: (initialState, action) => {
      initialState.value = action.payload;
    }
  }
});

export const { getSidebarSearchData } = searchSlice.actions;

export default searchSlice.reducer;

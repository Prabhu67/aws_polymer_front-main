import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "color",
  initialState: {
    value: {
      color: true,
      sidebar: true
    }
  },
  reducers: {
    getColorState: (initialState, action) => {
      initialState.value = action.payload;
    }
  }
});

export const { getColorState } = colorSlice.actions;

export default colorSlice.reducer;

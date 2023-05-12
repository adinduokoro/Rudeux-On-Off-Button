import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "plug",
  initialState: { value: false },
  reducers: {
    toggleSwitch: (state, action) => {
      state.value = !state.value;
    },
  },
});

export default toggleSlice.reducer;
export const { toggleSwitch } = toggleSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
};
const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setShowModal: (state, { payload }) => {
      state.showModal = payload;
    },
  },
});

const { reducer, actions } = systemSlice;

export const { setShowModal } = actions;

export default reducer;
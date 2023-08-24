import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  showProfileModal: false,
};
const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setShowModal: (state, { payload }) => {
      state.showModal = payload;
    },
    setShowProfileModal: (state, { payload }) => {
      state.showProfileModal = payload;
    },
  },
});

const { reducer, actions } = systemSlice;

export const { setShowModal, setShowProfileModal } = actions;

export default reducer;
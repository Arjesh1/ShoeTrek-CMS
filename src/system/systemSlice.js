import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  showProfileModal: false,
  showMessageModal: false,
  showOrderModal: false,
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
    setShowMessageModal: (state, { payload }) => {
      state.showMessageModal = payload;
    },
    setShowOrderModal: (state, { payload }) => {
      state.showOrderModal = payload;
    },
  },
});

const { reducer, actions } = systemSlice;

export const {
  setShowModal,
  setShowProfileModal,
  setShowMessageModal,
  setShowOrderModal,
} = actions;

export default reducer;

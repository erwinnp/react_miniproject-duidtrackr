import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isVisible = true;
    },
    closeModal: (state, action) => {
      state.isVisible = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;

import { createSlice } from '@reduxjs/toolkit'

const editPasswordSlice = createSlice({
  name: 'editPass',
  initialState: {
    isEditable: false,
    selectedIndex: null, // Index of the selected password
  },
  reducers: {
    toggleEdit: (state, action) => {
      state.isEditable = !state.isEditable;
      state.selectedIndex = action.payload ?? null; // Store index or reset
    },
  },
})

export const { toggleEdit } = editPasswordSlice.actions

export default editPasswordSlice.reducer

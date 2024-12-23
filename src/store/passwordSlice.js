import { createSlice } from '@reduxjs/toolkit'


const passwordSlice = createSlice({
  name: 'password',
  initialState:[],
  reducers: {
        addPass : (state ,action)=>{
          const {site,userId,pass} = action.payload
          state.push({site,userId,pass})
        },
        removePass : (state,action)=>{
          const index = action.payload;
          return state.filter((_, i) => i !== index);
        },
        editPassword: (state, action) => {
          const { index, updatedPassword } = action.payload;
          state[index] = updatedPassword; // Update the specific password
        },
        
        removeAll : (state)=>{
          return []
        },
  },
})

export const { addPass, removePass, removeAll, editPasswords, editPassword } = passwordSlice.actions


export default passwordSlice.reducer
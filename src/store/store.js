import { configureStore } from '@reduxjs/toolkit'
import passwordReducer from './passwordSlice'
import editPasswordReducer from './editPasswordSlice'

const store = configureStore({
  reducer: {
    password : passwordReducer,
    editPassword : editPasswordReducer
  },
})

export default store;
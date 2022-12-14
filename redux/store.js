import { configureStore } from '@reduxjs/toolkit'
import contactSliceReducer from './contactSlice'

export const store = configureStore({
  reducer: {
    contacts: contactSliceReducer
  },
})
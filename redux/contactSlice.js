import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: []
}

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {    
    init: (state, action) => {
      state.list = [...action.payload]
    },

    addContact: (state, action) => {
      state.list = [{...action.payload, actionModal: false}, ...state.list]
    },
    removeContact: (state, action) => {
      state.list = state.list.filter(obj => obj.name !== action.payload)
    },
    edit: (state, action) => {
      state.list[action.payload.index] = {
        name: action.payload.name,
        tel: action.payload.tel,
        email: action.payload.email,
        imgUrl: action.payload.imgUrl,
        actionModal: false,
      }
    },
    showModal: (state, action) => {
      state.list[action.payload].actionModal = true;
    },
    closeModal: (state, action) => {
      state.list[action.payload].actionModal = false;
    },
    search: (state, action) => {
      state.list = action.payload
    }
  }
})

export const { addContact, removeContact, edit, init, showModal, closeModal, search } = contactSlice.actions

export default contactSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpenModal: false,
  modalData: {
    nome: '',
    description: '',
    foto: '',
    portion: '',
    preco: 0,
    id: 0
  }
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpenModal = true
      state.modalData = action.payload
    },
    open: (state) => {
      state.isOpenModal = true
    },
    closeModal: (state) => {
      state.isOpenModal = false
    }
  }
})

export default modalSlice.reducer
export const { openModal, open, closeModal } = modalSlice.actions

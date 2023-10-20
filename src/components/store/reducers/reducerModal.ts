import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpenModal: false,
    modalData: {
      nome: '',
      description: '',
      foto: ''
    }
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpenModal = true
      state.modalData = action.payload
    },
    closeModal: (state) => {
      state.isOpenModal = false
      state.modalData = {
        nome: '',
        description: '',
        foto: ''
      }
    }
  }
})

export default modalSlice.reducer
export const { openModal, closeModal } = modalSlice.actions

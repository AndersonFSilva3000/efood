import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpenModal: false,
    modalData: {
      title: '',
      description: ''
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
        title: '',
        description: ''
      }
    }
  }
})

export default modalSlice.reducer
export const { openModal, closeModal } = modalSlice.actions

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type Cardapio = {
  isOpenModal: boolean
  modalData: cardapio | null
}

const initialState: Cardapio = {
  isOpenModal: false,
  modalData: null
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<cardapio>) => {
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

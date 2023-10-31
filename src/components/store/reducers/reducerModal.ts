import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { cardapio } from '../../../pages/Home'

type Cardapio = {
  isOpenModal: boolean
  modalData: cardapio | null
}

const initialState: Cardapio = {
  isOpenModal: false,
  modalData: null
  // {
  //   nome: '',
  //   description: '',
  //   foto: '',
  //   portion: '',
  //   preco: 0,
  //   id: 0
  // }
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

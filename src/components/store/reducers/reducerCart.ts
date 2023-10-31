import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { cardapio } from '../../../pages/Home'

type cartState = {
  // items: {
  //   nome: string
  //   foto: string
  //   preco: number
  //   id: number
  // }[]
  items: cardapio[]
  openCart: boolean
}

const initialState: cartState = {
  items: [],
  openCart: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (
      state,
      action: PayloadAction<cardapio>
      // {
      //   nome: string
      //   foto: string
      //   preco: number
      //   id: number
      // }
    ) => {
      const item = state.items.find((item) => item.nome === action.payload.nome)

      if (!item) {
        state.items.push(action.payload)
      } else {
        alert('Item já existente no carrinho.')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    isOpenCart: (state) => {
      state.openCart = true
    },
    closeCart: (state) => {
      state.openCart = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export default cartSlice.reducer
export const { closeCart, isOpenCart, add, remove, clear } = cartSlice.actions

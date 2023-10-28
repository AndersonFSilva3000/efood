import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type cartState = {
  items: {
    nome: string
    foto: string
    preco: number
    id: number
  }[]
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
      action: PayloadAction<{
        nome: string
        foto: string
        preco: number
        id: number
      }>
    ) => {
      const item = state.items.find((item) => item.nome === action.payload.nome)

      if (!item) {
        state.items.push(action.payload)
      } else {
        alert('Item já existente no carrinho.')
      }
    },
    remove: (state, action: PayloadAction<{ nome: string }>) => {
      state.items = state.items.filter((item) => {
        return item.nome !== action.payload.nome
      })
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

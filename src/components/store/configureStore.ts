import { configureStore } from '@reduxjs/toolkit'

import modalReducer from './reducers/reducerModal'
import cartReducer from './reducers/reducerCart'

import api from '../../service/api'

const store = configureStore({
  reducer: {
    modal: modalReducer,
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>

export default store

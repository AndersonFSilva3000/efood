import React from 'react'

import * as S from './styles'
import 'animate.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../store/configureStore'
import { closeCart } from '../store/reducers/reducerCart'

type Props = {
  children: JSX.Element
}

const CartContainer = ({ children }: Props) => {
  const { openCart } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const close = () => {
    dispatch(closeCart())
  }

  return (
    <S.CartContainer className={openCart ? 'is-open' : ''}>
      <S.Overlay onClick={close} />
      <S.Sidebar className="animate__animated animate__fadeInRight">
        {children}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default CartContainer

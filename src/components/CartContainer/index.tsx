import { useDispatch, useSelector } from 'react-redux'
import 'animate.css'

import { RootReducer } from '../store/configureStore'
import { closeCart } from '../store/reducers/reducerCart'

import * as S from './styles'

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

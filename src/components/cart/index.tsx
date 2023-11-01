import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'animate.css'

import Button from '../Button'
import Checkout from '../Checkout'
import CartContainer from '../CartContainer'

import { remove } from '../store/reducers/reducerCart'
import { RootReducer } from '../store/configureStore'
import { formatPrince, getTotalPrince } from '../../utils'

import * as S from './styles'
import bin from '../../assets/images/lixeira.svg'

const Cart = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [delivery, setDelivery] = React.useState('cart')
  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const switchToDeliveryForm = () => {
    setDelivery('delivery')
  }

  const switchToCart = () => {
    setDelivery('cart')
  }

  return (
    <CartContainer>
      {items.length > 0 ? (
        <div>
          {delivery === 'cart' && (
            <>
              <ul>
                {items.map((item) => (
                  <S.CartProduct key={item.nome}>
                    <img src={item.foto} alt="" />
                    <div>
                      <h4>{item.nome}</h4>
                      <span>{formatPrince(item.preco)}</span>
                    </div>
                    <button onClick={() => removeItem(item.id)}>
                      <img src={bin} alt="Image do icone de lixeira" />
                    </button>
                  </S.CartProduct>
                ))}
              </ul>
              <S.ContainerPrince>
                <p>Valor total</p>
                <p>{formatPrince(getTotalPrince(items))}</p>
              </S.ContainerPrince>
              <Button type="button" onClick={switchToDeliveryForm}>
                Continuar com a entrega
              </Button>
            </>
          )}
          {delivery === 'delivery' && (
            <>
              <Checkout handleClick={switchToCart} />
            </>
          )}
        </div>
      ) : (
        <S.Empty className="empty-cart">
          O carrinho está vazio. Aproveite nossas ofertas e faça um pedido
        </S.Empty>
      )}
    </CartContainer>
  )
}

export default Cart

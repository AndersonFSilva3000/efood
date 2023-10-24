import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import bin from '../../assets/images/lixeira.svg'

import Button from '../Button'

import { closeCart, remove } from '../store/reducers/reducerCart'
import { RootReducer } from '../store/configureStore'
import { formatPrince } from '../../Modal'

const Cart = () => {
  const { openCart, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const close = () => {
    dispatch(closeCart())
  }

  const removeItem = (nome: string) => {
    dispatch(remove({ nome }))
  }

  const getTotalPrince = () => {
    return items.reduce((accumulator, currentValue) => {
      return (accumulator += currentValue.preco!)
    }, 0)
  }

  return (
    <S.CartContainer className={openCart ? 'is-open' : ''}>
      <S.Overlay onClick={close} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartProduct key={item.nome}>
              <img src={item.foto} alt="" />
              <div>
                <h4>{item.nome}</h4>
                <span>{formatPrince(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.nome)}>
                <img src={bin} alt="Image do icone de lixeira" />
              </button>
            </S.CartProduct>
          ))}
        </ul>
        <S.ContainerPrince>
          <p>Valor total</p>
          <p>{formatPrince(getTotalPrince())}</p>
        </S.ContainerPrince>
        <Button type="button">Continuar com a entrega</Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart

import React from 'react'
import { cardapio } from '../../pages/Home'
import Products from '../Products'

import * as S from './styles'

//modal
import Modal from '../../Modal'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../store/configureStore'
import { closeModal } from '../store/reducers/reducerModal'

export type Props = {
  cardapio: cardapio[]
  items?: cardapio
}

const ProductCardapio = ({ cardapio }: Props) => {
  const isModalOpen = useSelector(
    (state: RootReducer) => state.modal.isOpenModal
  )

  const data = useSelector((state: RootReducer) => state.modal.modalData)
  const dispatch = useDispatch()

  const handlecloseModal = () => {
    return dispatch(closeModal())
  }

  return (
    <>
      <S.ContainerMenu className="container">
        <S.Menu>
          {cardapio.map((itens) => (
            <Products
              key={itens.id}
              id={itens.id}
              foto={itens.foto}
              title={itens.nome}
              description={itens.descricao}
              nome={itens.nome}
              portion={itens.porcao}
              prince={itens.preco}
            />
          ))}
        </S.Menu>
      </S.ContainerMenu>

      {isModalOpen && data && data.preco && (
        <Modal
          items={data}
          id={data.id}
          description={data.descricao}
          nome={data.nome}
          portion={data.porcao}
          foto={data.foto}
          prince={data.preco}
          isOpen={isModalOpen}
          handleCloseModal={handlecloseModal}
        />
      )}
    </>
  )
}

export default ProductCardapio

import React from 'react'
import HeaderPerfil from '../../components/HeaderPerfil'
import Banner from '../../components/Banner'

import pizza from '../../assets/images/pizza.png'
import ProductIten from '../../models/ProductIten'
import ProductList from '../../components/ProductList'
import Modal from '../../Modal'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../components/store/configureStore'
import { closeModal } from '../../components/store/reducers/reducerModal'

const list: ProductIten[] = [
  {
    image: pizza,
    title: 'teste 1',
    description: 'teste de descrição',
    id: 1
  },
  {
    image: pizza,
    title: 'teste 2',
    description: 'teste de descrição 2',
    id: 2
  },
  {
    image: pizza,
    title: 'teste 3',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 3
  },
  {
    image: pizza,
    title: 'Hioki Sushi',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 4
  },
  {
    image: pizza,
    title: 'Hioki Sushi',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 5
  },
  {
    image: pizza,
    title: 'Hioki Sushi',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 6
  }
]

const Perfil = () => {
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
      <HeaderPerfil />
      <Banner />
      <ProductList products={list} colunsgrid="perfil" cardback="orange" />
      {isModalOpen && (
        <Modal
          urlModal={pizza}
          isOpen={isModalOpen}
          handleCloseModal={handlecloseModal}
          title={data.title || ''}
          description={data.description}
        />
      )}
    </>
  )
}

export default Perfil

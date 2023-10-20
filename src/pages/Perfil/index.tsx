import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Restaurant } from '../Home'
import Modal from '../../Modal'
import Banner from '../../components/Banner'
import HeaderPerfil from '../../components/HeaderPerfil'
import ProductCardapio from '../../components/ProductCardapio'

import { RootReducer } from '../../components/store/configureStore'
import { closeModal } from '../../components/store/reducers/reducerModal'

const Perfil = () => {
  const [menu, setMenu] = React.useState<Restaurant>()
  const { id } = useParams()

  React.useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((resp) => resp.json())
      .then((resp) => setMenu(resp))
  }, [id])

  const isModalOpen = useSelector(
    (state: RootReducer) => state.modal.isOpenModal
  )

  const data = useSelector((state: RootReducer) => state.modal.modalData)

  const dispatch = useDispatch()

  const handlecloseModal = () => {
    return dispatch(closeModal())
  }

  if (!menu) return <h2>carregando</h2>

  return (
    <>
      <HeaderPerfil />
      <Banner title={menu.titulo} type={menu.tipo} urlPhoto={menu.capa} />

      <ProductCardapio cardapio={menu.cardapio} />

      {isModalOpen && (
        <Modal
          urlModal={data.foto}
          isOpen={isModalOpen}
          handleCloseModal={handlecloseModal}
          title={data.nome || ''}
          description={data.description}
          id={0}
        />
      )}
    </>
  )
}

export default Perfil

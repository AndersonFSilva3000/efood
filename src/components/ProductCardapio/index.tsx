import { useDispatch, useSelector } from 'react-redux'

import Products from '../Products'
import Modal from '../../Modal'

import { RootReducer } from '../store/configureStore'
import { closeModal } from '../store/reducers/reducerModal'

import * as S from './styles'

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

import { useDispatch } from 'react-redux'
import 'animate.css'

import Button from '../components/Button'

import { add, isOpenCart } from '../components/store/reducers/reducerCart'
import { closeModal } from '../components/store/reducers/reducerModal'
import { formatPrince } from '../utils'

import closeImg from '../assets/images/close.svg'

import * as S from './styles'

type Props = {
  items: cardapio
  nome: string
  description: string
  name?: string
  portion?: string
  foto?: string
  isOpen: boolean
  handleCloseModal?: () => void
  prince: number
  id: number
}

const Modal = ({ isOpen, handleCloseModal, items }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(items))
    dispatch(isOpenCart())
    dispatch(closeModal())
  }

  return (
    <S.Modal className={isOpen ? 'visible' : ''}>
      <S.ModalContent className="container animate__animated animate__zoomIn">
        <S.ButtonClose type="button" onClick={handleCloseModal}>
          <img src={closeImg} alt="" />
        </S.ButtonClose>
        <div>
          <img src={`${items.foto}`} alt="" />
        </div>
        <div>
          <h3>{items.nome}</h3>
          <p>{items.descricao}</p>
          <p>{items.porcao}</p>
          <Button onClick={addToCart} type="button">
            Adicionar ao carrinho - {formatPrince(items.preco)}
          </Button>
        </div>
      </S.ModalContent>
      <div className="overlay" onClick={handleCloseModal}></div>
    </S.Modal>
  )
}

export default Modal

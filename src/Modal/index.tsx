import React from 'react'

import * as S from './styles'
import Button from '../components/Button'
import closeImg from '../assets/images/close.svg'

type Props = {
  nome: string
  description: string
  name?: string
  portion?: string
  foto?: string
  isOpen: boolean
  handleCloseModal?: () => void
  prince: number
}

const Modal = ({
  foto,
  isOpen,
  handleCloseModal,
  nome,
  description,
  portion,
  prince
}: Props) => {
  const formatPrince = (prince = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(prince)
  }

  return (
    <S.Modal className={isOpen ? 'visible' : ''}>
      <S.ModalContent className="container">
        <S.ButtonClose type="button" onClick={handleCloseModal}>
          <img src={closeImg} alt="" />
        </S.ButtonClose>
        <div>
          <img src={`${foto}`} alt="" />
        </div>
        <div>
          <h3>{nome}</h3>
          <p>{description}</p>
          <p>{portion}</p>
          <Button type="button">
            Adicionar ao carrinho - {formatPrince(prince)}
          </Button>
        </div>
      </S.ModalContent>
      <div className="overlay" onClick={handleCloseModal}></div>
    </S.Modal>
  )
}

export default Modal

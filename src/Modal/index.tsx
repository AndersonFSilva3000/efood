import React from 'react'

import * as S from './styles'
import Button from '../components/Button'

type Props = {
  title: string
  description: string
  urlModal?: string
  isOpen: boolean
  handleCloseModal?: () => void
}

const Modal = ({
  urlModal,
  isOpen,
  handleCloseModal,
  title,
  description
}: Props) => {
  return (
    <S.Modal className={isOpen ? 'visible' : ''}>
      <S.ModalContent className="container">
        <div>
          <img src={urlModal} alt="" />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Serve: de 2 a 3 pessoas</p>
          <Button type="button" title="Button adicionar ao carrinho">
            Adicionar ao carrinho - R$ 60,90
          </Button>
        </div>
      </S.ModalContent>
      <div className="overlay" onClick={handleCloseModal}></div>
    </S.Modal>
  )
}

export default Modal

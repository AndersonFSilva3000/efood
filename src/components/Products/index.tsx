import React from 'react'

import * as S from './styles'
import Tag from '../Tag'
import Button from '../Button'

import star from '../../assets/images/estrela.png'
import { useDispatch } from 'react-redux'
import { openModal } from '../store/reducers/reducerModal'

export type Props = {
  image?: string
  emphasis?: boolean
  type?: string
  title?: string
  avaliable?: number
  description: string
  id?: number
  foto?: string
  nome?: string
}

const Products = ({
  title,
  avaliable,
  emphasis,
  type,
  description,
  image,
  id,
  foto,
  nome
}: Props) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    const modalInfo = {
      title: title,
      description: description
    }

    dispatch(openModal(modalInfo))
  }

  return (
    <>
      <S.Container>
        <img src={image || foto} alt={title} />
        <S.Infos>
          {emphasis && <Tag>Destaque da semana</Tag>}
          {type && <Tag>{type}</Tag>}
        </S.Infos>
        <S.ContainerProduct>
          <S.ContainerTitle>
            <S.Title>{title || nome}</S.Title>
            {avaliable ? (
              <S.Avaliable>
                <p>{avaliable}</p> <img src={star} alt={title} />
              </S.Avaliable>
            ) : null}
          </S.ContainerTitle>
          <S.Text>{description}</S.Text>

          {avaliable ? (
            <Button
              type="link"
              title="Vá ao menu de produtos"
              to={`/perfil/${id}`}
            >
              Saiba mais
            </Button>
          ) : (
            <Button
              type="button"
              title="Vá ao menu de produtos"
              to="/perfil"
              onClick={handleClick}
            >
              Mais detalhes
            </Button>
          )}
        </S.ContainerProduct>
      </S.Container>
    </>
  )
}

export default Products

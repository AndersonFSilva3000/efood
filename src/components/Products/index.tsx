import React from 'react'

import * as S from './styles'
import Tag from '../Tag'
import Button from '../Button'

import star from '../../assets/images/estrela.png'

export type Props = {
  image: string
  emphasis?: boolean
  type?: string
  title: string
  avaliable?: string
  description: string
  id?: number
}

const Products = ({
  title,
  avaliable,
  emphasis,
  type,
  description,
  image
}: Props) => {
  return (
    <S.Container>
      <img src={image} alt={title} />
      <S.Infos>
        {emphasis && <Tag>Destaque da semana</Tag>}
        {type && <Tag>{type}</Tag>}
      </S.Infos>
      <S.ContainerProduct>
        <S.ContainerTitle>
          <S.Title>{title}</S.Title>
          {avaliable ? (
            <S.Avaliable>
              <p>{avaliable}</p> <img src={star} alt={title} />
            </S.Avaliable>
          ) : null}
        </S.ContainerTitle>
        <S.Text>{description}</S.Text>

        {avaliable ? (
          <Button type="link" title="Vá ao menu de produtos" to="/perfil">
            Saiba mais
          </Button>
        ) : (
          <Button type="button" title="Vá ao menu de produtos" to="/perfil">
            Adicionar ao carrinho
          </Button>
        )}
      </S.ContainerProduct>
    </S.Container>
  )
}

export default Products

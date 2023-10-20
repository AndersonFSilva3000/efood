import React from 'react'
import { Restaurant } from '../../pages/Home'
import Products from '../Products'

import * as S from './styles'

export type Props = {
  cardapio: Restaurant['cardapio']
}

const ProductCardapio = ({ cardapio }: Props) => {
  return (
    <S.ContainerMenu className="container">
      <S.Menu>
        {cardapio.map((itens) => (
          <Products
            key={itens.id}
            id={itens.id}
            foto={itens.foto}
            title={itens.nome}
            description={itens.descricao}
          />
        ))}
      </S.Menu>
    </S.ContainerMenu>
  )
}

export default ProductCardapio

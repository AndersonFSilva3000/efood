import React from 'react'
import Products from '../Products'

import * as S from './styles'
import { Restaurant } from '../../pages/Home'

export type Props = {
  products: Restaurant[]
  cardback: 'white' | 'orange'
  colunsgrid: 'perfil' | 'home'
}

const ProductList = ({ products, cardback, colunsgrid }: Props) => {
  return (
    <S.Carts className="container" cardback={cardback} colunsgrid={colunsgrid}>
      <S.List colunsgrid={colunsgrid} cardback={cardback}>
        {products.map((product) => (
          <ul key={product.id}>
            <Products
              id={product.id}
              title={product.titulo}
              image={product.capa}
              avaliable={product.avaliacao}
              emphasis={product.destacado}
              type={product.tipo}
              description={product.descricao}
            />
          </ul>
        ))}
      </S.List>
    </S.Carts>
  )
}

export default ProductList

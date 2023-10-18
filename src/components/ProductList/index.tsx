import React from 'react'
import Products from '../Products'

import * as S from './styles'
import Product from '../../models/ProductIten'

export type Props = {
  products: Product[]
  cardback: 'white' | 'orange'
  colunsgrid: 'perfil' | 'home'
}

const ProductList = ({ products, cardback, colunsgrid }: Props) => {
  return (
    <S.Carts className="container" cardback={cardback} colunsgrid={colunsgrid}>
      <S.List colunsgrid={colunsgrid} cardback={cardback}>
        {products.map((product) => (
          <Products
            key={product.id}
            title={product.title}
            image={product.image}
            avaliable={product.avaliable}
            emphasis={product.emphasis}
            type={product.type}
            description={product.description}
          />
        ))}
      </S.List>
    </S.Carts>
  )
}

export default ProductList

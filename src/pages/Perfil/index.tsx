import React from 'react'
import HeaderPerfil from '../../components/HeaderPerfil'
import Banner from '../../components/Banner'

import pizza from '../../assets/images/pizza.png'
import ProductIten from '../../models/ProductIten'
import ProductList from '../../components/ProductList'

const list: ProductIten[] = [
  {
    image: pizza,
    title: 'Hioki Sushi',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 1
  },
  {
    image: pizza,
    title: 'Hioki Sushi',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 2
  },
  {
    image: pizza,
    title: 'Hioki Sushi',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 3
  },
  {
    image: pizza,
    title: 'Hioki Sushi',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 4
  },
  {
    image: pizza,
    title: 'Hioki Sushi',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 5
  },
  {
    image: pizza,
    title: 'Hioki Sushi',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 6
  }
]

const Perfil = () => (
  <>
    <HeaderPerfil />
    <Banner />
    <ProductList products={list} colunsgrid="perfil" cardback="orange" />
  </>
)

export default Perfil

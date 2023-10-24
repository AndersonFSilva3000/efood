import React from 'react'

import ProductList from '../../components/ProductList'
import Header from '../../components/Header'

import { useGetFeatureRestaurantQuery } from '../../service/api'

export type Restaurant = {
  nome: string
  foto: string | undefined
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco?: number
      id: number
      nome: string
      descricao: string
      porcao?: string
    }
  ]
}

const Home = () => {
  const { data: restaurat } = useGetFeatureRestaurantQuery()

  if (restaurat) {
    return (
      <>
        <Header />
        <ProductList products={restaurat} />
      </>
    )
  }

  return <h3>Carregando...</h3>
}

export default Home

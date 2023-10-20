import React from 'react'

import ProductList from '../../components/ProductList'
import Header from '../../components/Header'

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
  const [restaurat, setRestaurat] = React.useState<Restaurant[]>([])

  React.useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((resp) => resp.json())
      .then((resp) => setRestaurat(resp))
  }, [])

  return (
    <>
      <Header />
      <ProductList products={restaurat} cardback="white" colunsgrid="home" />
    </>
  )
}

export default Home

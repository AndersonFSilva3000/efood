import React from 'react'
import { useParams } from 'react-router-dom'

import { Restaurant } from '../Home'
import Banner from '../../components/Banner'
import HeaderPerfil from '../../components/HeaderPerfil'
import ProductCardapio from '../../components/ProductCardapio'

const Perfil = () => {
  const [menu, setMenu] = React.useState<Restaurant>()
  const { id } = useParams()

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
        )
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        setMenu(data)
      } catch (error) {
        console.error('Erro ao buscar os dados: ', error)
      }
    }

    fetchData()
  }, [id])

  if (!menu) return <h2>carregando</h2>

  return (
    <>
      <HeaderPerfil />
      <Banner title={menu.titulo} type={menu.tipo} urlPhoto={menu.capa} />

      <ProductCardapio cardapio={menu.cardapio} />
    </>
  )
}

export default Perfil

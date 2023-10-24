import React from 'react'
import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import HeaderPerfil from '../../components/HeaderPerfil'
import ProductCardapio from '../../components/ProductCardapio'

import { useGetRestauranteProfileQuery } from '../../service/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: menu } = useGetRestauranteProfileQuery(id!)

  if (!menu) return <h3>carregando...</h3>

  return (
    <>
      <HeaderPerfil />
      <Banner title={menu.titulo} type={menu.tipo} urlPhoto={menu.capa} />
      <ProductCardapio cardapio={menu.cardapio} />
    </>
  )
}

export default Perfil

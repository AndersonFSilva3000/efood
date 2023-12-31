import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import HeaderPerfil from '../../components/HeaderPerfil'
import ProductCardapio from '../../components/ProductCardapio'
import Loader from '../../components/Loader'

import { useGetRestauranteProfileQuery } from '../../service/api'

type IdParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as IdParams
  const { data: menu } = useGetRestauranteProfileQuery(id)

  if (!menu) return <Loader />

  return (
    <>
      <HeaderPerfil />
      <Banner title={menu.titulo} type={menu.tipo} urlPhoto={menu.capa} />
      <ProductCardapio cardapio={menu.cardapio} />
    </>
  )
}

export default Perfil

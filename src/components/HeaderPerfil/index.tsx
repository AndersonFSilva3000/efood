import React from 'react'
import { Link } from 'react-router-dom'

import * as S from './styles'
import backgroundHP from '../../assets/images/perfil.png'
import logo from '../../assets/images/logo.png'

const HeaderPerfil = () => (
  <S.ContainerHeaderP style={{ backgroundImage: `url(${backgroundHP})` }}>
    <S.ContainerLinks className="container">
      <Link to="/">Restaurantes</Link>
      <img src={logo} alt="efood" />
      <a href="#">0 - produto(s) no carrinho</a>
    </S.ContainerLinks>
  </S.ContainerHeaderP>
)

export default HeaderPerfil

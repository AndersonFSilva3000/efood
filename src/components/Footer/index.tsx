import React from 'react'

import * as S from './styles'
import efood from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => (
  <S.Footer>
    <img src={efood} alt="efood" />
    <S.ContainerSocial>
      <a href="#">
        <img src={instagram} alt="Intagram" />
      </a>
      <a href="#">
        <img src={facebook} alt="Facebook" />
      </a>
      <a href="#">
        <img src={twitter} alt="Twitter" />
      </a>
    </S.ContainerSocial>
    <S.Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Text>
  </S.Footer>
)

export default Footer

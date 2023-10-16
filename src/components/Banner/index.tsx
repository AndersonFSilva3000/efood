import React from 'react'

import * as S from './styles'
import banner from '../../assets/images/banner.png'

const Banner = () => (
  <S.Image style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <S.Text>Italiana</S.Text>
      <S.NameRestaurant>La Dolce Vita Trattoria</S.NameRestaurant>
    </div>
  </S.Image>
)

export default Banner

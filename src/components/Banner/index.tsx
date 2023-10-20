import React from 'react'

import * as S from './styles'

type Props = {
  urlPhoto?: string
  type?: string
  title?: string
}

const Banner = ({ title, type, urlPhoto }: Props) => (
  <S.Image style={{ backgroundImage: `url(${urlPhoto})` }}>
    <div className="container">
      <S.Text>{type}</S.Text>
      <S.NameRestaurant>{title}</S.NameRestaurant>
    </div>
  </S.Image>
)

export default Banner

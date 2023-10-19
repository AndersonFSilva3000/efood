import React from 'react'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void | boolean
  children: string
}

import * as S from './styles'

const Button = ({ to, children, type, onClick, title }: Props) => {
  if (type === 'button') {
    return (
      <S.ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </S.ButtonContainer>
    )
  }
  return (
    <S.ButtonLink to={to as string} title={title}>
      {children}
    </S.ButtonLink>
  )
}

export default Button

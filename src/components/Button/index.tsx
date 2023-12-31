import React from 'react'

type Props = {
  type: 'button' | 'link' | 'submit'
  title?: string
  to?: string
  onClick?: () => void | number
  children: React.ReactNode
}

import * as S from './styles'

const Button = ({ to, children, type, onClick, title }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonContainer type={type} onClick={onClick}>
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

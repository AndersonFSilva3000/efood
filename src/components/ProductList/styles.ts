import styled from 'styled-components'

import { Props } from '.'
import { Container } from '../Products/styles'
import { Colors } from '../../styles'

export const Carts = styled.section<Omit<Props, 'products' | 'colunsrid'>>`
  ${Container} {
    background-color: ${(props) =>
      props.cardback === 'orange' ? Colors.darkOrange : Colors.white};
    color: ${(props) =>
      props.cardback === 'orange' ? Colors.lightOrange : Colors.darkOrange};
  }
`

export const List = styled.ul<Omit<Props, 'products' | 'colunsrid'>>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.colunsgrid === 'perfil' ? '1fr 1fr 1fr' : '1fr 1fr'};
  grid-column-gap: ${(props) =>
    props.colunsgrid === 'perfil' ? '2rem' : '5rem'};
  grid-row-gap: ${(props) => (props.colunsgrid === 'perfil' ? '2rem' : '5rem')};
  max-width: 338px;

  img {
    margin: ${(props) =>
      props.colunsgrid === 'perfil' ? '8px 8px 0px 8px' : '0px'};
  }
`

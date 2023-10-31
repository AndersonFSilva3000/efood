import styled from 'styled-components'

import { Container } from '../Products/styles'
import { Colors } from '../../styles'

export const Carts = styled.section`
  ${Container} {
    background-color: ${Colors.white};
    color: ${Colors.darkOrange};
  }

  @media (max-width: 51.25rem) {
    padding: 0 2rem;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5rem;

  .productList3,
  .productList5 {
    transform: translateX(-100vh);
  }

  .productList4,
  .productList6 {
    transform: translateX(100vw);
  }

  img {
    width: 100%;
  }

  @media (max-width: 52.5rem) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 30rem) {
    grid-template-columns: 1fr;
  }
`

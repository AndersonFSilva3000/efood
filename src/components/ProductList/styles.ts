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
    transform: translateX(-20vh);
    opacity: 0;
  }

  .productList4,
  .productList6 {
    transform: translateX(20vh);
    opacity: 0;
  }

  img {
    width: 100%;
  }

  @media (max-width: 52.5rem) {
    grid-template-columns: 1fr 1fr;

    .productList3,
    .productList5 {
      transform: translateX(0);
      opacity: 1;
    }

    .productList4,
    .productList6 {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media (max-width: 30rem) {
    grid-template-columns: 1fr;
  }
`

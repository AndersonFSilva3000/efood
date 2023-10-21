import styled from 'styled-components'
import { Colors } from '../../styles'
import { Container, ContainerTitle } from '../Products/styles'

export const ContainerMenu = styled.div`
  ${Container} {
    background-color: ${Colors.darkOrange};
    color: ${Colors.lightOrange};

    @media (max-width: 51.25rem) {
      margin: 0 2rem;
    }

    ${ContainerTitle} {
      flex: none;
    }
  }
`

export const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem 5rem;

  img {
    width: 100%;
    object-fit: cover;
    height: 11rem;
    padding: 0.5rem;
  }

  @media (max-width: 52.5rem) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }

  @media (max-width: 30rem) {
    grid-template-columns: 1fr;
  }
`

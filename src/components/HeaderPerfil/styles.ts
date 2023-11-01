import styled from 'styled-components'
import { Colors } from '../../styles'

export const ContainerHeaderP = styled.div`
  background-size: cover;
  height: 11.563rem;

  a {
    text-decoration: none;
    color: ${Colors.darkOrange};
    font-weight: bolder;
    font-size: 1.125rem;
  }
`

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4.094rem 0;

  button {
    background-color: transparent;
    width: auto;
  }

  @media (max-width: 51.25rem) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (max-width: 30rem) {
    display: none;
  }
`

export const Mobile = styled.div`
  display: none;

  @media (max-width: 30rem) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 4.1rem;

    button {
      background-color: transparent;
      border: none;
      color: ${Colors.darkOrange};
    }

    img {
      width: 90%;
      height: 90%;
    }

    svg {
      width: 2rem;
      height: 2rem;
    }

    .cart {
      position: relative;

      span {
        font-size: 0.75rem;
        position: absolute;
        top: -0.625rem;
        right: -0.313rem;
        background-color: ${Colors.darkOrange};
        color: ${Colors.lightOrange};
        padding: 0.313rem;
        border-radius: 0.2rem;
      }
    }
  }
`

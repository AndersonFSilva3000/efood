import styled from 'styled-components'
import { Colors } from '../../styles'

export const CartProduct = styled.li`
  position: relative;
  display: flex;
  background-color: ${Colors.lightOrange};
  padding: 0.8rem 0 0.8rem 0.8rem;
  margin-top: 1rem;

  img {
    margin-right: 0.8rem;
    height: 5rem;
    width: 5rem;
    object-fit: cover;
  }

  h4 {
    font-size: 1.125rem;
  }

  span {
    display: block;
    margin-top: 1rem;
    font-size: 0.875rem;
  }

  button {
    position: absolute;
    right: 0;
    bottom: 0.5rem;
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }

    img {
      margin-right: 0.5rem;
      width: 1rem;
      height: 1rem;
    }
  }
`

export const ContainerPrince = styled.div`
  color: ${Colors.lightOrange};
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  font-weight: bold;
`

export const Empty = styled.p`
  color: ${Colors.lightOrange};
  text-align: center;
`

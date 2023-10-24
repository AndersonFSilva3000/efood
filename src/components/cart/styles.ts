import styled from 'styled-components'
import { Colors } from '../../styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const Sidebar = styled.aside`
  background-color: ${Colors.darkOrange};
  z-index: 1;
  padding: 1rem 0.5rem 0 0.5rem;
  max-width: 22.5rem;
  width: 100%;
`

export const CartProduct = styled.li`
  position: relative;
  display: flex;
  background-color: ${Colors.lightOrange};
  padding: 0.8rem 0 0.8rem 0.8rem;
  margin-top: 1rem;

  img {
    margin-right: 0.8rem;
    height: 80px;
    width: 80px;
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

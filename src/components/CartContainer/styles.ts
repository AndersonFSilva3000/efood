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

  animation-duration: 0.5s;
`

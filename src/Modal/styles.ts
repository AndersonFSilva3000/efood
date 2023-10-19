import styled from 'styled-components'
import { Colors } from '../styles'
import { ButtonContainer } from '../components/Button/styles'

export const Modal = styled.div`
  position: fixed;
  display: none;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    display: flex;
  }
`

export const ModalContent = styled.div`
  position: relative;
  background-color: ${Colors.darkOrange};
  color: ${Colors.white};
  display: flex;
  padding: 2rem;
  column-gap: 1.5rem;
  z-index: 1;

  img {
    width: 17.5rem;
    height: 17.5rem;
    object-fit: cover;
  }

  h3 {
    font-size: 1.125rem;
  }

  p {
    font-size: 0.875rem;
    margin: 1rem 0;
    line-height: 1.375rem;
  }

  ${ButtonContainer} {
    width: auto;
  }
`

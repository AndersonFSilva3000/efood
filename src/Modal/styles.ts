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

  @media (max-width: 52.5rem) {
    padding: 0 2rem;
  }

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

  animation-duration: 0.5s;

  @media (max-width: 30rem) {
    flex-direction: column;
    padding: 2rem 1rem 1rem 1rem;
  }

  img {
    width: 17.5rem;
    height: 17.5rem;
    object-fit: cover;

    @media (max-width: 30rem) {
      width: 100%;
      height: 11rem;
      margin-bottom: 1rem;
    }
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
export const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  z-index: 1;

  &:hover {
    opacity: 0.5;
  }

  img {
    width: 1rem;
    height: 1rem;
  }
`

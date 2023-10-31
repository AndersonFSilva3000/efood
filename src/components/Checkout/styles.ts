import styled from 'styled-components'
import { Colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

type inputGroupProps = {
  maxWidth?: string
}

export const Form = styled.div`
  padding-top: 1rem;
  color: ${Colors.lightOrange};

  p {
    font-size: 0.875rem;
    line-height: 1.375rem;
    margin-bottom: 1.5rem;
  }

  h4 {
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  label {
    display: block;
    font-size: 0.875rem;
    font-weight: bold;
  }

  input {
    width: 100%;
    height: 2rem;
    border: none;
    background-color: ${Colors.lightOrange};
    margin: 0.5rem 0;
    padding: 8px;
    font-size: 0.875rem;
    font-weight: bold;
    outline: none;

    &.error {
      color: #d11212;
      box-shadow: inset 0 0 0 1.5px #d11212;
      border: 1px solid ${Colors.lightOrange};
    }
  }

  &.dNone {
    display: none;
  }
`

export const Row = styled.div<inputGroupProps>`
  display: flex;
  column-gap: 2.125rem;
  align-items: flex-end;

  div {
    &.maxWidth {
      width: 100%;
    }
  }

  input {
    &.maxWidth {
      width: 5.438rem;
    }
  }
`

export const ContainerButtons = styled.div`
  margin-top: 1rem;
  ${ButtonContainer} {
    margin-bottom: 0.5rem;
  }
`

export const AlertError = styled.span`
  color: rgb(150, 0, 0);
  font-size: 0.75rem;
`

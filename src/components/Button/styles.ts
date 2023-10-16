import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Colors } from '../../styles'

export const ButtonLink = styled(Link)`
  background-color: ${Colors.darkOrange};
  color: ${Colors.lightOrange};
  font-weight: bold;
  font-size: 0.875rem;
  padding: 0.25rem 0.375rem;
  text-decoration: none;
`

export const ButtonContainer = styled.button`
  background-color: ${Colors.lightOrange};
  color: ${Colors.darkOrange};
  font-weight: bold;
  font-size: 0.875rem;
  padding: 0.25rem 0.375rem;
  text-decoration: none;
  width: 100%;
  border: none;
  cursor: pointer;
`

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
`

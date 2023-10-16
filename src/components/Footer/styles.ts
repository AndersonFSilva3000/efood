import styled from 'styled-components'
import { Colors } from '../../styles'

export const Footer = styled.footer`
  background-color: ${Colors.lightOrange};
  color: ${Colors.darkOrange};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 0;
  margin-top: 7.5rem;
`

export const ContainerSocial = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 5rem;
`

export const Text = styled.p`
  max-width: 30rem;
  text-align: center;
  font-size: 0.625rem;
`

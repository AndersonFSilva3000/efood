import styled from 'styled-components'

import { Colors } from '../../styles'
import { TagContainer } from '../Tag/sytles'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.white};

  ${TagContainer} {
    margin-right: 0.5rem;
  }
`

export const ContainerProduct = styled.div`
  padding: 0.5rem 0.5rem 0.75rem 0.5rem;
  border: 1px solid ${Colors.darkOrange};
  border-top: none;
`

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: auto;
`

export const Avaliable = styled.span`
  display: flex;
  align-items: center;

  p {
    font-size: 1.125rem;
    font-weight: bolder;
    margin-right: 0.5rem;
  }
`

export const Title = styled.h2`
  font-size: 1.125rem;
`

export const Text = styled.p`
  font-size: 0.875rem;
  line-height: 1.375rem;
  margin: 1rem 0;
`

export const Infos = styled.div`
  position: absolute;
  top: 1rem;
  right: 0.5rem;
`

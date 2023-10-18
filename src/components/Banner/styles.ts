import styled from 'styled-components'
import { Colors } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 17.5rem;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-bottom: 3.5rem;

  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`

export const Text = styled.h3`
  color: ${Colors.white};
  font-weight: lighter;
  font-size: 2rem;
  z-index: 1;
  position: absolute;
  top: 1.5rem;

  @media (max-width: 51.25rem) {
    left: 2rem;
  }
`

export const NameRestaurant = styled.h3`
  color: ${Colors.white};
  font-size: 2rem;
  z-index: 1;
  position: absolute;
  bottom: 1.5rem;

  @media (max-width: 51.25rem) {
    left: 2rem;
  }
`

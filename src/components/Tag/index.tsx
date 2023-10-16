import React from 'react'
import { TagContainer } from './sytles'

type Prop = {
  children: string
}

const Tag = ({ children }: Prop) => <TagContainer>{children}</TagContainer>

export default Tag

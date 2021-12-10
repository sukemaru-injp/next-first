import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { color } from '../../styles/constants'

interface Props {
  children: ReactNode
  bg?: string
}

const Title = styled.h1`
  color: #fff;
  
  &:hover {
    cursor: pointer;
  }
`

const HeaderWrapper = styled.header<Props>`
width: 100%;
height: 70px;
background-color: ${({ bg }) => bg || color.main};
padding: 0 20px;
`

export const Header: FC<Props> = (props: Props) => {
  return (
    <>
      <HeaderWrapper>
        {props.children}
      </HeaderWrapper>
    </>
  )
}

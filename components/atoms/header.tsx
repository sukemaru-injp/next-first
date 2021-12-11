import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { color } from '../../styles/constants'

interface Props {
  children: ReactNode
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
background-color: ${color.main};
padding: 0 20px;
`

const Header: FC<Props> = (props: Props) => {
  return (
    <>
      <HeaderWrapper>
        {props.children}
      </HeaderWrapper>
    </>
  )
}

export default Header

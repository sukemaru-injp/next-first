import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

const HeaderWrapper = styled.header<Props>`
position: sticky;
top: 0;
z-index: 30;
opacity: 0.9;
width: 100%;
height: 70px;
background-color: ${({ theme }) => theme.color.main};
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

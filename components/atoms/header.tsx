import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
  title: string
  onClick?: () => void
}

const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  background-color: salmon;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`

const Title = styled.h1`
  color: #fff;
  
  &:hover {
    cursor: pointer;
  }
`

const Header = (props: Props) => {
  return (
    <>
      <HeaderWrapper>
        <Title onClick={props.onClick}>
          {props.title}
        </Title>
      </HeaderWrapper>
    </>
  )
}

export default Header
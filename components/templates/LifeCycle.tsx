import React, { FC, ReactNode, useEffect } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

const Wrapper = styled.div`
  padding: 20px;
  background-color: #ddd;
`

export const LifeCycle: FC<Props> = ({children}) => {
  const Effect = () => {
    useEffect(() => {
      console.log('test')
    }, [])
  }
  Effect()
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

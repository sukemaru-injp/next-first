import React, { FC, ReactNode, useEffect } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode,
  onEffect?: any
}

const Wrapper = styled.div`
  padding: 20px;
  background-color: #ddd;
`

export const LifeCycle: FC<Props> = ({children, onEffect}) => {
  const Effect = () => {
    useEffect(() => {
      console.log('test')
    }, [onEffect])
  }
  Effect()
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

import React, { FC } from 'react'
import styled from 'styled-components'
import { hover } from '../../styles/mixin'
import { color } from '../../styles/constants'

interface Props {
  title: string
  onClick?: (event?: any) => any
}
const ButtonStyle = styled.button`
padding: 10px;
color: ${color.text};
height: 70px;
width: 100px;
border-radius: 5px;
border: none;
background-color: ${color.main};
&:focus {
outline: none;
}
${hover(`
cursor: pointer;
background-color: ${color.sub};
`)}
`

const Button: FC<Props> = (props: Props) => {
  return (
    <ButtonStyle
      onClick={props.onClick}>
      <h3>{props.title}</h3>
    </ButtonStyle>
  )
}
export default Button

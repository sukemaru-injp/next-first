import React, { FC } from 'react'
import styled from 'styled-components'
import { hover } from '../../styles/mixin'
import { color } from '../../styles/constants'

interface Props {
  title: string
  // eslint-disable-next-line no-unused-vars
  onClick?: (event?: any) => any
}
const ButtonStyle = styled.button`
padding: 10px;
color: ${color.text};
height: 70px;
width: 100px;
border-radius: 5px;
border: none;
text-align: center;
font-size: 1.2rem;
font-weight: bold;
background-color: ${color.main};
transition: all 0.3s;
&:focus {
outline: none;
}
${hover(`
cursor: pointer;
background-color: ${color.sub};
`)}
`

const SelectButtonStyle = styled(ButtonStyle)`
background-color: ${color.sub};
color: ${color.main}
`

export const SelectButton: FC<Props> = (props: Props) => {
  return (
    <SelectButtonStyle
      onClick={props.onClick}>
      <h2>{props.title}</h2>
    </SelectButtonStyle>
  )
}

export const Button: FC<Props> = (props: Props) => {
  return (
    <ButtonStyle
      onClick={props.onClick}>
      <h2>{props.title}</h2>
    </ButtonStyle>
  )
}
export default Button

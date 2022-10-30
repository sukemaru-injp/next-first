import styled from 'styled-components'
import { color } from '../../styles/constants' 

type ColorType = 'main' | 'sub'

const Button = styled.button<{ color: ColorType } >`
padding: 10px;
height: 70px;
border-radius: 5px;
background-color: ${({ color: colorType }) => `${color()[colorType]}`};
`

export default Button

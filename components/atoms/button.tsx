import { FC, ComponentProps } from 'react'
import styled from 'styled-components'
import { hover } from '../../styles/mixin'

interface Props extends ComponentProps<'button'> {
  title: string
}

export const ButtonStyle = styled.button`
padding: 10px;
height: 70px;
width: 100px;
border-radius: 5px;
border: none;
text-align: center;
font-size: 1.2rem;
font-weight: bold;
transition: all 0.3s;

${({ theme }) => `
  background-color: ${theme.color.main};
  color: ${theme.color.text};

  ${hover(`
    cursor: pointer;
    background-color: ${theme.color.sub};
  `)}
`}

&:focus {
outline: none;
}
`

const Button: FC<Props> = (props: Props) => {
  return (
    <ButtonStyle
      onClick={props.onClick}>
      <h2>{props.title}</h2>
    </ButtonStyle>
  )
}

export default Button

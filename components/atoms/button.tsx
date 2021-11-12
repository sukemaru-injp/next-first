import React, { FC } from 'react'
import styled from 'styled-components'
import { hover } from '../../styles/mixin'

interface Props {
  text: string
  onClick?: () => void
}

const Button = (props: Props) => {
  const Button = styled.button`
    padding: 10px;
    color: #000;
    background-color: #008b8b;
    ${hover(`
    cursor: pointer;
    background-color: orange;
    `)}
  `
  return (
    <>
      <Button
        onClick={props.onClick}>
        {props.text}
      </Button>
    </>
  )
}

export default Button

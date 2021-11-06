import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
  text: string
  onClick: () => void
}

const Button = (props: Props) => {
  const Button = styled.button`
    padding: 10px;
    color: #000;
    background-color: #008b8b;

    &:hover {
      cursor: pointer;
    }
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

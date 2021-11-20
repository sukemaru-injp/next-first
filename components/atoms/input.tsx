import { ChangeEvent, FC } from 'react'
import styled from 'styled-components'

interface Props {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = styled.input`
  padding: 10px;
`

export const TextInput: FC<Props> = (props: Props) => {
  return (
    <>
    <Input
      value={props.value}
      onChange={props.onChange}>
    </Input>
    </>
  )
}

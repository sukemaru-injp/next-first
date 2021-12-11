import styled from 'styled-components'
import Button from '../atoms/button'
import { map } from 'lodash'
import Router from 'next/router'
import { FC } from 'react'

type ui = {
  title: string,
  to: string
}

interface Props {
  ui: ui[]
}

const InnerWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Buttons: FC<Props> = (props: Props) => {
  return (
    <>
      <InnerWrapper>
        {map(props.ui, (v: ui, idx) => {
          return <Button
            key={`button-${idx}`}
            title={v.title}
            onClick={() => Router.push(`${v.to}`)} />
        }
        )}
      </InnerWrapper>
    </>
  )
}
export default Buttons
import styled from 'styled-components'
import Button, { ButtonStyle } from '../atoms/button'
import { map } from 'lodash'
import Router, { useRouter } from 'next/router'
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

const SelectButton = styled(ButtonStyle)`
${({ theme }) => `
  background-color: ${theme.color.sub};
  color: ${theme.color.main};
`}
`

const Buttons: FC<Props> = (props: Props) => {
  const router = useRouter()
  return (
    <>
      <InnerWrapper>
        {map(props.ui, (v: ui, idx) => {
          if (router.pathname.includes(v.to)) {
            return <SelectButton
              key={`button-${idx}`}
              onClick={() => Router.push(`${v.to}`)}>
              {v.title}
            </SelectButton>
          } else {
            return <Button
              key={`button-${idx}`}
              title={v.title}
              onClick={() => Router.push(`${v.to}`)} />
          }
          
        }
        )}
      </InnerWrapper>
    </>
  )
}
export default Buttons
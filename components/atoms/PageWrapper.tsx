import { ReactNode, FC } from 'react'
import styled from 'styled-components'
import { color } from '../../styles/constants'

const PageWrapper = styled.div`
width: 100%;
min-height: 100vh;
background-color: ${color.defaultBg};
`
interface Props {
  children: ReactNode
}

const Wrapper: FC<Props> = (props: Props) => {
  return (
    <>
      <PageWrapper>
        {props.children}
      </PageWrapper>
    </>
  )
}

export default Wrapper

import { ReactNode, FC } from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
width: 100%;
min-height: 100vh;
background-color: ${({ theme }) => theme.color.defaultBg};
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

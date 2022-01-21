import type { NextPage, GetStaticProps } from 'next'
import { client } from '../../libs/client'
import styled from 'styled-components'

interface Props {
  text: string
}

const PageWrapper = styled.div`
padding: 10px;
display: flex;
align-items: center;
flex-flow: column;
`

const TestPage: NextPage<Props> = (props: Props) => {
  return (
    <>
      <PageWrapper>
        <h1>{props.text}</h1>
      </PageWrapper>
    </>
  )
}
export const getStaticProps: GetStaticProps<Props> = async () => {
  const { text } = await client.get({ endpoint: 'test' })
  return {
    props: { text }
  }
}

export default TestPage

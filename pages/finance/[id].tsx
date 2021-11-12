import type { NextPage } from 'next'
import styled from 'styled-components'
import Link from 'next/link'
import Button from '../../components/atoms/button'

const PageWrapper = styled.div`
  padding: 20px;
`

const Wrapper = styled.div`
  padding: 10px;
`

const BookPage: NextPage = () => {
  return (
    <>
      <PageWrapper>
        <h2>
          Finance
        </h2>
        <Link href="/">
          To Home
        </Link>
        <Wrapper>
          <Button
          text="Hoverテスト" />
        </Wrapper>
      </PageWrapper>
    </>
  )
}

export default BookPage
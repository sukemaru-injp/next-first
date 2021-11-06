import type { NextPage } from 'next'
import styled from 'styled-components'
import Link from 'next/link'

const PageWrapper = styled.div`
  padding: 20px;
`

const UserPage: NextPage = () => {
  return (
    <>
      <PageWrapper>
      <h2>
          User
        </h2>
        <Link href="/">
          To Home
        </Link>
      </PageWrapper>
    </>
  )
}

export default UserPage
import type { NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'

const id = 1

const Wrapper = styled.div` 
  padding: 20px;
`

const LinkWrapper = styled.div`
  padding: 10px;
`

const Home: NextPage = () => {
  return (
    <>
      <Wrapper>
        <Wrapper>
          <Link
            href={`/user/${id}`}>
            To User
          </Link>
        </Wrapper> 
        <Wrapper>
        <Link href={`/finance/${id}`}>
            To Finance
          </Link>
        </Wrapper>
      </Wrapper> 
    </>
  )
}

export default Home

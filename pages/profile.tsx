import type { NextPage } from 'next'
import styled from 'styled-components'
import Image from 'next/image'

const Wrapper = styled.div`
display: flex;
`

const Home: NextPage = () => {
  return (
    <>
      <Wrapper>
        <Image
          src="/img/profile.png"
          alt="profile"
          width={600}
          height={500} />
      </Wrapper>
    </>
  )
}

export default Home

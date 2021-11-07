import type { NextPage } from 'next'
import { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { SingleTextInput } from '../../components/atoms/input'

const PageWrapper = styled.div`
  padding: 20px;
`

const InnerWrapper = styled.div`
  padding: 10px;
`

const UserPage: NextPage = () => {
    const [text, setText] = useState<string>('')
  
    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
      console.log(event)
      setText(event.target.value)
    }
  
  return (
    <>
      <PageWrapper>
      <h2>
          User
        </h2>
        <Link href="/">
          To Home
        </Link>

        <InnerWrapper>
          <SingleTextInput
            value={text}
            onChange={(e) => handleInput(e)} />
        </InnerWrapper>
      </PageWrapper>
    </>
  )
}

export default UserPage
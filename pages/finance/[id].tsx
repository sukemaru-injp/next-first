import type { NextPage } from 'next'
import { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Button from '../../components/atoms/button'
import { LifeCycle } from '../../components/templates/LifeCycle'

const PageWrapper = styled.div`
  padding: 20px;
`

const Wrapper = styled.div`
  padding: 10px;
`

const BookPage: NextPage = () => {
  const [count, setCount] = useState<number>(0)

  const increment = () => {
    setCount(prev => prev+=1)
  }

  return (
    <>
      <PageWrapper>
        <h2>
          Finance
        </h2>
        <Link href="/">
          To Home
        </Link>
        <LifeCycle>
        <p>{count}</p>
        <Button
          text="Hoverテスト"
          onClick={() => increment()} />
        </LifeCycle>
      </PageWrapper>
    </>
  )
}

export default BookPage
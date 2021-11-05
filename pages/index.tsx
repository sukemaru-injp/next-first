import type { NextPage } from 'next'
import Link from 'next/link'

const id = 1

const Home: NextPage = () => {
  return (
    <>
      <Link href={`/user/${id}`}>
        To User
      </Link>
    </>
  )
}

export default Home

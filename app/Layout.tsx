import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import Footer from '../components/templates/DefaultFooter'
import Header from '../components/templates/Header'
import { color } from '../styles/constants'
interface Props {
  children: ReactNode
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh', backgroundColor: color().defaultBg }}>
        {children}
      </main>
      <Footer />
    </>
  )
}

const Page = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.color.defaultBg};
`

export default Layout

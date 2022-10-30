import { FC, ReactNode } from 'react'
import Footer from './atoms/Footer'
import PageWrapper from './atoms/PageWrapper'
import Header from './templates/Header'
interface Props {
  children: ReactNode
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <PageWrapper>
        {children}
      </PageWrapper>
      <Footer />
    </>
  )
}

export default Layout

import { FC, ReactNode } from 'react'
import Footer from '../components/atoms/Footer'
import PageWrapper from '../components/atoms/PageWrapper'
import Header from '../components/templates/Header'
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

import { FC, ReactNode } from 'react'
import Footer from '../components/atom/DefaultFooter'
import PageWrapper from '../components/atom/PageWrapper'
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

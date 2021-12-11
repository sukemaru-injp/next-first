import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import PageWrapper from '../components/atoms/PageWrapper'
import styled from 'styled-components'
import MainHeader from '../components/templates/MainHeader'

const AllHead = () => {
  return (
    <Head>
      <title>sukemaru-page</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
const Title = styled.h1`
color: #fff;
`
const InnerWrapper = styled.div`
`

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <AllHead />
      <MainHeader />
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </>
  )
}

export default MyApp

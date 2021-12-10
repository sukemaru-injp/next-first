import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import PageWrapper from '../components/atoms/PageWrapper'
import styled from 'styled-components'
import { Header } from '../components/atoms/header'

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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AllHead />
      <Header>
        <Title>
        SukemaruProfile
        </Title>
      </Header>
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </>
  )
}

export default MyApp

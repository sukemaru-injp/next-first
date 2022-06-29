import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import PageWrapper from '../components/atoms/PageWrapper'
import MainHeader from '../components/templates/MainHeader'
import DefaultFooter from '../components/atoms/footer'

import { color } from '../styles/constants'

const AllHead = () => {
  return (
    <Head>
      <title>sukemaru-page</title>
      <link rel="icon" href="/img/mountain-favicon.png" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Raleway&display=swap" rel="stylesheet" />
    </Head>
  )
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <AllHead />
      <ThemeProvider theme={{ color }}>
        <MainHeader />
        <PageWrapper>
          <Component {...pageProps} />
        </PageWrapper>
        <DefaultFooter />
      </ThemeProvider>
    </>
  )
}

export default MyApp

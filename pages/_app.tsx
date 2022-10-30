import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import { FC } from 'react'
import Head from 'next/head'
import PageWrapper from '../components/atoms/PageWrapper'
import MainHeader from '../components/templates/MainHeader'
import Footer from '../components/atoms/Footer'

import { color } from '../styles/constants'

const AllHead: FC = () => {
  return (
    <Head>
      <title>sukemaru-page</title>
      <link rel="icon" href="/img/mountain-favicon.png" />
    </Head>
  )
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <AllHead />
      <ThemeProvider theme={{ color: color() }}>
        <MainHeader />
        <PageWrapper>
          <Component {...pageProps} />
        </PageWrapper>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp

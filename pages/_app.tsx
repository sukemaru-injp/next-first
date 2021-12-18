import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import PageWrapper from '../components/atoms/PageWrapper'
import MainHeader from '../components/templates/MainHeader'
import DefaultFooter from '../components/atoms/footer'

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
      <MainHeader />
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
      <DefaultFooter />
    </>
  )
}

export default MyApp

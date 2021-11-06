import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/atoms/header'

const AllHead = () => {
  return (
    <Head>
    <title>NextFirst</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <AllHead />
    <Header 
      title="NextBooks"
      onClick={() => window.location.href = '/'}/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp

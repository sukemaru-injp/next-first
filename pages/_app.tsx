import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

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
    <Component {...pageProps} />
    </>
  )
}

export default MyApp

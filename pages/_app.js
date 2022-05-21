import React from 'react'
import Layout from '../components/Layout'
import { StateContext } from '../context/StateContext'
import { Toaster } from 'react-hot-toast'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp

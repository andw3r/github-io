import React from 'react'
import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>ecommerce</title>
      </Head>
      <NavBar />
      <main className="main-container">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
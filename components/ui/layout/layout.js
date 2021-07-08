import React from 'react'

import MainNavigation from './main-navigation'
import Header from './header'
import Footer from './footer'

function Layout({ children }) {
  return (
    <div>
      <MainNavigation />
      
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  )
}

export default Layout

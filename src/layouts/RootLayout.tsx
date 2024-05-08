import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { LayoutProp } from "../types"

const RootLayout: React.FC<LayoutProp> = ({children}) => {
  return (
    <div className='w-screen min-h-screen'>
      <div className="sticky top-0 left-0">
        <Header />
      </div>
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout
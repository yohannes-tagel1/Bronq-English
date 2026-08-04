import React from 'react'
import HeaderPage from './HeaderPage'
import FooterPage from './FooterPage'
import { Outlet, useLocation } from 'react-router-dom'

function LayoutPage() {
  const {pathname} = useLocation()
  return (
    <div>
    <HeaderPage />
          <main id="main-content" className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8">
          <Outlet key={pathname} />
        </div>
      </main>
    <FooterPage /> 
    </div>
  )
}

export default LayoutPage

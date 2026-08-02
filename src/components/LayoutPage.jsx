import React from 'react'
import HeaderPage from './HeaderPage'
import FooterPage from './FooterPage'

function LayoutPage() {
  return (
    <div>
    <HeaderPage />
    <h1 className='text-3xl font-bold'>Layout Page</h1>
    <p>Welcome to the Layout page!</p>
    <p>This is a layout component that can be used to wrap other pages.</p>
    <p>It includes a header and footer.</p>
    <p>You can add more content here as needed.</p>

    <FooterPage />
      
    </div>
  )
}

export default LayoutPage

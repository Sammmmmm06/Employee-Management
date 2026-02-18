import React from 'react'
import WelcomeMenu from './WelcomeMenu'
import Footer from './Footer'

function Welcome() {
  return (
    <div>
    <WelcomeMenu />
    <img 
  src="https://leapmax.ai/wp-content/uploads/2024/10/employee-management-system.webp" 
  alt="Banner" 
  class="w-full h-auto object-cover rounded-lg shadow-md"
/>

    <Footer />
    </div>
  )
}

export default Welcome

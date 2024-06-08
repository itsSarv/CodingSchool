import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const ContactUs = () => {
  return (
    <div>
        <Nav/>
       <div>
        <input placeholder='Your Query' / >
        <text placeholder='Description'/>
        <button>Submit</button>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactUs
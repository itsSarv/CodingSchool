import React, { useState } from 'react'
import Swal from 'sweetalert2'
import Nav from './Nav'
import Footer from './Footer'
// import { clear } from '@testing-library/user-event/dist/clear'
// import { Link } from 'react-router-dom'



const ContactUs = () => {

  const[fullName, setFullName] = useState('')
  const[email, setEmail] = useState('')
  const[message, setMessage] = useState('')

  const contactmessage =(e)=>{
    e.preventDefault()
    console.log(fullName, email, message)
    Swal.fire({
      icon: "success",
      title: 'Success',
      text: 'Thank You ! We will reach you soon',
      confirmButtonText: 'OK',
    })
    setFullName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div>
        <Nav/>
       <div style={
        {
          background: '#d2d2d2',
          height: '100vh',
          display: 'flex',
        }
       }>
        <img src='/images/contact-us.jpg' width='50%' alt='contact'/>

       <div style={{
         width: '50%'
       }}>

        <form onSubmit={contactmessage}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          margin: '15% 10%'
        }}> 


        <div  style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <label style={{
            fontSize: 18,
            fontWeight: 500
          }}>
            Full Name
          </label>
          <input
          onChange={(e)=>setFullName(e.target.value)}
          required
          name='fullname'
          type='text'
          placeholder='Full Name' 
          value={fullName}
          style={{
            border: '1px solid #ccc',
            borderRadius: 6,
            padding: 14,
            margin: '10px 0'
          }}
          />
         </div>

          <div style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <label style={{
            fontSize: 18,
            fontWeight: 500
          }}>
            Email
          </label>
          <input
            onChange={(e)=>setEmail(e.target.value)}
            required
            name='email'
            type='email'
            placeholder='Email' 
            value={email}
            style={{
            border: '1px solid #ccc',
            borderRadius: 6,
            padding: 14,
            margin: '10px 0'
          }} 
         
          />
          </div>

          <div style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <label style={{
            fontSize: 18,
            fontWeight: 500
          }}>
            Message
          </label>
        <textarea
        onChange={(e)=>setMessage(e.target.value)}
        required
        name='message'
        type='text'
        placeholder='Message'
        value={message}
          style={{
             border: '1px solid #ccc',
             borderRadius: 6,
             padding: 14,
            margin: '10px 0'
           }}
        rows='4'
        />
        </div>

        <button style={
          {
            width: 'fit-content',
            padding: '15px 30px',
            backgroundColor: '#7e01fa',
            border: '1px solid #ccc',
            borderRadius: 6,
            color: 'white',
            cursor: 'pointer',
            
          }
        }>Submit
        </button>

        </div>
        </form>
        </div>
        </div>
        
        <Footer/>
    </div>
  )
}

export default ContactUs
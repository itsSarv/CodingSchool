import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <nav 
        className='sticky top-0 left-0 '
        style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: "8px 48px",
        background: 'white',
        boxShadow: '0 8px 8px 0 rgba(0,0,0,0.1)'
    }}>
        <div style={{
        display: 'flex',
        gap: 10,
        alignItems: "center"
                    }}>
            <img src='./images/logo.png' alt='school' width="60"/>
            <h1 className='text-2xl font-bold'>Coding School</h1>
        </div>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 32
            }}>
                <li>
                    <Link to='/' style={{
                        textDecoration:'none',
                        color: '#323232',
                        fontSize: 17
                    }}>Home</Link>
                </li>
                <li>
                    <Link to='/teachers' style={{
                        textDecoration:'none',
                        color: '#323232',
                        fontSize: 17
                    }}>Teachers</Link>
                </li>
                <li>
                    <Link to='/holidays' style={{
                        textDecoration:'none',
                        color: '#323232',
                        fontSize: 17
                    }}>Holidays</Link>
                </li>
                <li>
                    <Link to='/contact-us' style={{
                        textDecoration:'none',
                        color: 'white',
                        fontSize: 17,
                        borderRadius: 5,
                        backgroundColor:'#7e01fa',
                        padding: "10px 20px"
                    }}>Contact Us</Link>
                </li>
            </ul>
    </nav>
  )
}

export default Nav
import React from 'react'

const Nav = () => {
  return (
    <nav style={{
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
            <h1>Coding School</h1>
        </div>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 32
            }}>
                <li>
                    <a href='#' style={{
                        textDecoration:'none',
                        color: '#323232',
                        fontSize: 17
                    }}>Home</a>
                </li>
                <li>
                    <a href='#' style={{
                        textDecoration:'none',
                        color: '#323232',
                        fontSize: 17
                    }}>Teachers</a>
                </li>
                <li>
                    <a href='#' style={{
                        textDecoration:'none',
                        color: '#323232',
                        fontSize: 17
                    }}>Holidays</a>
                </li>
                <li>
                    <a href='#' style={{
                        textDecoration:'none',
                        color: 'white',
                        fontSize: 17,
                        borderRadius: 5,
                        backgroundColor:'#7e01fa',
                        padding: "10px 20px"
                    }}>Contact Us</a>
                </li>
            </ul>
    </nav>
  )
}

export default Nav
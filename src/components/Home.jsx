import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Nav/>
        <div>
          <header className='grid grid-cols-2 p-24 bg-gradient-to-r from-indigo-500 animate__animated animate__fadeIn'>
            <div>
            <img 
                  src="./images/student.jpg" alt="student" 
                  className='w-3/4 rounded-full animate__animated animate__pulse border border-2 shadow-xl'
              />
            </div>
            <div>
             <h1>Say Hello !</h1>
             <p>Enjoy complete digital learning experience</p>
             <div>
              <button>Learn More</button>
              <button>Watch Video</button>
             </div>
            </div>
          </header>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
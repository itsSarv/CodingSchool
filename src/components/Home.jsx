import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Nav/>
        <div>
          <header className='grid grid-cols-2 p-24 bg-gradient-to-r from-cyan-500 to-blue-500'>
            <div>
            <img 
                  src="./images/student.jpg" alt="student" 
                  className='w-3/4 rounded-full animate__animated animate__pulse border-2 shadow-xl mx-auto'
              />
            </div>
            <div className='flex flex-col gap-7 justify-center items-center'>
             <h1 className='text-8xl text-white font-semibold animate__animated animate__zoomIn'>Say Hello !</h1>
             <p className='animate__animated animate__fadeIn'>Enjoy complete digital learning experience</p>
             <div className='flex gap-8'>
              <button className='px-10 py-4 border-black border-2 rounded-lg bg-black text-white animate__animated animate__fadeInLeft'>Learn More</button>
              <button className='px-10 py-4 border-black border-2 rounded-lg text-white hover:bg-[#F2951C] animate__animated animate__fadeInRight'>Watch Video</button>
             </div>
            </div>
          </header>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
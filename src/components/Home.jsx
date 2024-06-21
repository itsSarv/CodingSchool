import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const Home = () => {
  return (
    <div>
        <Nav/>
        <div>
          <header className='grid grid-cols-2 p-24 bg-gradient-to-r from-[#0f82d5] to-purple-500'>
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
          <div className='flex flex-col gap-3 mx-28 items-center my-20'>
            <h1 className='text-3xl font-bold'>Benifits & Advantages</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos excepturi quaerat ducimus saepe quia sint voluptatem doloribus recusandae unde temporibus eos cumque illo nisi dolor odit alias dolorum nemo soluta quibusdam !</p>
            <div className='grid grid-cols-3 gap-6 mx-5 my-10'>
              <div className='flex flex-col items-center justify-center gap-2 px-2 py-5 border-2 rounded-lg shadow-lg'>
              <i className="ri-artboard-line text-6xl"></i>
              <h1 className='text-2xl font-bold'>Great Faculty</h1>
              <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, laborum architecto.</p>
              </div>
              <div className='flex flex-col items-center justify-center gap-2 px-2 py-5 border-2 rounded-lg shadow-lg'>
              <i className="ri-edit-box-line text-6xl"></i>
              <h1 className='text-2xl font-bold'>Latest Curriculum</h1>
              <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, laborum architecto.</p>
              </div>
              <div className='flex flex-col items-center justify-center gap-2 px-2 py-5 border-2 rounded-lg shadow-lg'>
              <i className="ri-tree-line text-6xl"></i>
              <h1 className='text-2xl font-bold'>Green Environment</h1>
              <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, laborum architecto.</p>
              </div> 
            </div>
          </div>
          <div className='mx-28 items-center my-20'>
            <h1 className='text-3xl font-bold text-center py-5'>Some Happy Faces</h1>
            <p className='text-center py-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos excepturi quaerat ducimus saepe quia sint voluptatem doloribus recusandae unde temporibus eos cumque illo nisi dolor odit alias dolorum nemo soluta quibusdam !</p>
            <>
              <Swiper navigation={true} modules={[Navigation]} className="w-10/12">
                <SwiperSlide>
                  <img src="./students/s1.jpeg" alt="student1"  className='w-full' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./students/s2.jpeg" alt="student2" className='w-full' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./students/s3.jpeg" alt="studen3"  className='w-full' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./students/s4.jpeg" alt="student4"  className='w-full'  />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./students/s2.jpeg" alt="student5"  className='w-full'  />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./students/s4.jpeg" alt="student6"  className='w-full'  />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./students/s3.jpeg" alt="student7"  className='w-full'  />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./students/s1.jpeg" alt="student8"  className='w-full'  />
                </SwiperSlide>              
              </Swiper>
            </>
          </div>
          
        </div>     
        <Footer/> 
    </div>
  )
}

export default Home
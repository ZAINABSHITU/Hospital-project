import React from 'react'
import background from '../images/bg-doctors.jpg'
import { TypeAnimation } from 'react-type-animation'
import About from './About'
import Header from '../components/Header'
import Service from './Service'
import Appointment from './Appointment'
import Doctors from './Doctors'
import Department from './Department'
import Customer from './Customer'
import Blog from './Blog'



const Home = () => {
  return (
    <>
    <Header/>

    <div id='main'>
        <img className='main w-full h-screen object-cover object-left scale-x-[-1] opacity-50'
        src={background} />

       <div className='w-full h-screen absolute top-0 left-0'> 

        <div className='max-w-[700px] flex justify-center flex-col md:items-center  m-auto h-full w-full lg:items-start items-center'>
          <article>

          <h1 className='text-5xl font-bold text-blue-800'> WELCOME TO SARDAUNA HOSPITAL</h1>
          </article>
        </div>
       </div>
   
       </div>

       <About />
       <Service />
       <Appointment/>
       <Doctors/>
       <Department/>
       <Customer/>
       <Blog/>
    </>
  )
}

export default Home
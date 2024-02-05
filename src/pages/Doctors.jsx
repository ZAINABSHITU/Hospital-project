import React from 'react'
import Group from '../images/group5.png'


function Doctors() {
  return (
    <div>
        <h1 className='font-bold text-blue-800 text-center '>Our Doctors</h1>
        <h3 className=' text-blue-800 text-center'>Our Department & Special Service</h3>

        <div>
         <div><img className='ml-40' src={Group}/>

         <div className='flex gap-4 ml-32'>
         <div className=' ml-14 w-[210px] h-[70px] bg-gray-100 '>
        <h1 className='font-bold text-blue-700 mt-2 text-center'>Dr. Farha </h1> <h4 className='text-center'>Huntington's</h4></div>
       

        <div className='w-[234px] h-[70px] bg-gray-100 '>
        <h1 className='font-bold text-blue-700 mt-2 text-center'>Dr. Furida</h1><h4 className='text-center'>Ophthalmology</h4></div>

         <div className='ml-4 w-[255px] h-[70px] bg-gray-100 '>
        <h1 className='font-bold text-blue-700 mt-2 text-center ml-4'>Dr. Irfan</h1><h4 className='text-center'>Dental</h4 ></div>

         <div className='w-[240px] h-[70px] bg-gray-100'>
        <h1 className='font-bold text-blue-700 mt-2 text-center ml-2'>Dr. Zainab</h1><h4 className='text-center'>Heart Disease</h4></div>
        </div>

        </div>
        
    </div>
    </div>
  )
}

export default Doctors
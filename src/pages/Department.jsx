import React from 'react'
import Human from '../images/human-heart.png'
// import Hepatology from '../icoins/hepatolohy.svg'
import Huntington from '../icoins/Huntington.svg'
import Dental from '../icoins/Dental.svg'
import Ophthalmology from '../icoins/ophthalmology.svg'
import Otology from '../icoins/Otology.svg'
import Heart from  '../images/human-heart.png'

function Department() {
  return (
    <div className='mt-16'>
        <h1 className='font-bold text-blue-800 text-center'>Department </h1>
        <h4 className=' text-blue-800 text-center'> Our Department & Special Service</h4>

        <div className='grid grid-cols-3'>

        <div className=' ml-6 grid grid-cols-2 gap-4'>

        <div className='w-[200px] h-[120px] bg-gray-200'>
            <div><img className='w-[100px] h-20 ml-10' src={Human}/></div>
        <h1 className='font-bold text-blue-700 text-center mt-2'>Heart disease</h1></div>

        <div className='w-[200px] h-[100px] bg-gray-300'>
        {/* <div><img className='w-[100px] h-20 ml-10' src={Hepatology}/></div> */}
        <h1 className='font-bold text-blue-700 mt-2 text-center'>Hepatology</h1></div>

        <div className='w-[200px] h-[120px] bg-gray-200'>
        <div><img className='w-[100px] h-20 ml-10' src={Huntington}/></div>
        <h1 className='font-bold text-blue-700 mt-2 text-center'>Huntington's</h1></div>

        <div className='w-[200px] h-[120px] bg-gray-200'>
        <div><img className='w-[100px] h-20 ml-10' src={Dental}/></div>
        <h1 className='font-bold text-blue-700 mt-2 text-center'>Dental</h1></div>

        <div className='w-[200px] h-[120px] bg-gray-200'>
        <div><img className='w-[100px] h-20 ml-10' src={Ophthalmology}/></div>
        <h1 className='font-bold text-blue-700 mt-2 text-center'>Ophthalmology</h1></div>

        <div className='w-[200px] h-[120px] bg-gray-200'>
        <div><img className='w-[100px] h-20 ml-10' src={Otology}/></div>
        <h1 className='font-bold text-blue-700 mt-2 text-center'>Otology</h1></div>
    
    </div>
    <div><img className='w-[300px] h-[350px] ml-8' src={Heart}/></div>

    <div className='mr-4'>
        <h1 className='text-blue-700 font-bold'>Heart disease</h1>
     <p>There are many variation of passages

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam eligendi beatae ipsum delectus a. Eos officiis aliquid sit unde aspernatur autem! Culpa ab veniam accusamus corrupti asperiores deserunt totam quo.
     </p>
     <br></br>
     <button className=' bg-blue-500 text-white p-3 rounded-full'> Make Appointment</button> <button className=' bg-gray-200 text-blue-700 p-3 rounded-full border-t-2'>All Department</button>
    </div>
    </div>

    </div>

  )
}

export default Department
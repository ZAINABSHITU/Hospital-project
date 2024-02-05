import React from 'react'
import bg from '../images/doct.png'
import Doctors from '../images/Doctors-2.jpg'
import Health from '../icoins/Health-information.svg'
import Medical from '../icoins/medical.svg'
import Symptom from '../icoins/symptom.svg'
import '../App.css'


function Appointment() {
  return (
    <div className=' mt-8'>

    <div>
    <footer className=' line border-t-2 border-gray-300'></footer>
    </div> 
    <div className='relative'>

<div className=''>

    <img className='main w-full h-screen] opacity-30' src={Doctors}/>
  
</div>

<div className='absolute'>

        <h1 className='text-blue-800 text-center font-bold mt-32'>Why Choose Us</h1>
        <h3 className='text-blue-800 text-center'>Our department & Special Service</h3>

      <div className='grid grid-cols-3  top-50'>


     <div class=" rounded-2xl bg-blue-900 ml-12 mt-20">
  <div class=" flex flex-col gap-8 p-6">
    <p class="text-center text-3xl text-white mb-6">Appointment Form</p>
    <input class="bg-white w-full rounded-lg border border-blue-800 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-blue-800" placeholder="Full Name"/>
    <input class="bg-white w-full rounded-lg border border-blue-800 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Email"/>
    <input class="bg-white w-full rounded-lg border border-blue-3+00 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Phone No."/>
    <label class="flex cursor-pointer items-center justify-between p-1 text-slate-400">
      Accept terms of use
      <div class="relative inline-block">
        <input class="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400 checked:border-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" type="checkbox"/>
        <span class="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-blue-300"></span>
      </div>
    </label>
    <button className="inline-block cursor-pointer rounded-md bg-white px-4 py-3.5 text-center text-sm font-semibold uppercase text-blue-700 transition duration-200 ease-in-out hover:bg-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">Register</button>
    <button className=" bg-white border-2 border-[#3e3e3e] rounded-lg text-blue-600 px-6 py-3 text-base hover:border-[#020202] cursor-pointer transition">Submit</button>

  </div>
</div>
<div><img className='mt-16 h-[94.5vh]' src={bg}/></div>
        
        <div className='mt-20'>
        <div><img className='h-10' src={Health}/></div>
          <h1  className='font-bold text-blue-800'>Health Information</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptates, enim dolorum debitis quam qui expedita voluptatum eaque et atque minima rem molestiae hic dolore provident ducimus ullam consequatur eligendi.
        
        
        <div><img className='h-10' src={Medical}/></div>
          <h1  className='font-bold text-blue-800'>Medical Education</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptates, enim dolorum debitis quam qui expedita voluptatum eaque et atque minima rem molestiae hic dolore provident ducimus ullam consequatur eligendi.
          
       
        <div><img className='h-10 ' src={Symptom}/></div>
          <h1  className='font-bold text-blue-800'>Symptom Check</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptates, enim dolorum debitis quam qui expedita voluptatum eaque et atque minima rem molestiae hic dolore provident ducimus ullam consequatur eligendi.

        </div>
        </div>
 </div>
</div>
     
    </div>
    
  )
}

export default Appointment
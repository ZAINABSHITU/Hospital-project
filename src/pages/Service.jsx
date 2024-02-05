import React from 'react'
import Home from './Home'
import Emergency from '../icoins/ambulance.svg'
import Centre from '../icoins/call-centre.svg'
import Blood from '../icoins/blood-test.svg'
import Surgery from '../icoins/surgery.svg'
import Sample from '../icoins/blood-sample.svg'
import Dental from '../icoins/dental-plus.svg'
import Outdoor from '../icoins/outdoor-trip.svg'
import Ophth from '../icoins/ophthalmology.svg'
import Heart from '../icoins/heart-crack.svg'

function Service() {
  return (
    <>
    {/* <Home/> */}
    <div className='' >
        <h1 className='font-bold text-blue-800 text-center  mt-8'>Service We Offer <br></br></h1>
        <h3 className='text-center'>Our department & special service</h3>

        <div className='grid grid-cols-3 mt-8 gap-8 ml-8'>
          <div>
        <div><img className='h-10' src={Emergency}/></div>
       <h1 className='font-bold text-blue-800'>Emergency Care</h1>
        <p className='gap-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sit corporis rerum qui error quidem iste veniam pariatur repellendus magni facilis modi maiores, ipsam, enim recusandae ad nisi assumenda. Culpa.</p>
          </div>

       <div>
        <div><img className='h-10' src={Centre}/></div>
       <h1 className='font-bold text-blue-800'>Call Center</h1>
        <p className='gap-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sit corporis rerum qui error quidem iste veniam pariatur repellendus magni facilis modi maiores, ipsam, enim recusandae ad nisi assumenda. Culpa.</p>
       </div>
        
        <div>
        <div><img className='h-10' src={Blood}/></div>
       <h1 className='font-bold text-blue-800'>Blood Test</h1>
        <p className='gap-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sit corporis rerum qui error quidem iste veniam pariatur repellendus magni facilis modi maiores, ipsam, enim recusandae ad nisi assumenda. Culpa.</p>
        </div>

        </div>

        <div className='grid grid-cols-3 mt-8 gap-8 ml-8'>

        <div>
        <div><img className='h-10' src={Surgery}/></div>
       <h1 className='font-bold text-blue-800'>Cardiac Surgery</h1>
        <p className='gap-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sit corporis rerum qui error quidem iste veniam pariatur repellendus magni facilis modi maiores, ipsam, enim recusandae ad nisi assumenda. Culpa.</p>

          </div>

          <div>
          <div><img className='h-10' src={Sample}/></div>
       <h1 className='font-bold text-blue-800'>Blood Sample</h1>
        <p className='gap-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sit corporis rerum qui error quidem iste veniam pariatur repellendus magni facilis modi maiores, ipsam, enim recusandae ad nisi assumenda. Culpa.</p>

          </div>

          <div>
          <div><img className='h-10' src={Dental}/></div>
       <h1 className='font-bold text-blue-800'>Dental Care</h1>
       <p className='gap-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sit corporis rerum qui error quidem iste veniam pariatur repellendus magni facilis modi maiores, ipsam, enim recusandae ad nisi assumenda. Culpa.</p>
 
          </div>
      </div>


      <div className='grid grid-cols-3 mt-8 gap-8 ml-8'>
     <div>
     <div><img className='h-10' src={Outdoor}/></div>
       <h1 className='font-bold text-blue-800'>Outdoor CheckUp</h1>
     <p className='gap-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sit corporis rerum qui error quidem iste veniam pariatur repellendus magni facilis modi maiores, ipsam, enim recusandae ad nisi assumenda. Culpa.</p>
     </div>



     <div>
     <div><img className='h-10' src={Ophth}/></div>
       <h1 className='font-bold text-blue-800'>Ophthalmology</h1>
      <p className='gap-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sit corporis rerum qui error quidem iste veniam pariatur repellendus magni facilis modi maiores, ipsam, enim recusandae ad nisi assumenda. Culpa.</p>
     </div>


     <div>
     <div><img className='h-10' src={Heart}/></div>
       <h1 className='font-bold text-blue-800'>Heart Disease</h1>
      <p className='gap-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sit corporis rerum qui error quidem iste veniam pariatur repellendus magni facilis modi maiores, ipsam, enim recusandae ad nisi assumenda. Culpa.</p>

     </div>
</div>
    </div>
        </>
  )
}

export default Service
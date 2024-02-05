import React from 'react'
import Custom from '../images/doctorr.jpg'
import Docto from '../images/docto.png'

function Customer() {
  return (
    <div  className='relat mt-8'>

        <div>
            <img className=' w-full h-screen] opacity-30' src={Custom}/>
        </div>
        
        <div className=' Absol  grid grid-cols-2 '>
            <img className='ml-36  h-[97.5%] mt-24' src={Docto}/>
            <h1 className='font-bold mt-96 mr-4'><span className='text-blue-800'>CUSTOMER COMMENTS</span> <br></br> 
             All the Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos dicta enim consequatur amet dolorum, labore laudantium maiores et incidunt velit, aut aliquid, facere magni architecto? Omnis reprehenderit nemo similique aut.
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores amet delectus expedita quae ipsam, eaque modi nemo sunt tempore beatae?
            </h1>
        </div>
    </div>
  )
}

export default Customer
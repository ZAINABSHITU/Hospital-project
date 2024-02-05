import React from 'react'
import GroupOne from '../images/group1.jpeg'
import GroupTwo from '../images/group2.jpg'
import GroupThree from '../images/group3.jpg'

function Blog() {
  return (
    <div className='bg-white'>

        <div className=' mt-8'>
        <h1 className='text-blue-800 font-bold text-center'>Latest News</h1>
        <h4 className='text-blue-800 text-center'>Our department & special service</h4>
        </div>

        <div className='grid grid-cols-3 gap-8'>

            <div className='ml-16'> 
            <div><img className='h-80 w-96' src={GroupOne}/></div>
            <div className='w-[120px] h-[50px] bg-gray-200 '></div>
            <div className='w-[120px] h-[100px] bg-blue-400'></div>
            <div className='w-[120px] h-[100px] bg-gray-300 '></div>
            <button className=' bg-blue-500 text-white p-3 rounded-full'> Read More</button>
         
            </div>

            <div className=''>
            <div>
            <div><img className=' h-80 w-96 ml-8' src={GroupTwo}/></div>
            </div>
  <div className='flex mt-10 justify-between '>

  <div className='one '>

            <div className='w-[120px] h-[50px] bg-gray-200 ml-8 '></div>
            <div className='w-[120px] h-[100px] bg-blue-400 ml-8'><span className='two'>23</span><br/><p className='three'>January</p></div>
            <div className='w-[120px] h-[100px] bg-gray-200 ml-8'></div>
          
  </ div>
        <div className='mr-9'>

            <div className=''>
            <h6 className=''><span className='font-bold '>Tag: </span><span className='text-blue-800'>Medical Doctor</span><br></br>
            <h1 className='font-bold '>Latest blog post with image</h1>
            

            </h6>
            </div>
            <button className=' bg-blue-500 text-white p-3 rounded-full'> Read More</button>
        </div>
  </div>

            </div>



            <div>
            <div><img className=' h-80 w-96' src={GroupThree}/></div>
            <div className='w-[120px] h-[50px] bg-gray-200 '> </div>
            <div className='w-[120px] h-[100px] bg-blue-400 '> </div>
            <div className='w-[120px] h-[100px] bg-gray-200 '> </div>
            <button className=' bg-blue-500 text-white p-3 rounded-full'> Read More</button>
            </div>
            </div>
        </div>
       
  )
}

export default Blog
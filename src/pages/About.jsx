import React from 'react'
import picture from '../assets/img/doctor.jpg'
import Pin from '../images/drugs.jpg'
import Home from './Home'



function About() {
  return (
    <>
    {/* <Home/> */}
      <footer className='border-t-2 border-blue-800 text-center mt-2'></footer>

    <div className=' grid grid-cols-3 gap-16 mt-8 '>
        <div className='h-full'><img src={picture} className=' h-80 rounded-md ml-20 hover:scale-90'/></div>
        <div className='h-full'><img src={Pin} className=' h-80 rounded-md ml-8 hover:scale-90 '/></div>

        <h1 className='font-bold '> <span className='text-blue-800'><i>ABOUT</i></span>  
        <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, voluptas. Consequatur eum laboriosam voluptatibus perferendis alias quia aspernatur, dolore harum, id dicta esse nisi commodi beatae doloremque officiis totam facilis?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint culpa accusamus delectus enim nemo rerum reprehenderit repellat voluptas dolores aspernatur earum tenetur aliquid error laudantium nihil, natus, molestias nam odio.</p>
        
        <button className='text-white bg-blue-700 p-2 rounded-full mb-'> READ MORE</button>
        </h1>
    </div>

<div className='flex justify-center  text-center mt-4'>

  <div className='w-[350px] h-[300px] bg-blue-500'>
    <h1 className='font-bold text-white mt-2'>Our Service List</h1>
    <h4 className='text-white mt-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam ut aliquam fuga omnis animi temporibus non minima iste fugiat, saepe ab alias dignissimos repellat? Sed in consequatur modi dolores qui?</h4>
    <button className='text-white bg-blue-700 p-3 rounded-full mt-2'> VIEW ALL SERVICES</button>
  </div>

  <div className='w-[350px] h-[300px] bg-blue-600'>
  <h1 className='font-bold text-white mt-2'>Our Benefits</h1>
  1.Qualified Staffs
  <h4 className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi perspiciatis officia voluptate eos blanditiis aspernatur provident et nesciunt labore, at ea cumque molestiae necessitatibus quisquam doloribus inventore, magnam ipsam reprehenderit ad quam voluptates, voluptas vitae? Nihil consequuntur alias quas, molestias expedita, suscipit voluptatum nostrum iusto voluptatibus aut id natus dolor!</h4>
  </div>

 
  <div className='w-[350px] h-[300px] bg-blue-700'>
  <h1 className='font-bold text-white mt-2'> Working Hours:</h1>
  
  <h4 className='text-white'>Monday-Wednesday 06:00am-10:00pm</h4>
  <h4 className='text-white'>Thursday-Friday 06:00am-10:00pm</h4>
  <h4 className='text-white'>Saturday 06:00am-10:00pm</h4>
  <h4 className='text-white'>Sunday Closed</h4>
  </div>
  </div>

 

  <footer className='border-t-2 border-gray-300 text-center mt-2'></footer>
    
    </>
  )
}

export default About
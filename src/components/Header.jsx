import React from 'react'
import { Link } from 'react-router'

function Header() {
  return (
    <>
   <div className='bg-gray-900 text-white md:text-3xl font-bold w-screen flex justify-between'>
       <Link to="/"> <h1 className='md:p-6 md:mt-1'>Password Manager</h1></Link>
        <div className='flex md:gap-10 md:mr-6'>
            <Link to='/passwordgenerator'><button className='bg-blue-900 m-5 md:text-xl md:px-3 md:py-3 rounded-lg'>Password Generator</button></Link>
            <Link to='/passwordmanager'><button className='bg-blue-900 m-5 md:text-xl md:px-3 md:py-3 rounded-lg'>Password Manager</button></Link>
        
       
        </div>
   </div>
    </>
  )
}

export default Header
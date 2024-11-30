import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-20 bg-[#faf9f8] flex justify-center items-center'>
        <div className='w-[90%] h-[90%] flex justify-between items-center'>
            <h1 className='text-2xl lg:text-4xl md:text-4xl sm:text-3xl font-medium'>Admin</h1>
                <ul className='flex gap-5 text-xl'>
                    <Link className='hover:text-[#3f4042] font-normal' to="/">Users</Link>
                    <Link className='hover:text-[#3f4042] font-normal' to="adduser">AddUser</Link>
                    {/* <Link to="">Table</Link> */}
                </ul>
        </div>
    </div>
  )
}

export default Navbar
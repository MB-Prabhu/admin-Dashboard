import React, { useContext } from 'react'
import { MyContext } from './AdminContext'

const SingleUser = ({userName, userRole, userPermission, idx}) => {
    let {handleDelete, handleEdit} = useContext(MyContext)
  return (
    <>
    <div className='w-60 rounded-lg p-4 shadow-lg bg-[#faf9f8]'>
      <img src="" alt="" className='mb-2 rounded-full'/>
      <p className='text-[#555353] text-lg'>Name: <span className='text-black'>{userName}</span></p>
      <div>

      <p className='text-[#555353] text-lg'>Role <span className='text-black'>{userRole}</span></p>

      <p className='text-[#555353] text-lg'>Permission <span className='text-black'>{userPermission}</span></p>
        
      </div>
      <div className='w-full flex gap-3'>
      <button className='px-0 py-1 text-lg rounded-lg w-[40%] bg-green-500 active:bg-green-300'  onClick={()=> handleEdit(idx)}>Edit</button>
      <button className='px-0 py-1 text-lg rounded-lg w-[40%] bg-red-500   active:bg-red-300'  onClick={()=> handleDelete(idx)}>Delete</button>
      </div>
    </div>
    </>
  )
}

export default SingleUser
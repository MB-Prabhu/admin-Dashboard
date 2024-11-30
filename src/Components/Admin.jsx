import React, { useContext, useState } from 'react'
import { MyContext } from './AdminContext'
import SingleUser from './SingleUser'
import UpdateForm from './UpdateForm'

const Admin = () => {
    const {userData, isEditing} = useContext(MyContext)   
  return (
    <div className='w-full '>

      <h2 className='my-4 text-2xl text-[#212020] text-center lg:text-4xl font-medium md:text-4xl sm:text-3xl'>Users List</h2>

     <div className='px-2'>
     <div className='p-6 grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 md:gap-4 sm:grid-cols-2 gap-y-5'>
      {userData.length>0 && userData.map(({userName, userRole, userPermission}, idx)=>(
                <SingleUser key={idx} userName={userName} userRole={userRole} userPermission={userPermission} idx={idx} />
      ))}
      </div>
     </div>
      {isEditing && <UpdateForm />}
    </div>
  )
}

export default Admin
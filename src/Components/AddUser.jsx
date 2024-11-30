import React, { useContext } from 'react'
import { MyContext } from './AdminContext'

const AddUser = () => {
    const {handleChange, handleSubmit, formDetails, successMessage} = useContext(MyContext)

  return (
    <div className=''>
        <div className='mt-40 mx-auto w-[250px] lg:w-[400px] p-5 bg-[#f7f7f7] rounded-lg shadow-1xl'>
            
            <h2 className='text-3xl text-center mb-5'> User Form </h2>
        
        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-4'>
                {successMessage && <div className='text-lg mx-auto m-1 text-center w-[80%] rounded-md py-2 bg-[#63ed91] text-[#19c235]'>{successMessage}</div>}
                <input type="text"
                 placeholder='Enter the User Name' 
                 onChange={(e)=> handleChange(e)} 
                 name='userName'
                 value={formDetails.userName}
                 required
                 className='border-b-2 px-2 sm:px-5 text-lg  border-[#9e9e9e] py-1 sm:py-2 outline-none lg:text-xl text-black' />

            <div className='flex w-[100%] justify-around items-center'>
            <label htmlFor="" className='text-lg font-medium'>User Role </label>
                 <select name="userRole" 
                 required
                 value={formDetails.userRole}
                  id="" onChange={(e)=> handleChange(e)}
                  className='py-1 lg:px-5 lg:py-3 bg-[#ffffff] lg:text-xl border-[#9e9e9e] border-b-2'>
                    <option value="">Select Role</option>
                    <option value="Manager">Manager</option>
                    <option value="Asst.Manager">Asst.Manager</option>
                    <option value="Salesman">Salesman</option>
                    <option value="Customer Care">Customer Care</option>
                    <option value="Delivery">Delivery</option>
                </select>
            </div>
               
            <div className='flex w-[100%] justify-center sm:gap-5 items-center'>
            <label htmlFor="" className='text-lg font-medium'>User Permisision </label>
                 <select name="userPermission" 
                 required
                 value={formDetails.userPermission}
                  id="" onChange={(e)=> handleChange(e)}
                  className='py-1 lg:px-5 lg:py-3 bg-[#ffffff] lg:text-xl border-[#9e9e9e] border-b-2'>
                    <option value="">Permission</option>
                    <option value="invigilate">invigilate</option>
                    <option value="sales">sales</option>
                    <option value="support">support</option>
                    <option value="provide">provide</option>
                </select>
            </div>
                <button className=' px-2  sm:w-[50%] sm:text-2xl mx-auto rounded-md  bg-[#6784e0] py-2 sm:px-0 active:bg-blue-200'>submit</button>
        </form>
        </div>
    </div>
  )
}

export default AddUser
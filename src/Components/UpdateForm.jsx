import React, { useContext } from 'react'
import { MyContext } from './AdminContext'

const UpdateForm = () => {
    const {isEditing, formDetails, handleUpdate, handleChange, closeEditForm} = useContext(MyContext)
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center bg-opacity-70'>
            
            <div className='relative w-[400px] p-5 bg-white rounded-lg shadow-1xl'>
            <button
            onClick={closeEditForm}
            className='absolute top-2 right-5 text-2xl font-semibold'>x</button> 
            
            <h2 className='text-3xl text-center mb-5'>Update User Details</h2>
            
            <form action="" onSubmit={handleUpdate} className='w-full' >
                <p className='text-xl my-2 sm:text-2xl font-semibold'>Name: <span className='font-normal'>{formDetails.userName}</span></p>

               {/* <div className='my-2 flex gap-3 items-center'>
               <label htmlFor="editrole" className='text-xl sm:text-2xl mb-2 font-semibold'>Edit Role: </label>
                <input type="text" 
                id='editrole'
                name='userRole'
                value={formDetails.userRole}
                onChange={handleChange}
                className='border-2 text-lg border-[#333131] p-1'/>
               </div> */}

            <div className='flex w-[100%] justify-between items-center'>
            <label htmlFor="" className='text-lg font-medium'>User Role </label>
                 <select name="userRole" 
                 required
                 value={formDetails.userRole}
                  id="" onChange={(e)=> handleChange(e)}
                  className='py-1 sm:px-5 text-lg sm:py-2 border-[#9e9e9e] border-b-2'>
                    <option value="">Select Role</option>
                    <option value="Manager">Manager</option>
                    <option value="Asst.Manager">Asst.Manager</option>
                    <option value="Salesman">Salesman</option>
                    <option value="Customer Care">Customer Care</option>
                    <option value="Delivery">Delivery</option>
                </select>
            </div>

                <div className='my-2 flex justify-between items-center'>
                <label htmlFor="" className='text-lg sm:text-xl font-semibold'>update Permissions: </label>

                <select name="userPermission" id=""
                 onChange={handleChange} 
                 value={formDetails.userPermission}
                 className='text-xl border-b-2 border-[#9e9e9e]  sm:py-2 sm:px-5'>
                    <option value="">Permission</option>
                    <option value="invigilate">invigilate</option>
                    <option value="sales">sales</option>
                    <option value="support">support</option>
                    <option value="provide">provide</option>
                </select>
                </div>

                
                <button type='submit' className='w-[30%] my-3 ml-[33%] text-2xl rounded-md  bg-[#6784e0] py-1 active:bg-blue-200'>update</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateForm
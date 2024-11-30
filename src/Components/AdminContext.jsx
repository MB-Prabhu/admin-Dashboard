import React, { createContext, useState } from 'react'
import user from '../Mockdata/user.json'
export const MyContext = createContext()

const AdminContext = ({children}) => {
    
    const [formDetails, setFormDetails] = useState({
        userName: "",
        userRole: "",
        userPermission: ""
    })

    const [userData, setUserData] = useState(user)
    
    const [successMessage, setSuccessMessage] = useState("")
    const [customError, setCustomerror] = useState("")
    const [editIndex, setEditIndex] = useState(null); 
    const [isEditing, setIsEditing] = useState(false); 

    let handleSubmit = (e)=>{
        e.preventDefault()
        setUserData((prev)=>[...prev, formDetails])
        setSuccessMessage("Successfully Added")
        setFormDetails({
            userName: "",
            userRole: "",
            userPermission: ""
        })
        setTimeout(()=> {
            setSuccessMessage("")
        }, 1500)
    }

    let handleChange = ({target: {name, value}})=> {
        setFormDetails((prev)=> ({...prev, [name]: value}))
    }

    let handleEdit = (index)=>{
        const userToEdit = userData[index];
        setFormDetails({
            userName: userToEdit.userName,
            userRole: userToEdit.userRole,
            userPermission: userToEdit.userPermission
        })
        setEditIndex(index)
        setIsEditing(true)
       
    }

    let handleDelete = (index)=>{
        let remainingData = userData.filter((ele, idx)=> idx != index)
        setUserData(remainingData)   
    }

    let closeEditForm = ()=>{
        setEditIndex(null)
        setIsEditing(false)
    }

    let handleUpdate = (e)=> {
        e.preventDefault()
        setUserData((prev)=>{
            let existingData = [...prev]
            existingData[editIndex] = {
                ...existingData[editIndex],
                userRole: formDetails.userRole,
                userPermission: formDetails.userPermission
            }
            return existingData
        })
        setEditIndex(null)
        setIsEditing(false)
    }
  
    let value = {
        handleChange, handleSubmit, userData, formDetails,
        handleEdit, handleDelete, successMessage, isEditing, 
        closeEditForm, handleUpdate
    }
    
    return <MyContext.Provider value={value}>
            {children}
    </MyContext.Provider>
}

export default AdminContext
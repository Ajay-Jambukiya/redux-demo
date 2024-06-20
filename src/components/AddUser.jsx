import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addUser } from '../redux/userSlice'

let initialState={
    id:'',username:'',email:'',password:'',confirmpassword:'',role:'user'
    }

const AddUser = () => {
    const [user,setUser]=useState({...initialState})
    const navigate=useNavigate()
    const dispatch=useDispatch()

    let handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('https://664619b951e227f23aadc7d0.mockapi.io/users',user).then(()=>{
            toast.success('user added')
            navigate('/view')
        }).catch((error)=>
            toast.error(error.massage))

        dispatch(addUser(user))
        toast.success('user added')
        navigate('/view')
    }

  return (
    <div>
      <h1>Add User</h1>
      <div className="col-6">
          <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Name</label>
            <input type="text" className='form-control' name="username" value={user.username}
            onChange={(e)=>setUser({...user,username:e.target.value})}></input>
          </div>
          <div className="form-group mb-3">
            <label>Email</label>
            <input type="text" className='form-control' name="email" value={user.email}
            onChange={(e)=>setUser({...user,email:e.target.value})}></input>
          </div>
          <div className="form-group mb-3">
            <label>Password</label>
            <input type="password" className='form-control' name="password" value={user.password}
            onChange={(e)=>setUser({...user,password:e.target.value})}></input>
          </div>
          <div className="form-group mb-3">
            <label>Confirm Password</label>
            <input type="password" className='form-control' name="confirmpassword" value={user.confirmpassword}
            onChange={(e)=>setUser({...user,confirmpassword:e.target.value})}></input>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" name="" id="" className="btn btn-primary">Add</button>
          </div>
          </form>
        </div>
    </div>
  )
}

export default AddUser

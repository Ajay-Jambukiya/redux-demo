import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllUser, removeUser } from '../redux/userSlice'

const ViewUser = () => {
    const selector=useSelector((state)=>state.user.users)
    let [data,setData]=useState([])
    const dispatch=useDispatch()

    useEffect(()=>{
        setData(selector)
    })
  return (
      <div className='container mt-3'>
        <h1>List of Users</h1>
        {/* <div className='col-8 mt-3'> */}
            <div className="table-responsive">
            <table className="table table-striped table-hover table-borderless table-primary align-middle">
                <thead className="table-light">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody className="table-group-divider">
                    {data.length==0 ? <tr><td colSpan="4">No record found</td></tr> :
                    <>
                    {data.map((item,index)=>
                    <tr className="table-primary" key={index}>
                        <td scope="row">{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                        <td>
                            <button type="button" className="btn btn-danger">
                                <i className='bi bi-trash' onClick={()=>dispatch(removeUser(index))}></i>
                            </button>
                        </td>
                    </tr>
                    )}
                    </>
                    }
                </tbody>
                <tfoot>
                    <button type="button" className="btn btn-danger mt-2" onClick={()=>dispatch(removeAllUser())}>Remove All Users</button>
                </tfoot>
            </table>
            </div>
        {/* </div> */}
    </div>
  )
}

export default ViewUser

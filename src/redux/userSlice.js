import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
name:'user',
initialState:{users:localStorage.getItem('users')
                    ? JSON.parse(localStorage.getItem('users'))
                    : []
            },
reducers:{
    addUser(state,action){
        // console.log(action.payload)
        state.users.push(action.payload)
        localStorage.setItem('users',JSON.stringify(state.users))
    },
    removeUser(state,action){
        // console.log(action.payload)
        state.users.splice(action.payload,1)
        localStorage.setItem('users',JSON.stringify(state.users))
    },
    removeAllUser(state,action){
        state.users=[]
        localStorage.removeItem("users")
    }
}
})

export const {addUser,removeUser,removeAllUser}=userSlice.actions
export default userSlice
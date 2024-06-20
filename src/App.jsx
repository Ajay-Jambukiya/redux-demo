import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AddUser from './components/AddUser'
import ViewUser from './components/ViewUser'

function App() {


  return (
    <>
      <ToastContainer autoClose={1000}></ToastContainer>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<AddUser/>}/>
          <Route path='/view' element={<ViewUser/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App

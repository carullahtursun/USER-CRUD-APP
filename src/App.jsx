import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom"
import Layout from './layouts/Layout'

import Users from './pages/Users'
import Home from './pages/Home'
import UserUpdate from './components/UserUpdate'
import { useSelector } from 'react-redux'
import Login from './pages/Login'

function App() {
  const user = useSelector(store => store.auth.user)
const navigate = useNavigate()
  
  if (user === null) {
    navigate("/login")
  }

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route element={<Layout />} >
          <Route path="/" element={< Users/>} />
          <Route path="/users" element={<Home />} />
          <Route path="/users/:id" element={<UserUpdate />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

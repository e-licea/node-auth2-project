import React, { useState } from 'react'
import Login from './Components/Login'

export default function App() {
  
  const [loggedIn, setIsLoggedIn] = useState(false)
  
  return (
    <div className = 'App'>
       {(loggedIn)?null:<Login/>}
    </div>
  )
}

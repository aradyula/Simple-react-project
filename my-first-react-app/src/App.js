import React from 'react'
import { useEffect,useState } from 'react'


function App() {
  const [backend,setBackendData]=useState([{}])
  useEffect(()=>{
    fetch("/api").then(
      response=>response.json())
      .then(
        data=>{setBackendData(data)}
      )
    
  },[])
  return (
    (typeof backend.users=="undefined")?
    (<p>Loading...</p>):
    (backend.users.map((user,i)=>(<p key={i}>{user}</p>)))
  )
}

export default App
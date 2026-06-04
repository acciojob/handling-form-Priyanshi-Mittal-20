import React from 'react'
import { useState,useEffect } from 'react'

const HandlingForm = () => {
  const [input,setInput]=useState("")
  function handleInput(e)
  {
    setInput(e.target.value)
  }
  useEffect(()=>{
    console.log("value changed: ",input)
  },[input])
  return (
    <div>
      <input type="text" value={input} onChange={(e)=>handleInput(e)} />
    </div>
  )
}

export default HandlingForm

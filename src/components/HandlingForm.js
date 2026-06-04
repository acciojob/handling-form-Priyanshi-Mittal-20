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
    <form>
      <input type="text" value={input} onChange={(e)=>handleInput(e)} />
    </form>
  )
}

export default HandlingForm

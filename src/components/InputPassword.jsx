import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPass, removeAll } from '../store/passwordSlice'


function InputPassword() {
 const[webName,setwebName] = useState('')
 const[uId,setUId] = useState('')
 const[pass,setPass] = useState('')
 const disPatch =  useDispatch()
 
const addPassword = ()=>{
  if(!webName || !uId || !pass){
    alert("All Fields Are Required")
    return
  }
  
     disPatch(addPass({site:webName,userId :uId,pass:pass}))
    setwebName("")
    setUId("")
    setPass("")
}


  return (
   <>
   <div className='ml-52 mt-8 p-5 rounded-lg' >

    <input className='w-3/12 bg-slate-900
     text-white mr-5 px-3 rounded-lg py-2 focus:outline-none focus:ring-black focus:ring-2' value={webName} onChange={(e)=>{setwebName(e.target.value)}} type="text" placeholder='WebSites Name' />
    <input className='w-3/12 bg-slate-900 text-white mr-5 px-3 rounded-lg py-2 focus:outline-none focus:ring-black focus:ring-2' value={uId} onChange={(e)=>{setUId(e.target.value)}} type="text" placeholder='User Id' />
    <input className='w-3/12 bg-slate-900 text-white mr-5 px-3 rounded-lg py-2 focus:outline-none focus:ring-black focus:ring-2' value={pass} onChange={(e)=>{setPass(e.target.value)}} type="text" placeholder='Password' />
    <button className='bg-blue-600 px-5 py-2 rounded-lg text-white' onClick={addPassword}>Save</button>
    
   </div>
   </>
  )
}

export default InputPassword
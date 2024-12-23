import React, { useRef, useState,useEffect } from 'react'

function PasswordGenerator() {
 const [length,setLength] = useState(8)
 const [value,setValue] = useState("")
 const [number,setNumber] = useState(false)
 const [specialCharacter,setSpecialCharacter] = useState(false)
 const pass = useRef()


 const passwordGenerator= ()=>{

  let password = ""
  let string = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm"
  if( number === true){
    string = string + "1234567890"
  }
  if( specialCharacter === true){
    string = string + "`~!@#$%^&*()_+*/-/.,'?}]{[|<,"
  }
  for(let i = 1; i <= length ; i++){
    const randomNo = Math.floor(Math.random() * ((string.length) - 0) ) + 0;
    password = password + string.charAt(randomNo)
  }
  setValue(password)
 }

 useEffect(()=>{
 passwordGenerator()
  
  
 },[length,number,specialCharacter])

  return (
   <>
   <div className='bg-gray-900 mt-3 text-white overflow-hidden rounded-2xl shadow-lg md:min-h-[350px] md:max-w-[850px] md:mt-5 md:m-auto'>
      <h1 className='md:text-4xl text-2xl text-center bg-blue-800 py-2 md:py-5 font-bold text-white'>Password Generator</h1>
      <div className='mt-5 md:ml-20 ml-16'>
      <input type="text" value={value} readOnly ref={pass}
      className='md:w-9/12 text-black py-2 selection:bg-green-400 px-2 rounded-l-xl md:text-2xl focus:outline-none'
      />
      <button className='bg-blue-800 py-[9px] md:text-2xl rounded-r-xl px-4 font-semibold'
      onClick={ ()=>{
        navigator.clipboard.writeText(pass?.current?.value)
        pass?.current?.select();
        pass?.current?.setSelectionRange(0, 30)
       
       }}
      >Copy</button>
      </div>
      <div className='md:p-10 p-7 text-center'>
      <label className='font-semibold  md:text-xl' htmlFor="">Length ({length}) </label>
      <input type="range" 
      className='mr-3 w-3/12 accent-yellow-400  rounded-xl'
      min={4} 
      max={30} 
      value={length} 
      onChange={(e)=>{setLength(e.target.value)}} />
      <label className='font-semibold  md:text-xl' htmlFor="">Number</label>
      <input  className='mr-3 ml-3  md:w-6 md:h-6'
       type="checkbox" onChange={()=>{setNumber(!number)}}/>
      <label className='font-semibold  md:text-xl' htmlFor="">Special Character</label>
      <input className='mr-3 ml-3 md:w-6 md:h-6 ' type="checkbox" onChange={()=>{setSpecialCharacter(!specialCharacter)}} />
      </div>
      <button onClick={passwordGenerator} className='bg-green-500 ml-[120px] md:ml-[350px] md:py-2 mb-3 md:text-2xl rounded-xl px-4 font-semibold text-black'>Regenerate</button>
      </div>
      
   </>
  )
}

export default PasswordGenerator
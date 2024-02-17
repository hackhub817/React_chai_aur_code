import { useCallback, useState,useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [charAll,setcharAll]=useState(false);
  const [numAll,setnumAll] =useState(false);
  const [password,setPassword]=useState("")
  
  
  // use of callback taaaki ham kuch bhi change kare apni input field main 
  // TO PASSWORD PHIR SE NAYA BANN JAAYE

  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijaklmnopqrstuvwxyz"
    if(numAll)
    str+="0123456789"
    if(charAll)
    str+="!@#$%^&*("

    for(let i = 0; i<length ;i++)
    {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass);
  },[length,numAll,charAll,setPassword])

  //use of ref KYUKI HAM EK BAAR MAIN HI LOAD KARKE FUNTIION KO CALL KARNA 
  //CHAHTE H

  useEffect(() => {
    passwordGenerator()
  }, [length, numAll, charAll, passwordGenerator])



  
  return (
    <>
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
           
        />
        </div>
        <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numAll}
          id="numberInput"
          onChange={() => {
              setnumAll((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
        
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAll}
              id="characterInput"
              onChange={() => {
                  setcharAll((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>



        </div>

    </>
  )
}

export default App

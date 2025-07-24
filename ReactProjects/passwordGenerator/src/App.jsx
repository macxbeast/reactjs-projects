import { useState ,useCallback, useEffect, useRef} from 'react'

function App() {
  const [length,setLength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*(){}[]~?/><"
    for(let i=0;i<length;i++){
      pass+=str[Math.floor(Math.random()*str.length)]
      
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  const copyToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,password.length)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  

  return (
    <>
      <h1 className='text-4xl text-center text-white mt-20'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-600'>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white text-black'
            placeholder='password'
            readOnly
            ref={passwordRef}
            />
            <button
            onClick={copyToClipboard}
             className='transition-transform duration-200 hover:scale-110 outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded'
            >
            copy</button>
            
        </div>
        <div className='flex text-sm gap-x-4'>

          <div className="flex items-center gap-x-1">
            <input
            type="range"
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={(e)=>{setNumberAllowed((prev)=>(!prev))}} 
              />
              <label>Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onChange={()=>{
                  setCharAllowed((prev)=>(!prev))
                }} 
              />
              <label>Character</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

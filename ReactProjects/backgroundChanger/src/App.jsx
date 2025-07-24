import {useState} from "react"

function App() {

  const [color,setColor]=useState("maroon")
  let colors=[
    {name:"red",textColor:"white"},
    {name:"blue",textColor:"white"},
    {name:"green",textColor:"white"},
    {name:"white",textColor:"black"},
    {name:"yellow",textColor:"black"},
    {name:"violet",textColor:"white"},
    {name:"magenta",textColor:"white"},
    {name:"orange",textColor:"white"},
    {name:"purple",textColor:"white"},
    {name:"aqua",textColor:"white"},
  ]

  return (
    <div className="w-full h-screen"
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-18 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map(({name,textColor})=>{
            return (
            <button onClick={()=>setColor(name)}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor:name, color:textColor}}>{name}</button>)
          })}
        
{/* 
          <button onClick={()=>setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}>Red</button>
          
          <button onClick={()=>setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setColor("Blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"orange"}}>Orange</button>
          <button onClick={()=>setColor("Yellow")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"Yellow"}}>Yellow</button>
          <button onClick={()=>setColor("magenta")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"magenta"}}>Magenta</button>
          <button onClick={()=>setColor("Aqua")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"aqua"}}>Aqua</button>
          <button onClick={()=>setColor("white")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"white"}}>White</button>
          <button onClick={()=>setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"black"}}>Black</button> */}

          
        </div>   
      </div>
    </div>
  )
}

export default App

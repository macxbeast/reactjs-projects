import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github(){
    const data = useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/macxbeast')
    //     .then((res)=>res.json())
    //     .then((data)=>setData(data))
    // },[])
    return (
        <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
            Github-followers : {data.followers}
            <br/>
            Public-repos : {data.public_repos}
            <img src={data.avatar_url} alt="Git Picture" width={300}/>
            </div>
    )
}

export default Github

export const githubinfoloader = async ()=>{
    const res =await fetch("https://api.github.com/users/macxbeast")
    return res.json()  //we can also have used "await", and then return the value
}                      //but, this also works, because loader can do this task,
                       //underhood, as it expects a promise or a resolved object

                       // this concept is used, to reduce the wait time, as soon
                       //as user's cursor go to github, it will start fetching 
                       //the value, which is not in the case of useEffect(to get
                       //that data in hand in cache, even before visiting it)
import { useEffect, useState } from "react"

export default function Clock() {
    const [time,setTime]=useState(new Date()) 

    const refreshClock=()=>setTime(new Date())

    useEffect(()=>{
        const intervalId=setInterval(refreshClock,1000)
        return ()=>clearInterval(intervalId)
    },[])
    
  return (
    <div className='text-center'>
        <h4 className='text-9xl text-green-500'>{time.getHours()}</h4>
        <h4 className='text-9xl text-blue-500'>{time.getMinutes().toString().padStart(2,0)}</h4>
    </div>
  )
}

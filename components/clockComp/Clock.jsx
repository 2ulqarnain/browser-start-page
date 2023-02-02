import { useEffect, useState } from "react"
import {Kanit} from "@next/font/google"

const fred_font = Kanit({
  subsets: ["latin"],
  weight:"400"
});

export default function Clock() {
    const [time,setTime]=useState(new Date())

    const refreshClock=()=>setTime(new Date())


    useEffect(()=>{
        const intervalId=setInterval(refreshClock,1000)
        return ()=>clearInterval(intervalId)
    },[])
    
  return (
    <div className={`text-center ${fred_font.className}`}>
        <h4 className='text-9xl text-green-500'>{time.toLocaleTimeString('en-uk',{hour:"numeric"})}</h4>
        <h4 className='text-9xl text-blue-500'>{time.toLocaleTimeString('en-uk',{minute:"numeric"})}</h4>
        <h4 className='text-2xl text-zinc-400'>{time.toLocaleString('en-uk',{dateStyle:"full"})}</h4>
    </div>
  )
}

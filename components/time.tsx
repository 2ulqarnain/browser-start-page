"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  className?: string,
};

const returnTime=()=>(new Date()
        .toLocaleString("en-us", { timeStyle: "short", hour12: false }))
        .split(":")

export default function Time({ className }: Props) {
    const [time,setTime] = useState(returnTime())
    const tailwindColors = [
        'text-gray-400',
        'text-red-400',
        'text-orange-400',
        'text-yellow-400',
        'text-green-400',
        'text-teal-400',
        'text-blue-400',
        'text-indigo-400',
        'text-purple-400',
        'text-pink-400'
      ];
    
      const [primaryColorClass,secondaryColorClass]=useMemo(()=>[tailwindColors[Math.floor(Math.random()*10)],tailwindColors[Math.floor(Math.random()*10)]],[])
    useEffect(()=>{
        const timeIntervalId=setInterval(()=>setTime(returnTime()),1000)
        return ()=>clearInterval(timeIntervalId)
    },[])
    return (
        <div className="font-monoton text-center text-8xl">
            <p className={primaryColorClass}>{time[0]}</p>
            <p className={secondaryColorClass}>{time[1]}</p>
        </div>
    );
}

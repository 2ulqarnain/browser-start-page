"use client";

import { useEffect, useState } from "react";

type Props = {
  className?: string,
  primaryColorClass:string,
  secondaryColorClass:string
};

const returnTime=()=>(new Date()
        .toLocaleString("en-us", { timeStyle: "short", hour12: false }))
        .split(":")

export default function Time({ className,primaryColorClass,secondaryColorClass }: Props) {
    const [time,setTime] = useState(returnTime())
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

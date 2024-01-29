"use client";

import { useEffect, useState } from "react";

const returnTime=()=>new Date().toLocaleTimeString("en-us", { timeStyle: "short", hour12: false })

export default function Time() {
    const [time,setTime] = useState(returnTime())
    useEffect(()=>{
        const timeIntervalId=setInterval(()=>setTime(returnTime()),1000)
        return ()=>clearInterval(timeIntervalId)
    },[])
    return (
        <p className={"text-8xl"}>{time}</p>
    );
}
import { NextResponse } from "next/server"

export const GET = async()=>{
    const json = await fetch("https://ifconfig.co/json")
    const data = await json.json()
    return NextResponse.json({ data })
}
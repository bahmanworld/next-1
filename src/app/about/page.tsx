import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className='text-3xl'>About Page</div>
        <Link href={"/"}>Go Home Page</Link>
    </main>
  )
}

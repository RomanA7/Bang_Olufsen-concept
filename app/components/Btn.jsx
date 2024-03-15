import Link from 'next/link'
import React from 'react'

function Btn({url, name}) {
  return (
    <Link className="z-10" href={url}><button className="bg-yellow-400 py-4 px-[80px] rounded-[6px] cursor-pointer hover:bg-yellow-300 transition hover:duration-180 hover:scale-[1.01] ease-in">{name}</button></Link>
    
  )
}

export default Btn
import React from 'react'
import Btn from '../components/Btn'

function page() {
  return (
    <div className="flex flex-col h-[80vh] justify-center items-center">
      <h1 className="text-center px-12 text-zinc-600 text-4xl leading-[2.7rem] lg:text-[60px] lg:leading-[4.4rem] tracking-tighter mb-[30px]">UNDER CONSTRUCTION!</h1>
      <Btn  url={'/'} name={"Go Back"}/>
    </div>
  )
}

export default page
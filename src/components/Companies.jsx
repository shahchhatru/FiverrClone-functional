import React from 'react'
import Image from 'next/image'

const Companies = () => {
  return (
    <div className="flex items-center justify-center text-gray-400 text-2xl font-bold min-h-[11vh]">
        trusted by :&nbsp;
        <ul className="flex justify-center gap-10 ml-10">
          {[1,2,3,4,5].map((num)=>{
            return(<li key={num} className="relative h-[4.5rem] w-[4.5rem] "> 
              <Image alt="trusted branches"  fill  src={`/trusted${num}.png`} />
            </li>)
          })}
        </ul>
    </div>
  )
}

export default Companies
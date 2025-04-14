import { getTechLogos,cn } from '@/lib/utils'
import React from 'react'
import Image from 'next/image'

const DisplayTechIcons = async({techStack}:TechIconProps) => {
    const techIcons =await getTechLogos(techStack)
  return (
    <div className='flex flex-row'>{techIcons.slice(0, 3).map(({tech,url}, index) =>(
        <div key={tech} className={cn('relative group bg-dark-300 rounded-full p-2 flex-center',index >= 1 && '-ml-4')}>
            <span className='tech-tooltip'>{tech}</span>
            <Image src={url} alt={tech} width={100} height={100} className='w-8 h-8 group-hover:w-10 group-hover:h-10 transition-all duration-300 ease-in-out' />
        </div>
    ))}</div>
  )
}

export default DisplayTechIcons
import { Stats } from '@/utils/stats'
import React from 'react'

const CardArticle = ({ icon: Icon, text, num, color }: Stats) => {
    
    console.log(color);
    

  return (
      <article className='card p-4 rounded-lg shadow-lg'>
          <div className='flex items-center gap-8'>
              <span className={`p-2 rounded-full text-white shadow-md `} style={{ backgroundColor: color }}>
              <Icon size={26}  />
              </span>
              <div>
                  <h3 className='font-semibold text-xl lg:text-2xl'>{num}</h3>
                  <p className='text lg:text-lg'>{text}</p>
              </div>
          </div>
    </article>
  )
}

export default CardArticle
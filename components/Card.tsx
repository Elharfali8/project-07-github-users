import React from 'react'
import { BsBuildings } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoLink } from "react-icons/io5";


const Card = ({title, btn, name, tagName, desc, company, location, link}:{title: string, btn: string, name: string, tagName: string, desc: string, company:string, location:string, link:string}) => {
  return (
      <article className=''>
          <span className='card py-1 px-4 md:text-lg text capitalize rounded-t-lg'>{title}</span>
          <div className='py-6 px-8 card rounded-tr-lg rounded-b-lg shadow-md'>
              {title === 'user' && (
                  <div>
                      <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-4'>
                          <span className=' h-14 w-14 bg-blue-400 rounded-full grid place-items-center'>
                              Y
                          </span>
                          <div>
                          <h3 className=' capitalize font-semibold text-lg lg:text-xl'>{name}</h3>
                          <p className='text'>@{tagName}</p>
                          </div>
                  </div>
                  <div className='grid place-items-center'>
                      <button type='button' className='fl-btn capitalize'>
                          {btn}
                      </button>
                  </div>
                      </div>
                      <p className='my-2 lg:my-4  lg:text-lg text-gray-600 dark:text-gray-300'>
                          {desc}
                      </p>
                      <div className='grid gap-3'>
                          <p className='flex items-center gap-2 capitalize text-gray-500 dark:text-gray-200'>
                              <BsBuildings size={20} />
                              {company}
                          </p>
                          <p className='flex items-center gap-2 capitalize text-gray-500 dark:text-gray-200'>
                              <CiLocationOn size={20} />
                              {location}
                          </p>
                          <p className='flex items-center gap-2 text-gray-500 dark:text-gray-200'>
                              <IoLink size={20} />
                              <span className='!text-[#009688]'>{link}</span>
                          </p>
                      </div>
                  </div>
              )}
          </div>
    </article>
  )
}

export default Card
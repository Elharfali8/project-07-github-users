import Image from 'next/image';
import React from 'react'
import { BsBuildings } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoLink } from "react-icons/io5";
import defaultAvatar from '@/assets/default-avatar.png'
import {FaUser} from 'react-icons/fa6' 

type CardTypes = {
    title: string;
    btn?: string;
    name?: string;
    avatar?: string | null,
    tagName?: string;
    bio?: string;
    company?: string;
    location?: string;
    link?: string
}


const Card = ({title, btn, name, tagName, bio, company, location, link, avatar}: CardTypes) => {
  return (
      <article className='h-full'>
          <span className='card py-1 px-4 md:text-lg text capitalize rounded-t-lg'>{title}</span>
          <div className='pt-6 px-8 card rounded-tr-lg rounded-b-lg shadow-md h-full'>
              {title === 'user' && (
                  <div>
                      <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-4'>
                              {avatar ? (
                                  <Image src={avatar} alt='avatarUrl' width={80} height={80} className=' w-20 h-20   rounded-full object-cover'/>
                              ) : (
                                      <span className=' h-14 w-14  rounded-full grid place-items-center border bg-white'>
                                          <FaUser size={24} />
                                      </span>
                          )}
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
                      {bio !== '' ? (
                          <p className='my-2 lg:my-4  lg:text-lg text-gray-600 dark:text-gray-300'>
                          {bio}
                      </p>
                      ) : <div className='my-2 lg:my-4 h-[2px] w-full bg-gray-600 dark:bg-gray-300' />}
                      
                      <div className='grid gap-3'>
                          <p className='flex items-center gap-2 capitalize text-gray-500 dark:text-gray-200'>
                              <BsBuildings size={20} />
                              {company ? company : 'null'}
                          </p>
                          <p className='flex items-center gap-2 capitalize text-gray-500 dark:text-gray-200'>
                              <CiLocationOn size={20} />
                              {location ? location : 'no location'}
                          </p>
                          <p className='flex items-center gap-2 text-gray-500 dark:text-gray-200'>
                              <IoLink size={20} />
                              <span className='!text-[#009688]'>{link}</span>
                          </p>
                      </div>
                  </div>
              )}
              {title === 'followers' && (
                  <div className='max-h-[280px] overflow-y-auto grid gap-2'>
                      <div className='flex items-center gap-3 main-border px-1 bg-white dark:bg-black'>
                      <span className=' h-11 w-11 bg-blue-400 rounded-full grid place-items-center'>
                              Y
                          </span>
                          <div>
                          <h3 className=' capitalize font-semibold lg:text-lg'>name</h3>
                          <p className='text'>@tagName</p>
                          </div>
                      </div>
                      <div className='flex items-center gap-3 main-border px-1 bg-white dark:bg-black'>
                      <span className=' h-11 w-11 bg-blue-400 rounded-full grid place-items-center'>
                              Y
                          </span>
                          <div>
                          <h3 className=' capitalize font-semibold lg:text-lg'>name</h3>
                          <p className='text'>@tagName</p>
                          </div>
                      </div>
                      <div className='flex items-center gap-3 main-border px-1 bg-white dark:bg-black'>
                      <span className=' h-11 w-11 bg-blue-400 rounded-full grid place-items-center'>
                              Y
                          </span>
                          <div>
                          <h3 className=' capitalize font-semibold lg:text-lg'>name</h3>
                          <p className='text'>@tagName</p>
                          </div>
                      </div>
                      <div className='flex items-center gap-3 main-border px-1 bg-white dark:bg-black'>
                      <span className=' h-11 w-11 bg-blue-400 rounded-full grid place-items-center'>
                              Y
                          </span>
                          <div>
                          <h3 className=' capitalize font-semibold lg:text-lg'>name</h3>
                          <p className='text'>@tagName</p>
                          </div>
                      </div>
                      <div className='flex items-center gap-3 main-border px-1 bg-white dark:bg-black'>
                      <span className=' h-11 w-11 bg-blue-400 rounded-full grid place-items-center'>
                              Y
                          </span>
                          <div>
                          <h3 className=' capitalize font-semibold lg:text-lg'>name</h3>
                          <p className='text'>@tagName</p>
                          </div>
                      </div>
                  </div>
              )}
          </div>
    </article>
  )
}

export default Card
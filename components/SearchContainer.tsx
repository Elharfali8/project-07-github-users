import React from 'react'
import SearchInput from './SearchInput'

const SearchContainer = () => {
  return (
      <div className='p-4 lg:p-8 bg-zinc-100 dark:bg-zinc-800 rounded-xl shadow-lg '>
          <div className='flex flex-wrap items-center gap-4 '>
              <div className=' w-full'>
              <SearchInput />
              </div>
              <div className='w-full' >
                  <p className='text-lg md:text-xl lg:text-2xl text capitalize'>requests : 48 / 60</p>
              </div>
          </div>
    </div>
  )
}

export default SearchContainer
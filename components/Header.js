import Image from 'next/image'
import React from 'react'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
const Header = () => {
  return (
    <div>
      <div className="flex max-w-6xl justify-between bg-white">
        {/* left side */}
        <div className="relative hidden w-24 lg:inline-grid">
          <Image
            src="https://links.papareact.com/ocw"
            objectFit="contain"
            layout="fill"
          />
        </div>
        <div className="relative  w-10 flex-shrink-0 cursor-pointer lg:hidden">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* middle */}
        <div className="relative mt-1 rounded-md p-3 ">
          <div className="pointer-events-none  absolute inset-y-0 flex items-center pl-3">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            className="block w-full rounded-md border-gray-300 bg-gray-50 
            pl-10
            focus:border-black focus:ring-black sm:text-sm"
            type="text"
            placeholder="Search"
          />
        </div>
        {/* right side */}
      </div>
    </div>
  )
}

export default Header

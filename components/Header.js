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
import { HomeIcon } from '@heroicons/react/solid'

const Header = () => {
  return (
    <div>
      <div className="mx-5 flex max-w-6xl justify-between  xl:mx-auto">
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
        <div className="max-w-xs">
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
        </div>
        {/* right side */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 cursor-pointer md:hidden" />
          <div className="navBtn relative">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div
              className="absolute -top-1 -right-1 flex
            h-5 w-5 animate-pulse items-center justify-center rounded-full
             bg-red-500 text-xs font-bold text-white"
            >
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            src="https://links.papareact.com/3ke"
            alt="profile pic"
            className="h-10 cursor-pointer rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Header

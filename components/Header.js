import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="flex max-w-6xl justify-between bg-white">
        {/* left side */}
        <div className="relative hidden h-24 w-24 lg:inline-grid">
          <Image
            src="https://links.papareact.com/ocw"
            objectFit="contain"
            layout="fill"
          />
        </div>
        <div className="relative h-10 w-10 flex-shrink-0 lg:hidden">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* middle */}
        {/* right side */}
      </div>
    </div>
  )
}

export default Header

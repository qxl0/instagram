import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="flex max-w-6xl justify-between bg-white">
        {/* left side */}
        <div className="relative h-24 w-24">
          <Image
            src="https://links.papareact.com/ocw"
            objectFit="contain"
            layout="fill"
          />
        </div>
        {/* middle */}
        {/* right side */}
      </div>
    </div>
  )
}

export default Header

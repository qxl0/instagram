import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
      {/* left side */}
      <div>
        <Image
          src="https://links.papareact.com/ocw"
          width={30}
          height={30}
          layout="fill"
        />
      </div>
      {/* middle */}
      {/* right side */}
    </div>
  )
}

export default Header

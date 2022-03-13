import React from 'react'

const MiniProfile = () => {
  return (
    <div className="mt-14 ml-10 flex items-center justify-center">
      <img
        className="rounded-full border p-[2px] "
        src="https://links.papareact.com/3ke"
        alt=""
      />

      <div>
        <h2>john</h2>
        <h3>Welcome to Instagram</h3>
      </div>

      <button>Sign Out</button>
    </div>
  )
}

export default MiniProfile

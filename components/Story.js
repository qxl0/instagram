import React from 'react'

const Story = (props) => {
  const { username, avatar: img } = props
  return (
    <div>
      <img
        src={img}
        alt=""
        className="h-14 w-14 rounded-full border-2 border-red-500 object-contain p-[1.5px]"
      />
      <p className="w-14 truncate text-center text-xs">{username}</p>
    </div>
  )
}

export default Story

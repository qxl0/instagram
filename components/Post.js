import { DotsHorizontalIcon } from '@heroicons/react/outline'
import React from 'react'

const Post = ({ username, userImg, img, caption }) => {
  return (
    <div>
      {/* header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt=""
          className="mr-3 h-12 w-12 rounded-full border object-contain p-1"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* img */}
      {/* buttons */}
      {/* comments */}
      {/* input box */}
      <img src={img} alt="" className="h-48 w-48 rounded-full object-cover" />
    </div>
  )
}

export default Post

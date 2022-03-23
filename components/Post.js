import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { onSnapshot } from 'firebase/firestore'

const Post = ({ username, userImg, img, caption }) => {
  const { data: session } = useSession()
  const [comments, setComments] = useState([])
  const [likes, setLikes] = useState([])
  const [comment, setComment] = useState('')

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, 'posts', id, 'comments'),
        orderBy('timestamp', 'desc')
      ),
      (snapshot) => setComments(snapshot.docs)
    ),
      [db, id]
  })
  useEffect(() => {
    onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) =>
      setLikes(snapshot.docs)
    ),
      [db, id]
  })

  return (
    <div className="my-7 rounded-sm border bg-white">
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
      <img src={img} alt="" className="w-full object-cover" />
      {/* buttons */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}
      {/* caption */}
      <div>
        <p className="truncate p-5">
          <span className="mr-1 font-bold">{username} </span>
          {caption}
        </p>
      </div>
      {/* comments */}
      {/* input box */}
      {session && (
        <form action="" className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 border-none outline-none focus:ring-0"
          />
          <button className="font-semibold text-blue-400">Post</button>
        </form>
      )}
    </div>
  )
}

export default Post

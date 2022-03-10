import React from 'react'
import Post from './Post'

const posts = [
  {
    id: '12',
    username: 'johndoe',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'SUBSCRIBE AND DESTORY THE LIKE BUTTON for youtube alogrithm!',
  },
  {
    id: '34',
    username: 'johndoe',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'SUBSCRIBE AND DESTORY THE LIKE BUTTON for youtube alogrithm!',
  },
]
const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
}

export default Posts

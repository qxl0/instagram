import React, { useEffect } from 'react'
import Post from './Post'
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HearIconFilled } from '@heroicons/react/solid'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
// const posts = [
//   {
//     id: '12',
//     username: 'johndoe',
//     userImg: 'https://links.papareact.com/3ke',
//     img: 'https://imageio.forbes.com/specials-images/imageserve/60a77f30768434735cc94924/Grand-Prismatic-Spring---Yellowstone-National-Park/960x0.jpg?fit=bounds&format=jpg&width=960',
//     caption: 'SUBSCRIBE AND DESTORY THE LIKE BUTTON for youtube alogrithm!',
//   },
//   {
//     id: '34',
//     username: 'johndoe',
//     userImg: 'https://links.papareact.com/3ke',
//     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/YellowstonefallJUN05.JPG/1200px-YellowstonefallJUN05.JPG',
//     caption: 'SUBSCRIBE AND DESTORY THE LIKE BUTTON for youtube alogrithm!',
//   },
// ]
const Posts = () => {
  const [posts, setPosts] = React.useState([])
  useEffect(
    () =>
      // snapshot listener
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setPosts(snapshot.docs)
          console.log(posts)
        }
      ),
    [db]
  )
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}

export default Posts

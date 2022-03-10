import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'

const Feed = () => {
  return (
    <div className="mx-auto grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
      {/* section */}
      <section className="col-span-2">
        {/* stories */}
        <Stories />
        {/* Posts */}
        <Posts />
      </section>
      {/* section */}
      <section>
        <MiniProfile />
      </section>
      {/* Mini profile */}
      {/* suggestions  */}
    </div>
  )
}

export default Feed

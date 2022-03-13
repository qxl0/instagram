import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'

const Feed = () => {
  return (
    <main className="mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>

      <section className="hidden md:col-span-1 xl:inline-flex">
        <div className="fixed top-20">
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </main>
  )
}

export default Feed

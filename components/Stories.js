import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'
import Story from './Story'

const Stories = () => {
  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    //
    const suggestions = [...Array(20)].map((_, i) => {
      return { ...faker.helpers.contextualCard(), id: i }
    })
    setSuggestions(suggestions)
  }, [])
  return (
    <div>
      {suggestions.map((profile) => {
        return <Story key={profile.id} {...profile} />
      })}
    </div>
  )
}

export default Stories

import faker from '@faker-js/faker'
import React, { useEffect, useState } from 'react'

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))

    setSuggestions(suggestions)
  }, [])
  return (
    <div className="mt-4 ml-10">
      <div className="mb-5 flex justify-between text-sm">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-600">See All</button>
      </div>

      {suggestions.map((suggestion) => (
        <div
          className="mb-5 flex items-center justify-between"
          key={suggestion.id}
        >
          <img
            className="h-16 w-16 rounded-full border p-[2px]"
            src={suggestion.avatar}
            alt=""
          />
        </div>
      ))}
    </div>
  )
}

export default Suggestions

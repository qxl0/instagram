import React, { useEffect } from 'react'
import { faker } from '@faker-js/faker'

const Stories = () => {
  useEffect(() => {
    //
    const suggestions = [...Array(20)].map((_, i) => {
      return { ...faker.helpers.contextualCard(), id: i }
    })
    console.log(suggestions)
  }, [])
  return <div>Stories</div>
}

export default Stories

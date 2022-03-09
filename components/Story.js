import React from 'react'

const Story = (props) => {
  const { username, avatar: img } = props
  return (
    <div>
      <img src={img} alt="" />
      <p>{username}</p>
    </div>
  )
}

export default Story

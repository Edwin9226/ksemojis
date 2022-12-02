import React from 'react'
import './emojis.css'

const EmojiList = ({ children }) => {
  return (
    <div className='emojisList'>{children}</div>
  )
}

export default EmojiList
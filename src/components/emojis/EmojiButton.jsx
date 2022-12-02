import React from 'react'



const EmojiButton = ({emoji, onClick}) => {

    function handleClick(){
    onClick(emoji);
    }
  return (
    <div>
        <button className='emojiButton' onClick={handleClick}>
            {emoji.emoji}
        </button>
    </div>
  )
}

export default EmojiButton
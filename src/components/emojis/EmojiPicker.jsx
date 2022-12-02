import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { data as emojiList } from "./data";
import EmojiButton from './EmojiButton';
import EmojiSearch from './EmojiSearch';

import './emojis.css'
import EmojiList from './EmojiList';

export function EmojiPicker(props,inputRef){
const[isOpen, setIsOpen]= useState(false);
const [emojis, setEmojis] = useState(emojiList);


const containerRef = useRef(null);
useEffect(() => {
  window.addEventListener('click', (e) =>{
    if(!containerRef.current.contais(e.target)){
      setIsOpen(false);
      setEmojis(...emojiList);
    }

  });
}, [])


function handleClickOpen(){
  setIsOpen(!isOpen);
  }

  function handleOnClickEmoji(emoji){
    const cursorPos= inputRef.current.selectionStart;
    const text=  inputRef.current.value;
    const prev= text.slice(0, cursorPos);
    const next= text.slice(cursorPos);
  
    inputRef.current.value= prev+ emoji.emoji+ next; 
    inputRef.current.selectionStart= cursorPos + emoji.emoji.length;
    inputRef.current.selectionEnd=  cursorPos + emoji.emoji.length;
    inputRef.current.focus();
  }
  

function handleSearch(e){

  const q= e.target.value;
  if(!!q)
  {
    const search = emojiList.filter((emoji)=>{
      
      return( 
        emoji.name.toLowerCase().includes(q)
      );
    });
    setEmojis(search);
  }else{
    setEmojis(emojiList);
  }


}



  return(
   
   <div className='inputContainer' ref={containerRef}>


   <button className='emojiPickerButton' onClick={handleClickOpen}>👲</button>
   {
    isOpen?(
      <div className='emojiPickerContainer'>
        <EmojiSearch onSearch={handleSearch}/>
        
        <EmojiList>
          {
            emojis.map((emoji)=>(
              <EmojiButton key={emoji.id} emoji={emoji} onClick={handleOnClickEmoji}/>
             
            ))
          }</EmojiList>
      </div>
    ): ("")
   }
    </div>
  )
}

export default forwardRef(EmojiPicker);
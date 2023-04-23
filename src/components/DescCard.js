import React from 'react'

const DescCard = ({info}) => {

    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
    

  return (
    <div>

    <h1> {title} </h1>
    
    
    </div>
  )
}

export default DescCard;
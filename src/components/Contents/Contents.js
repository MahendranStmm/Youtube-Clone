import React from 'react'
import {Button} from '@mui/material'
import './Contents.css'
import Video from '../Video/Video'

const Contents = () => {
  return (
    <div>
      <div className='button'> 
      <p className='all'>All</p>
      <p>Sports</p>
      <p>Cinema</p>
      <p>News</p>
      <p>Arts</p>
      <p id='music'>Muisc</p>
      <p>Politics</p>
      <p>Songs</p>
      <p>Comedy</p>
    </div>
    <Video/>
    </div>
 
  )
}

export default Contents
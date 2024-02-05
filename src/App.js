import React from 'react'
import MusicList from './Components/MusicList'
import Musicplayer from './Components/Musicplayer'
import AddMusic from './Components/AddMusic'

function App() {
  return (
    <>
    <h1 className='container mt-5 d-flex justify-content-around'>MUSIC APP</h1>
    <div id="appup" className='container mt-5 d-flex justify-content-around w-100'>
        <div id='musiclist w-100 h-50'>
        <MusicList/>
        </div>
        <div id='addmusic w-100'>
         
        <AddMusic/><div className='container mt-5 d-flex flex-column  justify-content-around'>
        NOW-Playing
      <Musicplayer/>
    </div>
        </div>
    </div>
    
    
    
    </>
  )
}

export default App
import React from "react";
import { useState, useEffect } from "react";
import mpsong from "./songs/1.mp3"

function Musicplayer() {
  const [selectedSong, setSelectedSong] = useState();

  // useEffect(() => {
  //   // Retrieve the selected song from local storage
  //   const storedSelectedSong = localStorage.getItem('selectedSong');

  //   if (storedSelectedSong) {
  //     setSelectedSong(JSON.parse(storedSelectedSong));
  //   }
  // }, [selectedSong]);
  // console.log(selectedSong);

  return (
    <>
      <div class="player">
        <div class="div">
          <audio
            src={mpsong}
            controls
            autoPlay
            onPlay={() => {
              setSelectedSong(JSON.parse(localStorage.getItem("selectedSong")));
            }}
          ></audio>
          <p>Music Name - {selectedSong}</p>
        </div>
      </div>
    </>

    //   <>
    //   <div className="player">
    //     <div className="div">
    //       {selectedSong ? (
    //         <>
    //           <p>songname = {selectedSong}</p>
    //           <audio src={selectedSong.music_file} controls autoPlay></audio>
    //         </>
    //       ) : (
    //         <p>No song selected</p>
    //       )}
    //     </div>
    //   </div>
    // </>
  );
}

export default Musicplayer;

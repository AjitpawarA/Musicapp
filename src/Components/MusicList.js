import React, { useState, useEffect } from 'react';
// import "./musiclist.css";

function MusicList() {
  const [songslist, setsongs] = useState([]);
  const [selectedsong, setsongtoselect] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/songs.json");
        const data = await response.json();
        setsongs(data.songs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(songslist);

  return (
    <>
      <ul className="list-groupm overflow-scroll w-100 h-75">
        {songslist.map((song) => (
          <li key={song.id} className="list-group-item w-100 border m-1 p-2" onClick={(event) => {
            localStorage.setItem('selectedSong', JSON.stringify(song.music_file));
            setsongtoselect(song);
            console.log(song);
          }}>
            {song.name}<span className='me-5 ms-5'></span>{song.music_file}
          </li>
        ))}
      </ul>
    </>
  );
}

export default MusicList;

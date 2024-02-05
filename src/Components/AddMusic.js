import React, { useState } from 'react';

function AddMusic() {
  const [songName, setSongName] = useState('');
  const [file, setFile] = useState(null);

  const handleSongNameChange = (e) => {
    setSongName(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('songName', songName);
    formData.append('file', file);

    const apiUrl = 'your-api-endpoint';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Data successfully uploaded to the API');
        setSongName('');
        setFile(null);
      } else {
        console.error('Failed to upload data to the API');
      }
    } catch (error) {
      console.error('Error during API request:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Song Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={songName}
            onChange={handleSongNameChange}
          />
        </div>
        <div className="mb-3">
          <div className="input-group mb-3">
            <input
              type="file"
              className="form-control"
              id="inputGroupFile02"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default AddMusic;

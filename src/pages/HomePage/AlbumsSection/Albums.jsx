// src/components/Albums.js
import { useState, useEffect } from "react";
import axios from "axios";

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => setAlbums(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Albums</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;

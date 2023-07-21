/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";

const Photos = ({ match }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/albums/${match.params.albumId}/photos`
      )
      .then((response) => setPhotos(response.data))
      .catch((error) => console.error(error));
  }, [match.params.albumId]);

  return (
    <div>
      <h2>Photos</h2>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Photos;

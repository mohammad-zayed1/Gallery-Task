/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../../components/Loader";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [loader, setLoader] = useState(false);
  const { albumId } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((response) => {
        setPhotos(response.data);
        setLoader(true);
      })
      .catch((error) => console.error(error));
  }, [albumId]);

  return (
    <div>
      {loader ? (
        <div className="max-w-[90%] mx-auto py-8">
          <h2 className="text-3xl text-center font-bold my-6">Photos</h2>
          <div className="font-bold text-lg my-4">
            Total Photos ( {photos.length} )
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 ">
            {photos.map((photo) => (
              <img
                key={photo.id}
                src={photo.thumbnailUrl}
                alt={photo.title}
                className="hover:rotate-3 transition delay-75 duration-300 ease-in-out rounded-md shadow-lg"
              />
            ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Photos;

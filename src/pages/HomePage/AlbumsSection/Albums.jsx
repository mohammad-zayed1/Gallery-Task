// src/components/Albums.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/Loader";
import axios from "axios";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [loader, setLoader] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const navigateTo = useNavigate();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        setAlbums(response.data);
        setLoader(true);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleAlbum = (id) => {
    navigateTo(`/photos/${id}`);
  };

  return (
    <>
      {loader ? (
        <div className="max-w-[90%] mx-auto py-8 grow">
          <h2 className="text-3xl text-center font-bold my-6">Albums</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 sm:gap-2 max-h-[500px] overflow-scroll p-2">
            {albums.slice(0, showMore ? albums.length : 9).map((album) => (
              <div
                key={album.id}
                className="card card-compact  bg-base-100 shadow-xl"
              >
                <div className="card-body flex flex-col justify-between items-center ">
                  <figure className="rounded-md">
                    <img
                      src="https://img.freepik.com/free-vector/five-hanging-photo-frames-yellow-background_1017-26517.jpg?w=826&t=st=1689954741~exp=1689955341~hmac=9816bd2ba2d5c0da935b6b10acd08beacffaa7c8d09cac51cc2039ad45b6449b"
                      alt="album"
                      className="max-w-full"
                    />
                  </figure>
                  <h2 className="card-title">{album.title}</h2>

                  <div className="card-actions justify-end">
                    <button
                      onClick={() => handleAlbum(album.id)}
                      className="btn btn-sm btn-primary"
                    >
                      Show Album
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center items-center my-8">
            <button
              className="btn btn-md btn-primary"
              onClick={() => setShowMore(!showMore)}
            >
              Show {showMore ? "Less" : "More"}
            </button>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Albums;

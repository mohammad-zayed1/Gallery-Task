/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleClickPost = (postId) => {
    navigate(`/post/${postId}`);
  };

  return (
    <div className="max-w-[90%] mx-auto py-8">
      <h2 className="text-3xl text-center font-bold my-6">Recent Posts</h2>
      <div className="grid grid-cols-3 gap-4">
        {posts.slice(0, showMore ? posts.length : 9).map((post) => (
          <article
            key={post.id}
            className="p-6 mb-2 text-base bg-white rounded-lg flex flex-col justify-between hover:border-l-2 hover:border-primary transition-[0.2s] shadow-lg"
          >
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Michael Gough"
                  />
                  user_{post.userId}
                </p>
              </div>
            </footer>
            <h3 className="text-black capitalize text-lg font-bold">
              {post.title}{" "}
            </h3>

            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                onClick={() => handleClickPost(post.id)}
                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
              >
                Show Details
              </button>
            </div>
          </article>
        ))}
      </div>
      <div className="w-full flex justify-center items-center my-5">
        <button
          className="btn btn-md btn-primary"
          onClick={() => setShowMore(!showMore)}
        >
          Show {showMore ? "Less" : "More"}
        </button>
      </div>
    </div>
  );
};

export default Posts;

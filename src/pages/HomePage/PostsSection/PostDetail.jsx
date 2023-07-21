import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const PostDetail = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.error(error));

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => setComments(response.data))
      .catch((error) => console.error(error));
  }, [postId]);

  const comment = comments.map((comment) => (
    <article
      key={comment.id}
      className="p-6 mb-6 ml-6 lg:ml-12 text-base bg-white rounded-lg"
    >
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900">
            <img
              className="mr-2 w-10 h-10 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="Jese Leos"
            />
            <div className="flex flex-col ">
              <p className="capitalize font-bold ">{comment.name}</p>
              <p className="text-gray-400">{comment.email}</p>
            </div>
          </p>
        </div>
      </footer>
      <p className="text-gray-500 dark:text-gray-400">{comment.body}</p>
    </article>
  ));
  return (
    <div className="max-w-[80%] mx-auto py-8">
      <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt="Michael Gough"
              />
              Michael Gough
            </p>
          </div>
        </footer>
        <h3 className="text-black capitalize text-lg font-bold">
          {post.title}
        </h3>
        <p className="text-gray-500">{post.body}</p>
        <div className="flex items-center mt-4 space-x-4">
          <button
            type="button"
            className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
          >
            <svg
              aria-hidden="true"
              className="mr-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Reply
          </button>
        </div>
      </article>
      <h3 className=" mb-2  ml-6 lg:ml-12 text-base font-bold">
        {comments.length} Comments
      </h3>
      {comment}
    </div>
  );
};

export default PostDetail;

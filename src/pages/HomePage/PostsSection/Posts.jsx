/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Loader from "../../../components/Loader";
import { UserContext } from "../../../App";
import { ToastContainer, toast } from "react-toastify";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [loader, setLoader] = useState(false);
  const [users, setUsers] = useState({});
  const { userData, refresh, setRefresh } = useContext(UserContext);
  const navigate = useNavigate();
  const uniqueId = uuidv4();
  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);

  const [postInfo, setPostInfo] = useState({
    userId: userData.id,
    id: uniqueId,
    title: "",
    body: "",
  });
  console.log("posts", userData);
  console.log("postInfo", postInfo);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
        setLoader(true);
      })
      .catch((error) => console.error(error));
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.error(error));
  }, [refresh]);

  console.log(users);

  const handleClickPost = (postId) => {
    navigate(`/post/${postId}`);
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        postInfo
      );
      console.log("New post created:", response.data);
      setPosts((prev) => [...prev, response.data]);
      notifySuccess("Post Added Success");
      // setRefresh(!refresh);
    } catch (error) {
      console.error("Error creating post:", error);
      notifyError(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log("posts length", posts.length);
  return (
    <>
      {loader ? (
        <div className="max-w-[90%] mx-auto pb-8 my-6">
          <div>
            <p className="inline-flex items-center mr-3 mb-3 text-sm text-gray-900 dark:text-white">
              <img
                className="mr-2 w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt="Michael Gough"
              />
              <h3 className="text-lg font-bold ">{`Hello, ${userData.name} 🖐`}</h3>
            </p>

            <form className="mb-6" onSubmit={handlePostSubmit}>
              <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 h-[50px] shadow-lg">
                <label htmlFor="comment" className="sr-only">
                  Your Title
                </label>
                <textarea
                  id="title"
                  rows={1}
                  className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none mb-4 resize-none "
                  placeholder="Post Title"
                  required
                  name="title"
                  onChange={handleChange}
                  value={postInfo.title}
                />
              </div>
              <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 shadow-lg">
                <label htmlFor="comment" className="sr-only">
                  Your body
                </label>
                <textarea
                  id="title"
                  rows={3}
                  className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none mb-4 resize-none "
                  placeholder={`What do you think, ${userData.name} ?`}
                  required
                  name="body"
                  value={postInfo.body}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                >
                  Add New Post
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>
          <h2 className="text-3xl text-center font-bold mb-6">Recent Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 h-[500px] overflow-scroll overflow-x-hidden">
            {posts.slice(0, showMore ? posts.length : 9).map((post) => {
              // let user = users[index]["id"] === post.userId && users[index];
              return (
                <article
                  key={post.id}
                  className="posts p-6 mb-2 text-base bg-white rounded-lg flex flex-col justify-between hover:border-l-2 hover:border-primary  shadow-lg"
                >
                  <footer className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <p className="inline-flex items-center mr-3 text-sm text-gray-900 ">
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
              );
            })}
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
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Posts;

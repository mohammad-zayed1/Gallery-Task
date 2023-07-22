// src/components/UserProfile.js
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../App";
const Profile = () => {
  const { userData } = useContext(UserContext);
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userData.id}`) // Assuming user ID 1 for demonstration
      .then((response) => setUser(response.data))
      .catch((error) => console.error(error));

    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`) // Assuming user ID 1 for demonstration
      .then((response) => setPosts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <h3>Your Posts</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;

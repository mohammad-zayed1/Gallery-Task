// src/components/UserProfile.js
import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1") // Assuming user ID 1 for demonstration
      .then((response) => setUser(response.data))
      .catch((error) => console.error(error));

    axios
      .get("https://jsonplaceholder.typicode.com/posts?userId=1") // Assuming user ID 1 for demonstration
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

// src/components/UserProfile.js
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../App";
import UserInfo from "./UserInfo";
import UserAddress from "./userAddress";
import UserCompany from "./userCompany";
import UserPosts from "./userPosts";
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
  console.log(user, user.address, user.company);
  return (
    <div>
      <h2 className="text-3xl text-center font-bold my-6">Profile</h2>
      <div className="bg-[#fcfbfb] max-w-[90%] mx-auto my-6 rounded-lg py-4 shadow-xl">
        <h3 className="text-center text-3xl my-6 font-semibold"> My Info</h3>
        <div>
          <UserInfo user={user} />
        </div>
        <div>
          <UserAddress address={user.address} />
        </div>
        <div>
          <UserCompany company={user.company} />
        </div>
        <div>
          <UserPosts posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default Profile;

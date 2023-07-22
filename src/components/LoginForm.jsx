import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../App";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();
  const notifyError = (msg) => toast.error(msg);
  const notifySuccess = (msg) => toast.success(msg);
  const { setUserData, userData, refresh, setRefresh } =
    useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();

    // For this example, we assume the password should be the same as the email address
    if (email === password) {
      fetchUserFromAPI(email)
        .then((user) => {
          console.log("Logged in successfully!");
          // console.log(user);
          setUserData(user);
          // localStorage.setItem("user", JSON.Stringify(user));
          notifySuccess("Logged in successfully!");
          setTimeout(() => {
            localStorage.setItem("token", true);
            navigateTo("/");
            setRefresh(!refresh);
          }, 2000);
          // Do further actions here, like redirecting to another page
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          notifyError("Invalid email or password.");
        });
    } else {
      notifyError("Email and password do not match.");
    }
  };
  console.log("login-user", userData);
  const fetchUserFromAPI = async (email) => {
    // Use the JSONPlaceholder API to fetch user data based on the email (Assuming the email is the username)
    const url = `https://jsonplaceholder.typicode.com/users?email=${email}`;
    try {
      const response = await axios.get(url);
      const data = response.data;
      if (data && data.length > 0) {
        return data[0];
      } else {
        throw new Error("User not found.");
      }
    } catch (error) {
      throw new Error("Error fetching user data.");
    }
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userData));
  }, [userData]);
  return (
    <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleLogin}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          name="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          name="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;

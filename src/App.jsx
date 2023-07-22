import { createContext, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

export const UserContext = createContext();

function App() {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user")) ?? {}
  );
  const [refresh, setRefresh] = useState(true);

  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) ?? false
  );

  // useEffect(() => {
  //   setToken(JSON.parse(localStorage.getItem("token")));
  // }, []);

  console.log("app-user", userData);

  return (
    <UserContext.Provider
      value={{ userData, setUserData, refresh, setRefresh, token, setToken }}
    >
      <div className="App flex flex-col justify-between h-full items-between">
        <Navbar />
        <main className="main-content grow ">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;

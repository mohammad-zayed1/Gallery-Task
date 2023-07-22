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

  // const [token, setToken] = useState("");

  // useEffect(() => {
  //   setToken(localStorage.getItem("token"));
  // }, []);

  console.log("app-user", userData);

  return (
    <UserContext.Provider
      value={{ userData, setUserData, refresh, setRefresh }}
    >
      <div className="App flex flex-col h-full">
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

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

import "./App.css";

function App() {
  return (
    <div className="App flex flex-col h-full">
      <Navbar />
      <main className="main-content grow ">
        <AppRoutes/>
      </main>
      <Footer />
    </div>
  );
}

export default App;

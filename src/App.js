import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="mt-20 md:px-40 h-full " style={{ backgroundColor: "#fbf1fb" }}>
        <Outlet />
      </div>
      <Footer/>
    </>
  );
}

export default App;
